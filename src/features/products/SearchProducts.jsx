import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useProducts } from "./useProducts";

import SearchProductItem from "./SearchProductItem";

function SearchProducts() {
  const { products } = useProducts();
  const [productName, setProductName] = useState("");
  let serchedProducts = [];

  serchedProducts = products?.filter((product) =>
    product.name.toLowerCase().includes(productName.toLowerCase())
  );

  return (
    <>
      <input
        type="text"
        placeholder="Search Glasses"
        className="px-6 py-3 bg-[#E8E7E5] rounded-full focus:outline-[#a16207] w-full sm:w-[21rem]"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      {!productName ? (
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className=" bg-[#E8E7E5] hidden absolute md:left-[19rem] md:block"
        />
      ) : (
        <FontAwesomeIcon
          icon={faXmark}
          className="absolute right-10 top-[5.5rem] sm:right-0 sm:top-[1rem] sm:left-[19rem] cursor-pointer"
          onClick={() => setProductName("")}
        />
      )}

      {productName && (
        <ul className="flex flex-col gap-2 w-[21rem] max-h-[17rem] top-[8.3rem] sm:top-[3.3rem] absolute bg-[#eee] shadow-lg rounded-md overflow-auto">
          {serchedProducts?.map((product) => (
            <SearchProductItem
              product={product}
              key={product.id}
              setProductName={setProductName}
            />
          ))}
        </ul>
      )}
    </>
  );
}

export default SearchProducts;
