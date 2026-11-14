-- DropIndex
DROP INDEX "Country_nameEn_idx";

-- AlterTable
ALTER TABLE "Country" ADD COLUMN     "enName" TEXT,
ADD COLUMN     "hyName" TEXT,
ADD COLUMN     "ruName" TEXT,
ALTER COLUMN "nameHy" DROP NOT NULL,
ALTER COLUMN "nameRu" DROP NOT NULL,
ALTER COLUMN "nameEn" DROP NOT NULL;

-- CreateIndex
CREATE INDEX "Country_enName_idx" ON "Country"("enName");
