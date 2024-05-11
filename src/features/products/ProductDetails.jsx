import { useProduct } from "./useProduct";
import Spinner from "../../ui/Spinner";
import { faBagShopping, faStar } from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useWishlist } from "../../context/WishlistContext";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";
import Button from "../../ui/Button";

function ProductDetails() {
  const { product, isLoading } = useProduct();
  const { isProductInWishlist, handleWishlistClick } = useWishlist();
  const { addToCartClick, isProductInCart } = useCart();

  if (isLoading)
    return (
      <div className="h-[100vh]">
        <Spinner />
      </div>
    );

  return (
    <div className="mt-3 flex flex-col gap-10 justify-center sm:flex-row">
      <div className="bg-[#EAEAE8] p-10 rounded-lg sm:w-[50%]">
        <img
          src={product[0].image}
          alt={product[0].name}
          className="bg-[#EAEAE8] w-full h-[10rem] object-cover rounded-t-md sm:h-[20rem] sm:p-[3rem]"
        />
      </div>

      <div className=" bg-white p-6 rounded-lg sm:w-[50%]">
        <p className="text-[2rem] font-bold">{product[0].name}</p>

        <p className="my-2 text-[#4B5563] text-lg">{product[0].description}</p>

        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <FontAwesomeIcon icon={faStar} className="text-[#FACC15]" key={i} />
          ))}
          <span className="text-[#9CA3AF]">({product[0].rating})</span>
          <span className="text-[#9CA3AF]">Rating</span>
        </div>

        <p className="mt-5 text-[1.5rem] font-semibold">About Product</p>

        <div className="flex gap-20">
          <div>
            <div>
              <span className="text-[#9CA3AF]">Brand: </span>
              {product[0].brand}
            </div>
            <div>
              <span className="text-[#9CA3AF]">Gender: </span>
              {product[0].gender}
            </div>
          </div>
          <div>
            <div>
              <span className="text-[#9CA3AF]">Category: </span>
              {product[0].category}
            </div>
            <div>
              <span className="text-[#9CA3AF]">Heavy: </span>
              {product[0].weight}
            </div>
          </div>
        </div>

        <p className="my-4 text-2xl flex gap-4">
          Price:
          <span className="text-[#D97706]">${product[0].newPrice}</span>
          <span className="line-through">{product[0].price}</span>
        </p>

        <div className="flex gap-5 flex-col sm:flex-row">
          {isProductInCart(product[0]) ? (
            <Link
              to="/cart"
              className="text-center border border-black px-6 py-2 rounded-full hover:bg-black hover:text-white transition-colors duration-300"
            >
              Go to Cart
            </Link>
          ) : (
            <Button
              style={`flex items-center justify-center gap-2 border border-black px-2 py-2 rounded-full hover:bg-black hover:text-white transition-colors duration-300`}
              callback={() => addToCartClick(product[0])}
            >
              <FontAwesomeIcon icon={faBagShopping} className="mb-1" />
              Add to Cart
            </Button>
          )}
          <Button
            style={`flex items-center justify-center  gap-2 bg-black text-white px-3 py-3 sm:py-0 rounded-full hover:bg-[#000000d4] hover:text-white transition-colors duration-300`}
            callback={() => handleWishlistClick(product[0])}
          >
            <FontAwesomeIcon icon={faBookmark} className="mb-1" />
            {isProductInWishlist(product[0])
              ? "Remove from Wishlist"
              : "Wishlist Item"}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
