import { notFound } from "next/navigation";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { getProductBySlug } from "@/lib/actions/product.actions";

const ProductDetailsPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  const product = await getProductBySlug(slug);

  if (!product) notFound();

  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-5">
        <div className="col-span-2">{/* images column */}</div>
        <div className="col-span-2 p-5">
          <div className="flex flex-col gap-6">
            <p>
              {product.brand} {product.category}
            </p>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p>{product.rating}</p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              Rs. {product.price}
            </div>
          </div>
          <div className="mt-10">
            <p className="font-semibold">Description:</p>
            <p>{product.description}</p>
          </div>
        </div>
        <div className="m-4">
          <Card>
            <CardContent className="p-4">
              <div className="mb-2 flex justify-between">
                <div>Price</div>
                <div>{product.price}</div>
              </div>
              <div className="mb-2 flex justify-between">
                <div>Stock</div>
                {product.stock > 0 ? (
                  <Badge variant={"outline"}>In Stock</Badge>
                ) : (
                  <Badge variant={"destructive"}>Out of Stock</Badge>
                )}
              </div>
              {product.stock > 0 && (
                <div className="flex justify-center items-center">
                  <Button className="w-full">Add To Cart</Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsPage;
