/*
  Warnings:

  - A unique constraint covering the columns `[image]` on the table `Product` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Product_image_key" ON "Product"("image");
