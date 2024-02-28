-- CreateTable
CREATE TABLE "Lunch" (
    "id" TEXT NOT NULL,
    "userEmail" TEXT NOT NULL DEFAULT '',
    "FoodItems" TEXT NOT NULL,
    "CalorieIntake" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Lunch_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Dinner" (
    "id" TEXT NOT NULL,
    "userEmail" TEXT NOT NULL DEFAULT '',
    "FoodItems" TEXT NOT NULL,
    "CalorieIntake" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Dinner_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Snacks" (
    "id" TEXT NOT NULL,
    "userEmail" TEXT NOT NULL DEFAULT '',
    "FoodItems" TEXT NOT NULL,
    "CalorieIntake" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Snacks_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Lunch_userEmail_key" ON "Lunch"("userEmail");

-- CreateIndex
CREATE UNIQUE INDEX "Dinner_userEmail_key" ON "Dinner"("userEmail");

-- CreateIndex
CREATE UNIQUE INDEX "Snacks_userEmail_key" ON "Snacks"("userEmail");

-- AddForeignKey
ALTER TABLE "Lunch" ADD CONSTRAINT "Lunch_userEmail_fkey" FOREIGN KEY ("userEmail") REFERENCES "User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Dinner" ADD CONSTRAINT "Dinner_userEmail_fkey" FOREIGN KEY ("userEmail") REFERENCES "User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Snacks" ADD CONSTRAINT "Snacks_userEmail_fkey" FOREIGN KEY ("userEmail") REFERENCES "User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
