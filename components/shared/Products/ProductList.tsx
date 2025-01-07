import ProductCard from "./ProductCard";
import { Product } from "@/types/product.type";

type ProductListProps = {
  data: Product[];
  title?: string;
};

const ProductList: React.FC<ProductListProps> = (props) => {
  const { data, title } = props;

  return (
    <section className="my-10">
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      {data.length > 0 ? (
        <div className="grid gap-7 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {data.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div>
          <p>No Products Found</p>
        </div>
      )}
    </section>
  );
};

export default ProductList;
