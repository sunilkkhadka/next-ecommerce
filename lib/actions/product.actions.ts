"use server";

import { PrismaClient } from "@prisma/client";

import { convertToPlainObject } from "../utils";
import { Product } from "@/types/product.type";

// Get latest products
export async function getLatestProducts() {
  const prisma = new PrismaClient();

  const data = await prisma.product.findMany({
    take: 4,
    orderBy: {
      createdAt: "desc",
    },
  });

  return convertToPlainObject(data);
}
