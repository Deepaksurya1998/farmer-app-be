-- CreateTable
CREATE TABLE "TaskTemplate" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "groupId" TEXT[],
    "startsAt" TIMESTAMP(3) NOT NULL,
    "endsAt" TIMESTAMP(3) NOT NULL,
    "repeatDialy" BOOLEAN NOT NULL,
    "functionalGroup" TEXT NOT NULL,

    CONSTRAINT "TaskTemplate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserTask" (
    "id" SERIAL NOT NULL,
    "userid" TEXT NOT NULL,
    "tasktTemplateId" TEXT NOT NULL,
    "completedAt" TIMESTAMP(3) NOT NULL,
    "comment" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "UserTask_pkey" PRIMARY KEY ("id")
);
