import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function TrendingProduct({ product }) {
  const { id, name, price, category, image } = product;

  return (
    <Link
      to={`/products/${id}`}
      className="bg-[#ECEBE8] rounded-xl p-6 w-full h-[80%] flex flex-col justify-between"
    >
      <div className="flex justify-between items-start">
        <span className="text-2xl font-semibold">{name}</span>
        <div className="flex flex-col">
          <div className="flex items-center gap-3">
            <span className="text-xl font-semibold">${price}</span>
            <FontAwesomeIcon
              icon={faPlus}
              color="white"
              className="custom-bg-gradient p-1 rounded-md"
            />
          </div>
          <span>{category}</span>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <img
          src={image}
          alt="product"
          className="w-[12rem] hover:scale-110 transition-all"
        />
      </div>
    </Link>
  );
}

export default TrendingProduct;
