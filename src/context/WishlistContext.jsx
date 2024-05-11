import { createContext, useContext } from "react";
import toast from "react-hot-toast";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

const WishlistContext = createContext();

function WishlistProvider({ children }) {
  // const [wishlist, setWishlist] = useState([]);
  const [wishlist, setWishlist] = useLocalStorageState([], "wishlist");

  function handleWishlistClick(product) {
    if (isProductInWishlist(product)) {
      setWishlist((list) => list.filter((i) => product.id !== i.id));
      toast.error("Removed from Wishlist");
    } else {
      setWishlist([...wishlist, product]);
      toast.success("Added to Wishlist");
    }
  }

  function isProductInWishlist(product) {
    return wishlist.some((item) => item.id === product.id);
  }

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        handleWishlistClick,
        isProductInWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

function useWishlist() {
  const context = useContext(WishlistContext);
  if (context === undefined)
    throw new Error("WishlistContext was used outside of WishlistProvider");
  return context;
}

export { WishlistProvider, useWishlist };
