const fs = require('fs');

// 1. Update app/types/office.ts
const officeTsContent = `export interface Country {
  id: string
  nameHy: string
  nameRu: string
  nameEn: string
  icon: string | null
  createdAt: string
  updatedAt: string
}

export interface CreateCountryPayload {
  nameHy: string
  nameRu: string
  nameEn: string
  icon: File
}

export interface Office {
  id: string
  countryId: string
  countryName?: string
  countryIcon?: string | null
  province: string
  city: string
  postalCode: string
  fullAddress: string
  phone: string
  createdAt?: string
  updatedAt?: string
}

export interface CreateOfficePayload {
  countryId: string
  province: string
  city: string
  postalCode: string
  fullAddress: string
  phone: string
}

export interface UpdateOfficePayload {
  countryId?: string
  province?: string
  city?: string
  postalCode?: string
  fullAddress?: string
  phone?: string
}
`;

fs.writeFileSync('c:/Users/user/Desktop/AmTrans/app/types/office.ts', officeTsContent, 'utf8');

// 2. Update app/composables/useCountries.ts
const useCountriesContent = `import { ref } from 'vue'
import { useApi } from '~/composables/useApi'
import type { Country, CreateCountryPayload } from '~/types/office'

export function useCountries() {
  const { apiFetch } = useApi()

  const countries = ref<Country[]>([])
  const isLoading = ref<boolean>(false)
  const isSubmitting = ref<boolean>(false)
  const isDeleting = ref<boolean>(false)
  const error = ref<string | null>(null)

  const clearMessages = () => {
    error.value = null
  }

  /**
   * GET /countries — get all countries
   */
  const getCountries = async (): Promise<Country[]> => {
    isLoading.value = true
    error.value = null

    try {
      const response = await apiFetch<Country[] | { data: Country[]; countries?: Country[] }>('/countries', {
        method: 'GET'
      })

      let fetchedData: Country[] = []
      if (Array.isArray(response)) {
        fetchedData = response
      } else if (response && Array.isArray((response as any).data)) {
        fetchedData = (response as any).data
      } else if (response && Array.isArray((response as any).countries)) {
        fetchedData = (response as any).countries
      }

      countries.value = fetchedData
      return countries.value
    } catch (err: any) {
      const serverMsg = err?.data?.message || err?.response?._data?.message || err?.message
      error.value = Array.isArray(serverMsg)
        ? serverMsg.join(', ')
        : (typeof serverMsg === 'string' ? serverMsg : 'Failed to fetch countries.')
      return []
    } finally {
      isLoading.value = false
    }
  }

  /**
   * POST /countries — create a country
   * Sends multipart/form-data with nameHy, nameRu, nameEn, icon
   */
  const createCountry = async (data: CreateCountryPayload): Promise<Country | null> => {
    if (isSubmitting.value) return null

    isSubmitting.value = true
    clearMessages()

    try {
      const formData = new FormData()
      formData.append('nameHy', data.nameHy)
      formData.append('nameRu', data.nameRu)
      formData.append('nameEn', data.nameEn)
      if (data.icon) {
        formData.append('icon', data.icon)
      }

      const newCountry = await apiFetch<Country>('/countries', {
        method: 'POST',
        body: formData
      })

      if (newCountry) {
        countries.value = [newCountry, ...countries.value]
      }
      return newCountry
    } catch (err: any) {
      const serverMsg = err?.data?.message || err?.response?._data?.message || err?.message
      error.value = Array.isArray(serverMsg)
        ? serverMsg.join(', ')
        : (typeof serverMsg === 'string' ? serverMsg : 'Failed to create country.')
      return null
    } finally {
      isSubmitting.value = false
    }
  }

  /**
   * DELETE /countries/:id — delete a country
   */
  const deleteCountry = async (id: string): Promise<boolean> => {
    if (isDeleting.value) return false

    isDeleting.value = true
    clearMessages()

    try {
      await apiFetch(\`/countries/\${id}\`, {
        method: 'DELETE'
      })

      countries.value = countries.value.filter(c => c.id !== id)
      return true
    } catch (err: any) {
      const serverMsg = err?.data?.message || err?.response?._data?.message || err?.message
      error.value = Array.isArray(serverMsg)
        ? serverMsg.join(', ')
        : (typeof serverMsg === 'string' ? serverMsg : 'Failed to delete country.')
      return false
    } finally {
      isDeleting.value = false
    }
  }

  return {
    countries,
    isLoading,
    isSubmitting,
    isDeleting,
    error,
    clearMessages,
    getCountries,
    fetchCountries: getCountries,
    createCountry,
    deleteCountry
  }
}
`;

fs.writeFileSync('c:/Users/user/Desktop/AmTrans/app/composables/useCountries.ts', useCountriesContent, 'utf8');

console.log('Finished updating office.ts and useCountries.ts');
