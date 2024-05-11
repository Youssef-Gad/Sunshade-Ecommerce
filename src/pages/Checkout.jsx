import toast from "react-hot-toast";
import { useCart } from "../context/CartContext";
import { useUser } from "../features/authentication/useUser";
import Button from "../ui/Button";
import CheckoutItem from "../ui/CheckoutItem";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const { user } = useUser();
  const { cart, setCart } = useCart();
  const navigate = useNavigate();

  let totalProducts = 0,
    subTotal = 0,
    total = 0;

  for (let product of cart) {
    totalProducts += product.quantity;
    subTotal += product.price;
    total += product.newPrice;
  }

  let discount = subTotal - total;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 mt-10 gap-10">
      <div className="bg-white p-7 h-min">
        <p className="text-3xl font-semibold">Address</p>
        {user?.user_metadata?.addressName ? (
          <div className="bg-[#F3F4F6] p-3">
            <p>
              <span className="text-[#888]">Address: </span>
              {user?.user_metadata?.addressName || "No Data"}
            </p>
            <p>
              <span className="text-[#888]">Flat, House no., Building: </span>
              {user?.user_metadata?.house || "No Data"}
            </p>
            <p>
              <span className="text-[#888]">Town/City: </span>
              {user?.user_metadata?.city || "No Data"}
            </p>
            <p>
              <span className="text-[#888]">Mobile Phone: </span>
              {user?.user_metadata?.mobileNumber || "No Data"}
            </p>
          </div>
        ) : (
          <p className="text-[#999999]">
            Please add a new address in your account.
          </p>
        )}
      </div>

      <div className="bg-white p-7">
        <p className="text-3xl font-semibold">Order Summary</p>
        <div className="flex flex-col gap-5 mt-7">
          {cart.map((product) => (
            <CheckoutItem product={product} key={product.id} />
          ))}
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex justify-between items-center mt-5">
            <p className="text-[#777] font-semibold">Total Products</p>
            <p className="font-semibold">{totalProducts}</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-[#777] font-semibold">Subtotal</p>
            <p className="font-semibold">${subTotal}</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-[#777] font-semibold">Discount</p>
            <p className="font-semibold">-${discount}</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-[#777] font-semibold">Delivery Charges</p>
            <p className="font-semibold">Free</p>
          </div>
          <hr />
          <div className="flex justify-between items-center">
            <p className="text-[#777] font-semibold">Total</p>
            <p className="text-xl">${total}</p>
          </div>
        </div>

        <Button
          callback={() => {
            if (user?.user_metadata?.addressName) {
              toast.success("Successfully Placed Order");
              navigate("/home");
              setCart([]);
            } else toast.error("Please Add Your Address");
          }}
          style={`bg-black text-white px-6 py-2 rounded-full mt-5`}
        >
          Place Order
        </Button>
      </div>
    </div>
  );
}

export default Checkout;
