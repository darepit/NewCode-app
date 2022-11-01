import { prisma } from "./prisma.server";
import { KudoStyle, Prisma } from "@prisma/client";

export const createKudo = async (title:string,
  message: string,
  userId: string,
  recipientId: string,
  style: KudoStyle
) => {
  await prisma.kudo.create({
    data: {
      title,
      message,
      author: {
        connect: {
          id: userId,
        },
      },
      recipient: {
        connect: {
          id: recipientId,
        },
      },
      style,
    },
  });
};

export const getFilteredKudos = async (
  userId: string,
  sortFilter: Prisma.KudoOrderByWithRelationInput,
  whereFilter: Prisma.KudoWhereInput
) => {
  return await prisma.kudo.findMany({
    select: {
      id: true,
      style: true,
      message: true,
      title:true,
      author: {
        select: {
          profile: true,
        },
      },
    },
    orderBy: {
      ...sortFilter,
    },
    where: {
      recipientId: userId,
      ...whereFilter,
    },
  });
};

export const getRecentKudos = async () => {
  return await prisma.kudo.findMany({
    take: 3,
    orderBy: {
      createdAt: "desc",
    },
    select: {
      style: {
        select: {
          lang: true,
        },
      },
      recipient: {
        select: {
          id: true,
          profile: true,
        },
      },
    },
  });
};


export const deleteKudo = async (id: string) => {
  await prisma.user.delete({ where: { id } });
};


export const getKudoById = async (userId: string) => {
  return await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });
};