import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useRegister } from "../hook/useRegister";
import Loader from "./Loader";

function Register() {
  const { register, isPending } = useRegister();
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");
    const displayName = formData.get("displayName");
    register(email, displayName, password);
  };

  return (
    <section className="min-h-screen flex items-center justify-center flex-col bg-gradient-to-b from-[#121212] to-[#2c2c2c] overflow-hidden font-sans">
      <div className="relative w-[400px] min-h-[400px] bg-[#121212] backdrop-blur-sm rounded-xl flex items-center justify-center shadow-2xl border border-white/50">
        <div className="w-full h-full pt-10 pl-10 pr-10 pb-5">
          <h2 className="text-white text-2xl font-semibold tracking-wider mb-10 relative after:content-[''] after:absolute after:left-0 after:bottom-[-10px] after:w-20 after:h-1 after:bg-white">
            Register Form
          </h2>
          <form onSubmit={handleRegister}>
            {/* Display Name */}
            <div className="flex flex-col w-full mt-5 gap-1">
              <span className="text-white pl-2">Display Name</span>
              <input
                type="text"
                name="displayName"
                required
                placeholder="Type here"
                className="w-full bg-white/20 border-none p-3 rounded-full text-white placeholder-white text-base tracking-wide shadow-md focus:outline-none hover:bg-white/30 transition duration-300 transform hover:scale-105"
                aria-label="Display Name"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col w-full mt-5 gap-1">
              <span className="text-white pl-2">Email</span>
              <input
                required
                type="email"
                name="email"
                placeholder="Type here"
                className="w-full bg-white/20 border-none p-3 rounded-full text-white placeholder-white text-base tracking-wide shadow-md focus:outline-none hover:bg-white/30 transition duration-300 transform hover:scale-105"
                aria-label="Email"
              />
            </div>

            {/* Password */}
            <div className="flex flex-col w-full mt-5 gap-1">
              <span className="text-white pl-2">Password</span>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={handlePasswordChange}
                  name="password"
                  placeholder="Password"
                  className="w-full bg-white/20 border-none p-3 rounded-full text-white placeholder-white text-base tracking-wide shadow-md focus:outline-none hover:bg-white/30 transition duration-300 transform hover:scale-105"
                  required
                  aria-label="Password"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white focus:outline-none"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.418 0-8-3.582-8-8s3.582-8 8-8a10.05 10.05 0 011.875.175M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 3l18 18"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-5 mb-5">
              {isPending ? (
                <button
                  disabled
                  className="w-full bg-white text-gray-600 p-2 rounded-full font-semibold cursor-not-allowed shadow-md"
                >
                  <Loader />
                </button>
              ) : (
                <button
                  type="submit"
                  className="w-full bg-white text-gray-600 p-2 rounded-full font-semibold cursor-pointer shadow-md hover:bg-gray-200 transition duration-300 transform hover:scale-105"
                >
                  Register
                </button>
              )}
            </div>

            {/* Google Registration Button */}
            <div className="mt-5 mb-10">
              <button
                type="button"
                className="w-full bg-white text-gray-600 border-[#e5e5e5] rounded-full p-5 hover:bg-gray-200 transition duration-300 transform hover:scale-105"
              >
                <svg
                  aria-label="Google logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path d="m0 0H512V512H0" fill="#fff"></path>
                    <path
                      fill="#34a853"
                      d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                    ></path>
                    <path
                      fill="#fbbc02"
                      d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                    ></path>
                    <path
                      fill="#ea4335"
                      d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                    ></path>
                  </g>
                </svg>
                Register with Google
              </button>
            </div>
          </form>

          <p className="text-gray-400 items-center justify-center flex">
            If you have an account, please{" "}
            <NavLink className="text-blue-400 underline" to="/login">
              Login
            </NavLink>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Register;
