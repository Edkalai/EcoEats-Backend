-- CreateTable
CREATE TABLE "_FavoriteEvents" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_FavoriteEvents_AB_unique" ON "_FavoriteEvents"("A", "B");

-- CreateIndex
CREATE INDEX "_FavoriteEvents_B_index" ON "_FavoriteEvents"("B");

-- AddForeignKey
ALTER TABLE "_FavoriteEvents" ADD CONSTRAINT "_FavoriteEvents_A_fkey" FOREIGN KEY ("A") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FavoriteEvents" ADD CONSTRAINT "_FavoriteEvents_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
