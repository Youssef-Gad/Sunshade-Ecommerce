import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import CartItem from "../features/cart/CartItem";
import PriceDetails from "../features/cart/PriceDetails";
import { useUser } from "../features/authentication/useUser";
import UserNotLoggedin from "../features/authentication/UserNotLoggedin";

function Cart() {
  const { cart } = useCart();
  const { user } = useUser();

  if (user === null) return <UserNotLoggedin />;

  if (cart.length === 0)
    return (
      <div className="flex flex-col justify-center items-center h-[80vh]">
        <img
          src="/assets/empty-shopping-bag.png"
          alt="empty-wishlist"
          className="objec-cover w-[12rem]"
        />
        <p className="text-[#999] uppercase text-xl sm:text-4xl">
          notiong to show!
        </p>
        <p className="text-[#888]  text-xs sm:text-base">
          There is noting in your cart .Let's add some items
        </p>
        <Link
          to="/products"
          className="mt-8 border border-black px-6 py-1 rounded-full hover:bg-black hover:text-white transition-colors duration-300"
        >
          Explore
        </Link>
      </div>
    );

  return (
    <div className="min-h-[80vh]">
      <p className="text-[1.7rem] font-semibold my-5">Cart ({cart.length})</p>
      <div className="grid grid-cols-1 sm:grid-cols-[2fr_1fr] gap-20">
        <div className="flex flex-col gap-5">
          {cart.map((product) => (
            <CartItem product={product} key={product.id} />
          ))}
        </div>
        <PriceDetails />
      </div>
    </div>
  );
}

export default Cart;
