import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

function PriceDetails() {
  const { cart } = useCart();
  let totalPrice = 0;
  if (cart.length === 1) totalPrice = cart[0].newPrice * cart[0].quantity;
  else
    for (let product of cart) totalPrice += product.quantity * product.newPrice;

  return (
    <div className="bg-[#FDFDFC] h-min shadow-md p-8 rounded-md">
      <p className="text-xl font-semibold">Price Details</p>
      <div className="flex flex-col gap-4 my-8">
        {cart.map((product) => (
          <div className="flex justify-between items-center" key={product.id}>
            <div className="text-[#4B5563]">
              {product.name} ({product.quantity})
            </div>
            <div>${product.newPrice * product.quantity}</div>
          </div>
        ))}
      </div>
      <hr />
      <div className="flex justify-between my-8">
        <p>Total</p>
        <p className="text-xl font-semibold">${totalPrice}</p>
      </div>
      <Link
        to="/checkout"
        className="bg-black text-white px-6 py-3 rounded-full"
      >
        Proceed to Checkout
      </Link>
    </div>
  );
}

export default PriceDetails;
