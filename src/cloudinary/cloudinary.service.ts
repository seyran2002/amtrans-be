import { Injectable, BadRequestException, Optional } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { v2 as cloudinary, UploadApiResponse } from 'cloudinary'
import { Readable } from 'stream'

export interface CloudinaryUploadResult {
    url: string
    secureUrl: string
    publicId: string
    format?: string
    width?: number
    height?: number
}

export type UploadFileInput = { buffer: Buffer } | Buffer

@Injectable()
export class CloudinaryService {
    constructor(@Optional() private readonly configService?: ConfigService) {
        this.initConfig()
    }

    private initConfig() {
        const cloudName = this.configService?.get<string>('CLOUDINARY_CLOUD_NAME') || process.env.CLOUDINARY_CLOUD_NAME
        const apiKey = this.configService?.get<string>('CLOUDINARY_API_KEY') || process.env.CLOUDINARY_API_KEY
        const apiSecret = this.configService?.get<string>('CLOUDINARY_API_SECRET') || process.env.CLOUDINARY_API_SECRET

        cloudinary.config({
            cloud_name: cloudName,
            api_key: apiKey,
            api_secret: apiSecret,
        })
    }

    async uploadImage(
        file: UploadFileInput,
        folder = 'flags',
        options?: { resourceType?: 'auto' | 'image' | 'raw' | 'video' },
    ): Promise<CloudinaryUploadResult> {
        if (!file) {
            throw new BadRequestException('No file provided')
        }

        const buffer = Buffer.isBuffer(file) ? file : (file as { buffer: Buffer })?.buffer
        if (!buffer || !Buffer.isBuffer(buffer) || buffer.length === 0) {
            throw new BadRequestException('No file provided or file buffer is empty')
        }

        this.initConfig()

        const result = await new Promise<UploadApiResponse>((resolve, reject) => {
            const uploadStream = cloudinary.uploader.upload_stream(
                {
                    folder,
                    resource_type: options?.resourceType || 'auto',
                },
                (error, result) => {
                    if (error) return reject(error)
                    if (!result) return reject(new Error('Cloudinary upload returned an empty response'))
                    resolve(result)
                },
            )

            const readable = Readable.from(buffer)
            readable.on('error', (err) => reject(err))
            uploadStream.on('error', (err) => reject(err))
            readable.pipe(uploadStream)
        })

        return this.mapResult(result)
    }

    async uploadMultiple(
        files: UploadFileInput[],
        folder = 'locations',
    ): Promise<CloudinaryUploadResult[]> {
        if (!files || files.length === 0) {
            throw new BadRequestException('No files provided')
        }

        return Promise.all(
            files.map(file => this.uploadImage(file, folder)),
        )
    }

    async uploadMultipleAndGetUrls(
        files: UploadFileInput[],
        folder = 'locations',
    ): Promise<string[]> {
        const results = await this.uploadMultiple(files, folder)
        return results.map(r => r.secureUrl)
    }

    async deleteImage(publicId: string) {
        this.initConfig()
        return cloudinary.uploader.destroy(publicId)
    }

    async deleteMultiple(publicIds: string[]) {
        this.initConfig()
        return cloudinary.api.delete_resources(publicIds)
    }

    private mapResult(result: UploadApiResponse): CloudinaryUploadResult {
        return {
            url: result.url,
            secureUrl: result.secure_url,
            publicId: result.public_id,
            format: result.format,
            width: result.width,
            height: result.height,
        }
    }
}