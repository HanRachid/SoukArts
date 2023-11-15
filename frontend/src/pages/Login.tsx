import logo from "../assets/login/logo1.png";
import login_side_image from "../assets/login/login_image_side.png";
import logo_gogole from "../assets/login/google-svgrepo-com.svg";
import logo_apple from "../assets/login/apple-color-svgrepo-com.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { User } from "../../types";
import { loginUser } from "../api/auth";
export default function Login() {
  const [login, setLogin] = useState<User>({
    username: "",
    password: "",
  });
  const [isChecked, setIsChecked] = useState(false);
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.name === "remember") {
      setIsChecked(!isChecked);
      return;
    }
    setLogin({ ...login, [event.target.name]: event.target.value });
    console.log(login);
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    loginUser(login);
  }
  return (
    <section className="w-screen h-screen flex items-center justify-between overflow-hidden">
      <div className="w-1/2 h-full px-32">
        <div className="h-60 w-full flex-col flex items-center justify-center">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <h2 className="text-4xl mt-6 font-primary">Welcome back!</h2>
        </div>
        <form className="space-y-6 w-full" onSubmit={handleSubmit}>
          <div className="w-full flex items-start justify-center flex-col">
            <label className="pb-1.5 font-secondary">Username</label>
            <input
              className="w-full py-2 px-3 focus:outline-colorBlack border-2 border-colorBeige/80 rounded-bl-xl rounded-tr-xl bg-gray-50"
              type="username"
              placeholder="Enter your username"
              name="username"
              onChange={handleChange}
            />
          </div>

          <div className="w-full flex items-start justify-center flex-col">
            <div className="flex justify-between items-center w-full">
              <label className="pb-1.5 font-secondary">Password</label>
              <button className="text-[#0C2A92] cursor-pointer hover:text-[#3553bd] font-secondary">
                forgot password
              </button>
            </div>
            <input
              className="w-full py-2 px-3 focus:outline-colorBlack border-2 border-colorBeige/80 rounded-bl-xl rounded-tr-xl bg-gray-50"
              type="password"
              placeholder="Enter your password"
              name="password"
              onChange={handleChange}
            />
          </div>
          <div className="">
            <input type="checkbox" name="remember" onChange={handleChange} />
            <label className="pl-4 font-secondary">Remember me</label>
          </div>

          <div className="w-full flex items-center justify-center">
            <button className="w-full bg-colorGold py-2.5 rounded-bl-xl rounded-tr-xl text-gray-50 font-semibold font-secondary hover:scale-[1.02] transition-all duration-100 hover:bg-opacity-90">
              Login
            </button>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-full h-0.5 bg-gray-300"></div>

            <p className="px-4  ">Or</p>
            <div className="w-full h-0.5 bg-gray-300"></div>
          </div>
        </form>
        <div className="w-full pt-10">
          <div className="flex items-center gap-10 justify-center">
            <button className="w-full py-2  border-black border-2 rounded-bl-xl rounded-tr-xl font-medium text-lg bg-white/50 hover:scale-[1.02] transition-all duration-100">
              <div className="flex items-center justify-evenly">
                <img className="w-7" src={logo_gogole} alt="logo_google" />
                <p className="font-secondary">Sign in with Google</p>
              </div>
            </button>
            <button className="w-full py-2  border-black border-2 rounded-bl-xl rounded-tr-xl font-medium text-lg bg-white/50 hover:scale-[1.02] transition-all duration-100">
              <div className="flex items-center justify-evenly">
                <img className="w-7" src={logo_apple} alt="logo_google" />
                <p className="font-secondary">Sign in with Apple</p>
              </div>
            </button>
          </div>
          <p className="text-center text-lg mt-6">
            Don’t have an account?{" "}
            <Link
              to="/register"
              className="text-[#0C2A92] hover:text-[#3553bd]"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
      <div className="w-1/2 h-full rounded-l-3xl overflow-hidden">
        <img
          className="w-full h-full"
          src={login_side_image}
          alt="side_image"
        />
      </div>
    </section>
  );
}
