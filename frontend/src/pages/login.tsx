import logo from "../assets/login/logo1.png"
import login_side_image from "../assets/login/login_image_side.png";
import { Link } from 'react-router-dom';
export default function Login() {
    return (
        <section className="w-screen h-screen flex items-center justify-between overflow-hidden">
            <div className="w-1/2 h-full px-20">
                <div className="h-60 w-full flex-col flex items-center justify-center">
                    <img src={logo} alt="logo" />
                    <h2 className="text-4xl mt-6 font-primary">Welcome back!</h2>
                </div>
                <div className="space-y-6 w-full">
                    <div className="w-full flex items-start justify-center flex-col">
                        <label className="pb-1.5">Email adresse</label>
                        <input className="w-full py-2 px-3 focus:outline-colorBlack border-2 border-colorBeige/80 rounded-bl-xl rounded-tr-xl bg-gray-50" type="email" placeholder="Enter your username" />
                    </div>

                    <div className="w-full flex items-start justify-center flex-col">
                        <div className="flex pb-1.5 justify-between items-center w-full">
                            <label className="">Password</label>
                            <button className="text-[#0C2A92] cursor-pointer hover:text-[#3553bd]">forgot password</button>
                        </div>
                        <input className="w-full py-2 px-3 focus:outline-colorBlack border-2 border-colorBeige/80 rounded-bl-xl rounded-tr-xl bg-gray-50" type="password" placeholder="Enter your password" />
                    </div>
                    <div className="">
                        <input type="checkbox" />
                        <label className="pl-4">Remember for 30 days</label>
                    </div>

                    <div className="w-full flex items-center justify-center">
                        <button className="w-full bg-colorGold py-2.5 rounded-bl-xl rounded-tr-xl text-gray-50 font-semibold">Login</button>
                    </div>

                    <div className="flex items-center justify-center w-full pt-10">
                        <p className="absolute  px-4 bg-gray-50">Or</p>
                        <div className="w-full h-0.5 bg-gray-300"></div>
                    </div>
                </div>
                <div className="w-full pt-10">
                    <div className="flex items-center gap-10 justify-center">
                        <button className="w-full py-2  border-black border-2 rounded-bl-xl rounded-tr-xl font-medium text-lg bg-white/50 hover:scale-[1.02] transition-all duration-300">Sign in with Google</button>
                        <button className="w-full py-2  border-black border-2 rounded-bl-xl rounded-tr-xl font-medium text-lg bg-white/50 hover:scale-[1.02] transition-all duration-300">Sign in with Apple</button>
                    </div>
                    <p className="text-center text-lg mt-6">Don’t have an account? <Link to="#" className="text-[#0C2A92] hover:text-[#3553bd]">Sign Up</Link></p>
                </div>
            </div>
            <div className="w-1/2 h-full rounded-l-3xl overflow-hidden">
                <img className="w-full h-full" src={login_side_image} alt="side_image" />
            </div>
        </section>

    );
}
