-- AlterEnum
ALTER TYPE "OrderStatus" ADD VALUE 'PENDING_ESTIMATE';

-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "estimatedAt" TIMESTAMP(3),
ADD COLUMN     "estimatedById" TEXT,
ADD COLUMN     "estimatedPrice" DECIMAL(12,2);

-- CreateIndex
CREATE INDEX "Order_estimatedById_idx" ON "Order"("estimatedById");

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_estimatedById_fkey" FOREIGN KEY ("estimatedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
