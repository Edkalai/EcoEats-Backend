-- CreateTable
CREATE TABLE "UserFavoriteRecipes" (
    "userId" INTEGER NOT NULL,
    "recipeId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserFavoriteRecipes_pkey" PRIMARY KEY ("userId","recipeId")
);

-- CreateTable
CREATE TABLE "_UserToFavorites" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_UserToFavorites_AB_unique" ON "_UserToFavorites"("A", "B");

-- CreateIndex
CREATE INDEX "_UserToFavorites_B_index" ON "_UserToFavorites"("B");

-- AddForeignKey
ALTER TABLE "_UserToFavorites" ADD CONSTRAINT "_UserToFavorites_A_fkey" FOREIGN KEY ("A") REFERENCES "Recipes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserToFavorites" ADD CONSTRAINT "_UserToFavorites_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
