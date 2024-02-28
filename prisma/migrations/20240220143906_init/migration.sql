-- CreateTable
CREATE TABLE "CalorieGoal" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "Calorie" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CalorieGoal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WaterGoal" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "water" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WaterGoal_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CalorieGoal_userId_key" ON "CalorieGoal"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "WaterGoal_userId_key" ON "WaterGoal"("userId");

-- AddForeignKey
ALTER TABLE "CalorieGoal" ADD CONSTRAINT "CalorieGoal_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WaterGoal" ADD CONSTRAINT "WaterGoal_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
