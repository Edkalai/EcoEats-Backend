-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "img" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Inventory" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Inventory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Food" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "category" TEXT,
    "barcode" TEXT,
    "img" TEXT,

    CONSTRAINT "Food_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FoodInInventory" (
    "foodId" INTEGER NOT NULL,
    "inventoryId" INTEGER NOT NULL,
    "quantity" DOUBLE PRECISION NOT NULL,
    "unit" TEXT NOT NULL,

    CONSTRAINT "FoodInInventory_pkey" PRIMARY KEY ("foodId","inventoryId")
);

-- CreateTable
CREATE TABLE "Recipes" (
    "id" SERIAL NOT NULL,
    "image" TEXT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "ingredient" TEXT,
    "quantity" INTEGER NOT NULL,
    "comment" TEXT,

    CONSTRAINT "Recipes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Event" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "img" TEXT,
    "date" TEXT,
    "place" TEXT,
    "ownerId" INTEGER NOT NULL,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Donation" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "imagePath" TEXT NOT NULL,
    "adress" TEXT NOT NULL,

    CONSTRAINT "Donation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Location" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "imagePath" TEXT NOT NULL,

    CONSTRAINT "Location_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_UserToFavorites" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_EventsParticipation" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Inventory_userId_key" ON "Inventory"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "_UserToFavorites_AB_unique" ON "_UserToFavorites"("A", "B");

-- CreateIndex
CREATE INDEX "_UserToFavorites_B_index" ON "_UserToFavorites"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_EventsParticipation_AB_unique" ON "_EventsParticipation"("A", "B");

-- CreateIndex
CREATE INDEX "_EventsParticipation_B_index" ON "_EventsParticipation"("B");

-- AddForeignKey
ALTER TABLE "Inventory" ADD CONSTRAINT "Inventory_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FoodInInventory" ADD CONSTRAINT "FoodInInventory_foodId_fkey" FOREIGN KEY ("foodId") REFERENCES "Food"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FoodInInventory" ADD CONSTRAINT "FoodInInventory_inventoryId_fkey" FOREIGN KEY ("inventoryId") REFERENCES "Inventory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserToFavorites" ADD CONSTRAINT "_UserToFavorites_A_fkey" FOREIGN KEY ("A") REFERENCES "Recipes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserToFavorites" ADD CONSTRAINT "_UserToFavorites_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventsParticipation" ADD CONSTRAINT "_EventsParticipation_A_fkey" FOREIGN KEY ("A") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventsParticipation" ADD CONSTRAINT "_EventsParticipation_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
