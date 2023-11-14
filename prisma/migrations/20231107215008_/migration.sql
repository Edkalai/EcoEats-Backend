/*
  Warnings:

  - You are about to drop the column `img` on the `Recipes` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Recipes` table. All the data in the column will be lost.
  - You are about to drop the `_FoodToRecipes` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `image` to the `Recipes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantity` to the `Recipes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Recipes` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_FoodToRecipes" DROP CONSTRAINT "_FoodToRecipes_A_fkey";

-- DropForeignKey
ALTER TABLE "_FoodToRecipes" DROP CONSTRAINT "_FoodToRecipes_B_fkey";

-- AlterTable
ALTER TABLE "Recipes" DROP COLUMN "img",
DROP COLUMN "name",
ADD COLUMN     "image" TEXT NOT NULL,
ADD COLUMN     "ingredient" TEXT,
ADD COLUMN     "quantity" INTEGER NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL;

-- DropTable
DROP TABLE "_FoodToRecipes";
