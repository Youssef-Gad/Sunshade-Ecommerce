import { useWishlist } from "../context/WishlistContext";
import UserNotLoggedin from "../features/authentication/UserNotLoggedin";
import { useUser } from "../features/authentication/useUser";
import ProductItem from "../features/products/ProductItem";

function WishList() {
  const { wishlist } = useWishlist();
  const { user } = useUser();

  if (user === null) return <UserNotLoggedin />;

  if (wishlist.length === 0)
    return (
      <div className="flex flex-col justify-center items-center h-[80vh]">
        <img
          src="/assets/empty-wish.gif"
          alt="empty-wishlist"
          className="objec-cover w-[18rem]"
        />
        <p className="text-[#999] uppercase text-xl sm:text-4xl">
          notiong to show!
        </p>
        <p className="text-[#888] text-xs sm:text-base">
          Unlock Your Shopping Desires: Fill Your Empty Wishlist
        </p>
      </div>
    );

  return (
    <>
      <p className="text-[2rem] font-semibold mt-8 mb-10">Wishlist</p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
        {wishlist.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </div>
    </>
  );
}

export default WishList;
