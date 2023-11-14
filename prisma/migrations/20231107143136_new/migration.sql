-- CreateTable
CREATE TABLE "Recipes" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "img" TEXT,

    CONSTRAINT "Recipes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_FoodToRecipes" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_FoodToRecipes_AB_unique" ON "_FoodToRecipes"("A", "B");

-- CreateIndex
CREATE INDEX "_FoodToRecipes_B_index" ON "_FoodToRecipes"("B");

-- AddForeignKey
ALTER TABLE "_FoodToRecipes" ADD CONSTRAINT "_FoodToRecipes_A_fkey" FOREIGN KEY ("A") REFERENCES "Food"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FoodToRecipes" ADD CONSTRAINT "_FoodToRecipes_B_fkey" FOREIGN KEY ("B") REFERENCES "Recipes"("id") ON DELETE CASCADE ON UPDATE CASCADE;
