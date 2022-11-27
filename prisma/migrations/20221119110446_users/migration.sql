-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT,
    "email" TEXT,
    "phone_number" TEXT,
    "country_code" TEXT,
    "status" TEXT,
    "is_archived" BOOLEAN NOT NULL,
    "last_active_at" TIMESTAMP(3) NOT NULL,
    "role" TEXT NOT NULL,
    "password" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
