import { useState } from "react";
import Button from "../ui/Button";
import { useSignup } from "../features/authentication/useSignup";

function Signup() {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { signup, isLoading } = useSignup();

  function handleSubmit(e) {
    e.preventDefault();
    if (password !== confirmPassword) return;
    if (!email || !password || !fullName) return;
    signup(
      { email, password, fullName },
      {
        onSettled: () => {
          setEmail("");
          setFullName("");
          setPassword("");
          setConfirmPassword("");
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
        <div className="bg-white p-8 rounded-lg shadow-md my-8">
          <div className="text-center mb-5">
            <Button
              withDelay={false}
              style={`font-['Monoton'] text-2xl tracking-wider hover:text-[#a16207] transition-colors duration-300 md:text-3xl`}
            >
              SUNSHADE
            </Button>
          </div>

          <p className="text-4xl font-semibold text-center mb-5">
            Create a New Account
          </p>

          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <label>UserName</label>
              <input
                type="text"
                placeholder="Enter Your FullName"
                className="border border-[#E5E7EB] w-full rounded-md px-2 h-8"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>

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
                type="password"
                placeholder="Enter Your Password"
                className="border border-[#E5E7EB] w-full rounded-md px-2 h-8"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div>
              <label>Confirm Password</label>
              <input
                type="password"
                placeholder="Enter Passowrd Again"
                className="border border-[#E5E7EB] w-full rounded-md px-2 h-8"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>

            <div className="flex flex-col items-center gap-5">
              <button className="bg-black text-white px-20 py-2 rounded-full font-semibold hover:bg-[#000000b6] transition-colors duration-300">
                {isLoading ? "Signup in..." : "Signup"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
