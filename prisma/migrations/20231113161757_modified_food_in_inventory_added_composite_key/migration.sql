/*
  Warnings:

  - The primary key for the `FoodInInventory` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `FoodInInventory` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "FoodInInventory" DROP CONSTRAINT "FoodInInventory_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "FoodInInventory_pkey" PRIMARY KEY ("foodId", "inventoryId");
