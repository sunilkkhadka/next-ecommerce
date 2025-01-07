"use server";

import { PrismaClient } from "@prisma/client";

import { prisma } from "@/prisma/prisma";
import { convertToPlainObject } from "../utils";

// Get latest products
export async function getLatestProducts() {
  const data = await prisma.product.findMany({
    take: 4,
    orderBy: {
      createdAt: "desc",
    },
  });

  return convertToPlainObject(data);
}
