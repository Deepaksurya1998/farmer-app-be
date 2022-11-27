-- CreateTable
CREATE TABLE "GroupUser" (
    "id" SERIAL NOT NULL,
    "userid" TEXT[],
    "createdBy" TEXT NOT NULL,
    "groupid" TEXT NOT NULL,

    CONSTRAINT "GroupUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserActivityLogger" (
    "id" SERIAL NOT NULL,
    "userid" TEXT NOT NULL,
    "event" TEXT NOT NULL,
    "usertaskid" TEXT NOT NULL,
    "location" TEXT NOT NULL,

    CONSTRAINT "UserActivityLogger_pkey" PRIMARY KEY ("id")
);
