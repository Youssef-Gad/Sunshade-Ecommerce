import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useWishlist } from "../../context/WishlistContext";
import { useState } from "react";
import { useCart } from "../../context/CartContext";
import Button from "../../ui/Button";

function ProductItem({ product }) {
  const [disabled] = useState(false);
  const { id, name, brand, rating, image, price, newPrice } = product;
  const { isProductInWishlist, handleWishlistClick } = useWishlist();
  const { isProductInCart, addToCartClick } = useCart();

  return (
    <div className="flex flex-col shadow-lg hover:scale-[1.04] transition-all rounded-md cursor-pointer">
      <Link to={`/products/${id}`}>
        <img
          src={image}
          alt={name}
          className="bg-[#EAEAE8] w-full h-[12rem] p-[3rem] object-cover rounded-t-md sm:p-[2rem]"
        />
      </Link>

      <div className="p-3">
        <div className="flex justify-between">
          <div className="text-xl">{name}</div>
          <div className="flex flex-col items-center gap-1">
            <div className="text-[#D97706]">${newPrice}</div>
            <div className="line-through">{price}</div>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <span className="text-lg">{rating}</span>
          <span>
            <FontAwesomeIcon icon={faStar} className="text-[#FACC15]" />
          </span>
          <span className="text-[#9CA3AF] text-sm">Rating</span>
        </div>
        <span className="text-[#4B5563]">{brand}</span>
      </div>
      <hr />

      <div className="p-3 flex justify-between items-center">
        {isProductInCart(product) ? (
          <Link
            disabled={disabled}
            to="/cart"
            className="border border-black px-6 py-1 rounded-full hover:bg-black hover:text-white transition-colors duration-300"
          >
            Go to Cart
          </Link>
        ) : (
          <Button
            style={`border border-black px-6 py-1 rounded-full hover:bg-black hover:text-white transition-colors duration-300`}
            callback={() => addToCartClick(product)}
          >
            Add to Cart
          </Button>
        )}
        <Button callback={() => handleWishlistClick(product)}>
          <FontAwesomeIcon
            icon={faBookmark}
            className={`${isProductInWishlist(product) ? "text-red-600" : ""} ${disabled ? " cursor-not-allowed" : ""} w-6 h-6 transition-colors duration-300 hover:text-red-600`}
          />
        </Button>
      </div>
    </div>
  );
}

export default ProductItem;
