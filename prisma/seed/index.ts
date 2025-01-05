import { PrismaClient } from "@prisma/client";

import sampleData from "./sample-data";

const prisma = new PrismaClient();

async function main() {
  await prisma.product.deleteMany();

  await prisma.product.createMany({ data: sampleData.products });

  console.log("Data Seeded Successfully!!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    prisma.$disconnect();
  });
