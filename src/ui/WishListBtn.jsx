import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useWishlist } from "../context/WishlistContext";

function WishListBtn() {
  const { wishlist } = useWishlist();

  return (
    <Link to="/wishlist" className="relative">
      <FontAwesomeIcon
        icon={faBookmark}
        className="bg-[#E8E7E5] p-3 rounded-full w-6 h-6 transition-colors duration-300 hover:bg-[#a16207] hover:text-white"
      />
      {wishlist.length > 0 && (
        <div className="flex items-center justify-center border-[2px] border-white text-white w-6 h-6 absolute bg-red-500 rounded-full bottom-10 right-0">
          {wishlist.length}
        </div>
      )}
    </Link>
  );
}

export default WishListBtn;
