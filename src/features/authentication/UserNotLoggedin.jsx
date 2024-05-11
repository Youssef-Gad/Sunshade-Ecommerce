import { Link } from "react-router-dom";

function UserNotLoggedin() {
  return (
    <div className="flex flex-col justify-center items-center h-[80vh]">
      <p className="text-[#999] uppercase text-xl sm:text-4xl">
        notiong to show!
      </p>
      <p className="text-[#888]  text-xs sm:text-base">
        Please login to your account.
      </p>
      <Link
        to="/login"
        className="mt-8 border border-black px-6 py-1 rounded-full hover:bg-black hover:text-white transition-colors duration-300"
      >
        Login
      </Link>
    </div>
  );
}

export default UserNotLoggedin;
