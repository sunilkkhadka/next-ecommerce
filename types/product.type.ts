import { z } from "zod";

import { addProductSchema } from "@/lib/validations/product";

export type Product = z.infer<typeof addProductSchema> & {
  id: string;
  rating: string;
  createdAt: Date;
};
