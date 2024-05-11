import { useEffect, useState } from "react";
import { useCart } from "../../context/CartContext";
import Button from "../../ui/Button";

function CartQuantity({ productId }) {
  const [quantity, setQuantity] = useState(1);
  const { removeFromCart, handleCartQuantity, cart } = useCart();
  const currentQuantity = cart.filter((product) => product.id === productId)[0]
    .quantity;

  useEffect(
    function () {
      if (quantity === 0) removeFromCart(productId);
    },
    [quantity, productId, removeFromCart]
  );

  return (
    <div className="flex gap-3 items-center">
      <p>Quantity:</p>
      <Button
        style={`px-3 bg-black text-white rounded-lg`}
        callback={() => {
          setQuantity((q) => q - 1);
          handleCartQuantity(productId, quantity - 1);
        }}
      >
        -
      </Button>
      <p className="bg-[#EAEAE9] w-9 flex justify-center">{currentQuantity}</p>
      <Button
        style={`px-3 bg-black text-white rounded-lg`}
        callback={() => {
          setQuantity((q) => q + 1);
          handleCartQuantity(productId, quantity + 1);
        }}
      >
        +
      </Button>
    </div>
  );
}

export default CartQuantity;
