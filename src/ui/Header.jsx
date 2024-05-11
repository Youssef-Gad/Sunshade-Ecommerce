import { faArrowTurnDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div>
        <h1 className="text-[5rem] font-semibold leading-none mb-5 sm:text-[7rem]">
          Glasses &Lens
        </h1>
        <p className="text-[#4b5563] font-medium text-[16px] sm:text-[18px] mb-8">
          Buy the best high-quality sunglasses from us.
          <br /> More than 100 types of assortment.
        </p>

        <div className="flex items-center gap-7">
          <Link
            to="/products"
            className="bg-black text-white px-6 py-4 rounded-md hover:bg-[#1e2328] transition-colors duration-300"
          >
            Start Shopping
          </Link>

          <a
            href="#category"
            className="flex items-center gap-2 font-semibold text-[18px]"
          >
            Explore More <FontAwesomeIcon icon={faArrowTurnDown} />
          </a>
        </div>
      </div>

      <div className="hidden justify-end sm:flex">
        <img
          src="/assets/bannerImg.png"
          alt="banner_image"
          className="w-[75%]"
        />
      </div>
    </>
  );
}

export default Header;
