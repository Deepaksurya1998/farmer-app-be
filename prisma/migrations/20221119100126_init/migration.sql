-- CreateTable
CREATE TABLE "Links" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "href" TEXT,

    CONSTRAINT "Links_pkey" PRIMARY KEY ("id")
);
