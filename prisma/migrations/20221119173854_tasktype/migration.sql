/*
  Warnings:

  - Added the required column `taskType` to the `UserTask` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "UserTask" ADD COLUMN     "taskType" TEXT NOT NULL;
