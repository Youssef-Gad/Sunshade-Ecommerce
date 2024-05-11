import Spinner from "./Spinner";
import { useTrendingProducts } from "../features/products/useTrendingProducts";
import TrendingProduct from "../features/products/TrendingProduct";

function Trending() {
  const { trendingProducts, isLoading } = useTrendingProducts();

  if (isLoading) return <Spinner />;

  return (
    <>
      <p className="text-[3rem] font-semibold leading-none">
        Trending <br /> Products
      </p>
      {trendingProducts.map((product) => (
        <TrendingProduct product={product} key={product.id} />
      ))}
    </>
  );
}

export default Trending;
