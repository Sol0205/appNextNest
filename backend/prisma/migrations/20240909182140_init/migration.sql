/*
  Warnings:

  - You are about to drop the column `available` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `category` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `color` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `creationDate` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `creationUser` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `currency` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `deleted` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `deletionDate` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `dimensions` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `featured` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `nameProduct` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `quantity` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `updateDate` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[name]` on the table `Product` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAT` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Product_nameProduct_key";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "available",
DROP COLUMN "category",
DROP COLUMN "color",
DROP COLUMN "creationDate",
DROP COLUMN "creationUser",
DROP COLUMN "currency",
DROP COLUMN "deleted",
DROP COLUMN "deletionDate",
DROP COLUMN "dimensions",
DROP COLUMN "featured",
DROP COLUMN "nameProduct",
DROP COLUMN "quantity",
DROP COLUMN "updateDate",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "image" TEXT,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "updatedAT" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "description" DROP NOT NULL,
ADD CONSTRAINT "Product_pkey" PRIMARY KEY ("id");

-- DropTable
DROP TABLE "User";

-- CreateIndex
CREATE UNIQUE INDEX "Product_name_key" ON "Product"("name");
