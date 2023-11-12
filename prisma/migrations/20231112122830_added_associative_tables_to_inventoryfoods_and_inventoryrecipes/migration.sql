/*
  Warnings:

  - You are about to drop the column `quantity` on the `Food` table. All the data in the column will be lost.
  - You are about to drop the column `unit` on the `Food` table. All the data in the column will be lost.
  - You are about to drop the `_FoodToInventory` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_FoodToRecipes` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_FoodToInventory" DROP CONSTRAINT "_FoodToInventory_A_fkey";

-- DropForeignKey
ALTER TABLE "_FoodToInventory" DROP CONSTRAINT "_FoodToInventory_B_fkey";

-- DropForeignKey
ALTER TABLE "_FoodToRecipes" DROP CONSTRAINT "_FoodToRecipes_A_fkey";

-- DropForeignKey
ALTER TABLE "_FoodToRecipes" DROP CONSTRAINT "_FoodToRecipes_B_fkey";

-- AlterTable
ALTER TABLE "Food" DROP COLUMN "quantity",
DROP COLUMN "unit";

-- DropTable
DROP TABLE "_FoodToInventory";

-- DropTable
DROP TABLE "_FoodToRecipes";

-- CreateTable
CREATE TABLE "FoodInInventory" (
    "id" SERIAL NOT NULL,
    "foodId" INTEGER NOT NULL,
    "inventoryId" INTEGER NOT NULL,
    "quantity" DOUBLE PRECISION NOT NULL,
    "unit" TEXT NOT NULL,

    CONSTRAINT "FoodInInventory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FoodInRecipe" (
    "id" SERIAL NOT NULL,
    "foodId" INTEGER NOT NULL,
    "recipeId" INTEGER NOT NULL,
    "quantity" DOUBLE PRECISION NOT NULL,
    "unit" TEXT NOT NULL,

    CONSTRAINT "FoodInRecipe_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "FoodInInventory" ADD CONSTRAINT "FoodInInventory_foodId_fkey" FOREIGN KEY ("foodId") REFERENCES "Food"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FoodInInventory" ADD CONSTRAINT "FoodInInventory_inventoryId_fkey" FOREIGN KEY ("inventoryId") REFERENCES "Inventory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FoodInRecipe" ADD CONSTRAINT "FoodInRecipe_foodId_fkey" FOREIGN KEY ("foodId") REFERENCES "Food"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FoodInRecipe" ADD CONSTRAINT "FoodInRecipe_recipeId_fkey" FOREIGN KEY ("recipeId") REFERENCES "Recipes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
