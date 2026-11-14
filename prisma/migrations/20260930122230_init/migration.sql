/*
  Warnings:

  - Added the required column `userId` to the `Receiver` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Receiver" ADD COLUMN     "userId" TEXT NOT NULL;

-- CreateIndex
CREATE INDEX "Receiver_userId_idx" ON "Receiver"("userId");

-- AddForeignKey
ALTER TABLE "Receiver" ADD CONSTRAINT "Receiver_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
