import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

function CartBtn() {
  const { cart } = useCart();

  return (
    <Link to="/cart" className="relative">
      <FontAwesomeIcon
        icon={faBagShopping}
        className="bg-[#eab308] p-3 rounded-full w-6 h-6 transition-colors duration-300 hover:bg-[#a16207] text-white"
      />
      {cart.length > 0 && (
        <div className="flex items-center justify-center border-[2px] border-white text-white w-6 h-6 absolute bg-red-500 rounded-full bottom-10 right-0">
          {cart.length}
        </div>
      )}
    </Link>
  );
}

export default CartBtn;
