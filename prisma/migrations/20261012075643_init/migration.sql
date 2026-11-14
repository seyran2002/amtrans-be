-- CreateEnum
CREATE TYPE "OrderStatus" AS ENUM ('REGISTERED', 'FOREIGN_WAREHOUSE', 'WAY', 'ARRIVED', 'READY');

-- CreateEnum
CREATE TYPE "Currency" AS ENUM ('USD', 'AED', 'EUR', 'RUB', 'AMD');

-- CreateTable
CREATE TABLE "Order" (
    "id" TEXT NOT NULL,
    "fromOfficeId" TEXT NOT NULL,
    "toOfficeId" TEXT NOT NULL,
    "receiverId" TEXT NOT NULL,
    "productPrice" DECIMAL(12,2) NOT NULL,
    "currency" "Currency" NOT NULL,
    "marketName" TEXT NOT NULL,
    "productDescription" TEXT NOT NULL,
    "invoiceUrl" TEXT,
    "comment" TEXT,
    "weight" DECIMAL(10,3) NOT NULL,
    "length" DECIMAL(10,2) NOT NULL,
    "width" DECIMAL(10,2) NOT NULL,
    "height" DECIMAL(10,2) NOT NULL,
    "qrCode" TEXT,
    "status" "OrderStatus" NOT NULL DEFAULT 'REGISTERED',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Order_fromOfficeId_idx" ON "Order"("fromOfficeId");

-- CreateIndex
CREATE INDEX "Order_toOfficeId_idx" ON "Order"("toOfficeId");

-- CreateIndex
CREATE INDEX "Order_receiverId_idx" ON "Order"("receiverId");

-- CreateIndex
CREATE INDEX "Order_status_idx" ON "Order"("status");

-- CreateIndex
CREATE INDEX "Order_createdAt_idx" ON "Order"("createdAt");

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_fromOfficeId_fkey" FOREIGN KEY ("fromOfficeId") REFERENCES "Office"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_toOfficeId_fkey" FOREIGN KEY ("toOfficeId") REFERENCES "Office"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_receiverId_fkey" FOREIGN KEY ("receiverId") REFERENCES "Receiver"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
