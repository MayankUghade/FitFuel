/*
  Warnings:

  - You are about to drop the column `updatedAt` on the `CalorieGoal` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `WaterGoal` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "CalorieGoal" DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "WaterGoal" DROP COLUMN "updatedAt";
