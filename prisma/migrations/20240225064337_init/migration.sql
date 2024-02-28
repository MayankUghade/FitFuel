-- DropIndex
DROP INDEX "Breakfast_userEmail_key";

-- DropIndex
DROP INDEX "Dinner_userEmail_key";

-- DropIndex
DROP INDEX "Lunch_userEmail_key";

-- DropIndex
DROP INDEX "Snacks_userEmail_key";

-- AlterTable
ALTER TABLE "Breakfast" ALTER COLUMN "userEmail" DROP DEFAULT;

-- AlterTable
ALTER TABLE "Dinner" ALTER COLUMN "userEmail" DROP DEFAULT;

-- AlterTable
ALTER TABLE "Lunch" ALTER COLUMN "userEmail" DROP DEFAULT;

-- AlterTable
ALTER TABLE "Snacks" ALTER COLUMN "userEmail" DROP DEFAULT;
