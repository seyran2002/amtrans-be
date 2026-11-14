/*
  Warnings:

  - You are about to drop the column `nameEn` on the `Country` table. All the data in the column will be lost.
  - You are about to drop the column `nameHy` on the `Country` table. All the data in the column will be lost.
  - You are about to drop the column `nameRu` on the `Country` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Country" DROP COLUMN "nameEn",
DROP COLUMN "nameHy",
DROP COLUMN "nameRu";
