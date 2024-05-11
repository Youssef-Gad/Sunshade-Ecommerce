import { Link } from "react-router-dom";

function SearchProductItem({ product, setProductName }) {
  const { id, name, image, price, newPrice } = product;

  return (
    <Link to={`/products/${id}`} onClick={() => setProductName("")}>
      <li className="flex items-center justify-between p-4 bg-[#FBFAF7] shadow-sm hover:bg-[#F2EEDF] cursor-pointer">
        <img
          src={image}
          alt={name}
          className="object-cover w-[4rem] h-[4rem] bg-[#EAEAE8] rounded-md p-1"
        />
        <p className="font-semibold text-xl text-center">{name}</p>
        <div className="flex flex-col items-center">
          <span>${newPrice}</span>
          <span className="line-through"> {price}</span>
        </div>
      </li>
    </Link>
  );
}

export default SearchProductItem;
