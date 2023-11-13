/*
  Warnings:

  - You are about to drop the column `barcode` on the `Recipes` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Food" ADD COLUMN     "barcode" TEXT;

-- AlterTable
ALTER TABLE "Recipes" DROP COLUMN "barcode";
