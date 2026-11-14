-- CreateEnum
CREATE TYPE "Role" AS ENUM ('CUSTOMER', 'OPERATOR', 'RECEIVER', 'ADMIN');

-- CreateEnum
CREATE TYPE "DocumentType" AS ENUM ('RAPassport', 'RAIdentificationCard', 'RABiometricPassport', 'ForeignPassport');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "firstName" TEXT,
    "lastName" TEXT,
    "isIndividual" BOOLEAN NOT NULL DEFAULT true,
    "documentType" "DocumentType",
    "documentNumber" TEXT,
    "companyName" TEXT,
    "taxpayerId" TEXT,
    "address" TEXT,
    "phoneNumber" TEXT,
    "telegramChatId" TEXT,
    "code" TEXT,
    "role" "Role" NOT NULL DEFAULT 'CUSTOMER',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
