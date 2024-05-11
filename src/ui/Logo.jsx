import { Link } from "react-router-dom";

function Logo() {
  return (
    // <img src="/public/logo.jpg" alt="logo" className="w-[12%] rounded-full" />
    <Link
      to="/home"
      className="font-['Monoton'] text-2xl tracking-wider hover:text-[#a16207] transition-colors duration-300 md:text-3xl"
    >
      SUNSHADE
    </Link>
  );
}

export default Logo;
