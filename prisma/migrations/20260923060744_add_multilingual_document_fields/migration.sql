/*
  Warnings:

  - You are about to drop the column `documentType` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "documentType",
ADD COLUMN     "enDocumentType" TEXT,
ADD COLUMN     "hyDocumentType" TEXT,
ADD COLUMN     "ruDocumentType" TEXT;

-- DropEnum
DROP TYPE "DocumentType";
