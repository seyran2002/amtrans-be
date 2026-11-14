-- CreateTable
CREATE TABLE "SystemSetting" (
    "id" TEXT NOT NULL DEFAULT 'default',
    "volumetricDivisor" INTEGER NOT NULL DEFAULT 5000,

    CONSTRAINT "SystemSetting_pkey" PRIMARY KEY ("id")
);
