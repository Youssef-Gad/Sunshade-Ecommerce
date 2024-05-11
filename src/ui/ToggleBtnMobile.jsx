import {
  faBagShopping,
  faBars,
  faBookmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";

function ToggleBtnMobile() {
  const [toggleBtn, setToggleBtn] = useState(false);

  return (
    <>
      <FontAwesomeIcon
        icon={faBars}
        className="text-2xl relative cursor-pointer"
        onClick={() => setToggleBtn((t) => !t)}
      />
      {toggleBtn && (
        <div className="w-[8rem] h-[7rem] absolute bg-amber-50 right-8 z-10 flex flex-col justify-around">
          <Link
            to="/wishlist"
            className="flex gap-3 hover:bg-amber-100 p-3"
            onClick={() => setToggleBtn(false)}
          >
            <FontAwesomeIcon icon={faBookmark} />
            <p>Wishlist</p>
          </Link>

          <Link
            to="/cart"
            className="flex gap-3 hover:bg-amber-100 p-3"
            onClick={() => setToggleBtn(false)}
          >
            <FontAwesomeIcon icon={faBagShopping} />
            <p>Cart</p>
          </Link>
        </div>
      )}
    </>
  );
}

export default ToggleBtnMobile;
