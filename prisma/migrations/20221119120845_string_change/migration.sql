-- AlterTable
ALTER TABLE "User" ALTER COLUMN "last_active_at" DROP NOT NULL,
ALTER COLUMN "last_active_at" SET DATA TYPE TEXT;
