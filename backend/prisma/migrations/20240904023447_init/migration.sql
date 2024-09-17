-- CreateTable
CREATE TABLE "Product" (
    "nameProduct" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "dimensions" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "currency" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "available" BOOLEAN NOT NULL,
    "featured" BOOLEAN NOT NULL,
    "creationDate" TEXT NOT NULL,
    "updateDate" TEXT NOT NULL,
    "creationUser" TEXT NOT NULL,
    "deleted" BOOLEAN NOT NULL,
    "deletionDate" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Product_nameProduct_key" ON "Product"("nameProduct");
