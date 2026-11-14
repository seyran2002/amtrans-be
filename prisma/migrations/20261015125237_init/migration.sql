-- CreateTable
CREATE TABLE "Tariff" (
    "id" TEXT NOT NULL,
    "fromOfficeId" TEXT NOT NULL,
    "toOfficeId" TEXT NOT NULL,
    "pricePerKg" DECIMAL(10,2) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Tariff_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Tariff_fromOfficeId_toOfficeId_idx" ON "Tariff"("fromOfficeId", "toOfficeId");

-- AddForeignKey
ALTER TABLE "Tariff" ADD CONSTRAINT "Tariff_fromOfficeId_fkey" FOREIGN KEY ("fromOfficeId") REFERENCES "Office"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tariff" ADD CONSTRAINT "Tariff_toOfficeId_fkey" FOREIGN KEY ("toOfficeId") REFERENCES "Office"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
