/*
  Warnings:

  - Added the required column `state` to the `Object` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Object" ADD COLUMN     "state" "State" NOT NULL;
