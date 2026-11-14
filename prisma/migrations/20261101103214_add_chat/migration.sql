-- CreateEnum
CREATE TYPE "SenderType" AS ENUM ('CUSTOMER', 'SUPPORTER');

-- CreateEnum
CREATE TYPE "ChatStatus" AS ENUM ('OPEN', 'RESOLVED', 'ARCHIVED');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "isSupporter" BOOLEAN NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE "SupportChat" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "status" "ChatStatus" NOT NULL DEFAULT 'OPEN',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SupportChat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SupportMessage" (
    "id" TEXT NOT NULL,
    "chatId" TEXT NOT NULL,
    "senderType" "SenderType" NOT NULL,
    "senderId" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "isRead" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SupportMessage_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SupportChat_userId_key" ON "SupportChat"("userId");

-- CreateIndex
CREATE INDEX "SupportMessage_chatId_idx" ON "SupportMessage"("chatId");

-- AddForeignKey
ALTER TABLE "SupportChat" ADD CONSTRAINT "SupportChat_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SupportMessage" ADD CONSTRAINT "SupportMessage_chatId_fkey" FOREIGN KEY ("chatId") REFERENCES "SupportChat"("id") ON DELETE CASCADE ON UPDATE CASCADE;
