import UserAvatar from "../features/authentication/UserAvatar";
import Logo from "./Logo";
import SearchProducts from "../features/products/SearchProducts";
import ExploreBtn from "./ExploreBtn";
import CartBtn from "../features/cart/CartBtn";
import WishListBtn from "./WishListBtn";
import ToggleBtnMobile from "./ToggleBtnMobile";

function Navbar() {
  return (
    <>
      <nav className="flex py-4 justify-between items-center">
        <section className="flex items-center gap-6">
          <UserAvatar />
          <Logo />
        </section>

        <section className="hidden md:flex items-center md:relative">
          <SearchProducts />
        </section>

        <section className="flex items-center gap-4">
          <ExploreBtn />
          <div className="hidden md:flex md:gap-4">
            <WishListBtn />
            <CartBtn />
          </div>

          <div className="block sm:hidden">
            <ToggleBtnMobile />
          </div>
        </section>
      </nav>

      <div className="block sm:hidden">
        <SearchProducts />
      </div>
    </>
  );
}

export default Navbar;
