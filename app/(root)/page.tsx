import { Metadata } from "next";

import { getLatestProducts } from "@/lib/actions/product.actions";
import ProductList from "@/components/shared/Products/ProductList";

export const metadata: Metadata = {
  title: "Home",
};

export default async function HomePage() {
  const latestProducts = await getLatestProducts();

  return (
    <div>
      <ProductList data={latestProducts} title="Latest Products" />
    </div>
  );
}
