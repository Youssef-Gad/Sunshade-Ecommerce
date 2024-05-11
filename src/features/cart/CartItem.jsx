import { useCart } from "../../context/CartContext";
import CartQuantity from "./CartQuantity";
import Button from "../../ui/Button";

function CartItem({ product }) {
  const { removeFromCart } = useCart();

  return (
    <div className="flex justify-between items-center bg-[#FDFDFC] shadow-sm p-7 rounded-md">
      <div className="flex flex-col sm:flex-row gap-8 items-center">
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="object-cover w-[7rem] h-[7rem] bg-[#EAEAE9] p-3 rounded-md"
          />
        </div>

        <div className="flex flex-col justify-between gap-5">
          <div className="font-semibold text-xl">{product.name}</div>
          <CartQuantity productId={product.id} />

          <Button
            style={`border border-black px-6 py-1 rounded-full hover:bg-black hover:text-white transition-colors duration-300`}
            callback={() => removeFromCart(product.id)}
          >
            Remove from Cart
          </Button>
        </div>
      </div>

      <div className="flex flex-col">
        <div>${product.newPrice}</div>
        <div className="line-through">${product.price}</div>
      </div>
    </div>
  );
}

export default CartItem;
