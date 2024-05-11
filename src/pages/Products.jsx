import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SortProducts from "../features/products/SortProducts";
import { faSliders } from "@fortawesome/free-solid-svg-icons";
import { useProducts } from "../features/products/useProducts";
import Spinner from "../ui/Spinner";
import ProductItem from "../features/products/ProductItem";
import { useState } from "react";
import SideNav from "../ui/SideNav";
import { useFilters } from "../context/FiltersContext";

function Products() {
  const [showSideNav, setShowSideNav] = useState(false);
  const { sortBy, filterCategory, filterRating } = useFilters();
  const { products, isLoading } = useProducts();
  let filterdProducts = [];

  // SortBy
  if (sortBy === "Sort By Price") filterdProducts = products;
  if (sortBy === "low_to_high")
    filterdProducts = products?.sort((a, b) => a.newPrice - b.newPrice);
  if (sortBy === "high_to_low")
    filterdProducts = products?.sort((a, b) => b.newPrice - a.newPrice);

  // Filter with Category
  filterdProducts = products?.filter((product) =>
    filterCategory.length > 0
      ? filterCategory.some((category) => product.category === category)
      : filterdProducts
  );

  // Filter with Rating
  filterdProducts = filterdProducts?.filter((product) =>
    filterRating.length
      ? product.rating >= Number(filterRating)
      : filterdProducts
  );

  return (
    <>
      <section className="mt-5 mb-11">
        <img
          src="/assets/bannerHero.jpg"
          alt="hero banner"
          className="rounded-md object-cover min-h-[10rem]"
        />
      </section>

      <section className="flex flex-col justify-between mb-11 sm:flex-row">
        <h2 className="text-3xl">Glasses for You!</h2>
        <div className="flex items-center gap-7">
          <SortProducts />

          <button
            className="flex items-center gap-1 bg-white hover:bg-black hover:text-white p-2 rounded-lg font-semibold transition-colors duration-300 shadow-md"
            onClick={() => setShowSideNav((s) => !s)}
          >
            Filters
            <FontAwesomeIcon icon={faSliders} />
          </button>
        </div>
      </section>

      {isLoading ? (
        <Spinner />
      ) : (
        <section className="grid grid-cols-1 gap-10 sm:grid-cols-3 md:grid-cols-4">
          {filterdProducts.map((product) => (
            <ProductItem product={product} key={product.id} />
          ))}
        </section>
      )}

      <SideNav setShowSideNav={setShowSideNav} showSideNav={showSideNav} />
    </>
  );
}

export default Products;
