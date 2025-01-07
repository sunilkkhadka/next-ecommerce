import Link from "next/link";
import Image from "next/image";

import { splitCurrency } from "@/lib/utils";
import { Product } from "@/types/product.type";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

function ProductCard({ product }: { product: Product }) {
  const price = splitCurrency(product.price);

  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="p-0 items-center">
        <Link href={`/product/${product.slug}`}>
          <Image
            src={product.images[0]}
            alt={product.name}
            height={300}
            width={300}
            priority={true}
          />
        </Link>
      </CardHeader>
      <CardContent className="p-4 grid gap-4">
        <div className="text-xs">{product.brand}</div>
        <Link href={`/product/${product.slug}`}>
          <h2 className="text-xl font-bold">{product.name}</h2>
        </Link>
        <div className="flex justify-between items-center gap-4">
          <p>{product.rating} Stars</p>
          {product.stock > 0 ? (
            <p className="font-bold">
              Rs.
              <span className="text-2xl">{price.wholePrice}</span>.
              <span>{price.fractionalPrice}</span>
            </p>
          ) : (
            <p className="text-destructive">Out of Stock</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
