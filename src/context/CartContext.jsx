import { createContext, useContext } from "react";
import toast from "react-hot-toast";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

const CartContext = createContext();

function CartProvider({ children }) {
  // const [cart, setCart] = useState([]);
  const [cart, setCart] = useLocalStorageState([], "cart");

  function isProductInCart(product) {
    return cart.some((item) => item.id === product.id);
  }

  function addToCartClick(product) {
    if (!isProductInCart(product)) {
      setCart([...cart, product]);
      toast.success("Added to Cart");
    }
  }

  function removeFromCart(id) {
    setCart((list) => list.filter((i) => id !== i.id));
    toast.error("Removed from Cart");
  }

  function handleCartQuantity(id, quantity) {
    setCart((cart) =>
      cart.map((product) =>
        product.id === id ? { ...product, quantity: quantity } : product
      )
    );
  }

  return (
    <CartContext.Provider
      value={{
        addToCartClick,
        isProductInCart,
        removeFromCart,
        handleCartQuantity,
        setCart,
        cart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);
  if (context === undefined)
    throw new Error("CartContext was used outside of CartProvider");
  return context;
}

export { CartProvider, useCart };
