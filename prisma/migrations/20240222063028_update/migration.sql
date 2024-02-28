/*
  Warnings:

  - You are about to drop the column `userId` on the `CalorieGoal` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `WaterGoal` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userEmail]` on the table `CalorieGoal` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userEmail]` on the table `WaterGoal` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "CalorieGoal" DROP CONSTRAINT "CalorieGoal_userId_fkey";

-- DropForeignKey
ALTER TABLE "WaterGoal" DROP CONSTRAINT "WaterGoal_userId_fkey";

-- DropIndex
DROP INDEX "CalorieGoal_userId_key";

-- DropIndex
DROP INDEX "WaterGoal_userId_key";

-- AlterTable
ALTER TABLE "CalorieGoal" DROP COLUMN "userId",
ADD COLUMN     "userEmail" TEXT NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE "WaterGoal" DROP COLUMN "userId",
ADD COLUMN     "userEmail" TEXT NOT NULL DEFAULT '';

-- CreateIndex
CREATE UNIQUE INDEX "CalorieGoal_userEmail_key" ON "CalorieGoal"("userEmail");

-- CreateIndex
CREATE UNIQUE INDEX "WaterGoal_userEmail_key" ON "WaterGoal"("userEmail");

-- AddForeignKey
ALTER TABLE "CalorieGoal" ADD CONSTRAINT "CalorieGoal_userEmail_fkey" FOREIGN KEY ("userEmail") REFERENCES "User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WaterGoal" ADD CONSTRAINT "WaterGoal_userEmail_fkey" FOREIGN KEY ("userEmail") REFERENCES "User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
