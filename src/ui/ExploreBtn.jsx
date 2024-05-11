import { Link } from "react-router-dom";

function ExploreBtn() {
  return (
    <Link
      to="/products"
      className="bg-[#a16107e4] text-white p-2 rounded-md hover:bg-[#a16107] transition-colors duration-300"
    >
      Explore
    </Link>
  );
}

export default ExploreBtn;
