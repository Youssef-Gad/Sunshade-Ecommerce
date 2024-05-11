import { Link } from "react-router-dom";
import Button from "../ui/Button";
import { useState } from "react";
import { useLogin } from "../features/authentication/useLogin";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen mx-3 sm:mx-0">
      <div className="hidden sm:block">
        <img
          src="/assets/bannerHero.jpg"
          alt="hero"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="bg-[#FBFAF7] flex justify-center items-center w-full">
        <div className="bg-white p-10 rounded-lg shadow-md my-10">
          <div className="text-center mb-5">
            <Button
              withDelay={false}
              style={`font-['Monoton'] text-2xl tracking-wider hover:text-[#a16207] transition-colors duration-300 md:text-3xl`}
            >
              SUNSHADE
            </Button>
          </div>

          <p className="text-4xl font-semibold text-center mb-5">
            Login To Your Account
          </p>

          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <div>
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter Your Email"
                className="border border-[#E5E7EB] w-full rounded-md px-2 h-8"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Password</label>
              <input
                type="Password"
                placeholder="Enter Your Password"
                className="border border-[#E5E7EB] w-full rounded-md px-2 h-8"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col items-center gap-5">
              <button className="bg-black text-white px-20 py-2 rounded-full font-semibold hover:bg-[#000000b6] transition-colors duration-300">
                {isLoading ? "Logging in..." : "Login"}
              </button>
              <button
                onClick={() =>
                  login({ email: "test@test.com", password: "12345678" })
                }
                className="border border-black px-10 py-2 rounded-full font-semibold hover:bg-black hover:text-white transition-colors duration-300"
              >
                Login as a Guest
              </button>
              <Link to="/signup" className="underline">
                Create New Account
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
