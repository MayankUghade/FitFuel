-- CreateTable
CREATE TABLE "Breakfast" (
    "id" TEXT NOT NULL,
    "userEmail" TEXT NOT NULL DEFAULT '',
    "FoodItems" TEXT NOT NULL,
    "CalorieIntake" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Breakfast_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Breakfast_userEmail_key" ON "Breakfast"("userEmail");

-- AddForeignKey
ALTER TABLE "Breakfast" ADD CONSTRAINT "Breakfast_userEmail_fkey" FOREIGN KEY ("userEmail") REFERENCES "User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
