import { Link } from "react-router-dom";
import logo from "../../../assets/react.svg";

export function Navbar() {
    return (
        <div className="flex justify-between items-center p-4 mt-2 bg-white/5 shadow-lg backdrop-blur-md rounded-xl h-16 w-full text-black">
            <div className="flex items-center gap-2">
                <img src={logo} alt="logo" className="w-12 h-12" />
                <h2 className="text-2xl font-bold tracking-wide font-impact">
                    ShanZ Mobile
                </h2>
            </div>
            <div className="flex items-center gap-5">
                <ul className="flex items-center gap-5 list-none">
                    <li>
                        <Link
                            to="/"
                            className="pb-2 border-b-2 border-transparent hover:border-black transition duration-300"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/about"
                            className="pb-2 border-b-2 border-transparent hover:border-black transition duration-300"
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/services"
                            className="pb-2 border-b-2 border-transparent hover:border-black transition duration-300"
                        >
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/contact"
                            className="pb-2 border-b-2 border-transparent hover:border-black transition duration-300"
                        >
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/shopping-cart"
                            className="pb-2 border-b-2 border-transparent hover:border-black transition duration-300"
                        >
                            Cart
                        </Link>
                    </li>
                </ul>
                <button
                    className="bg-gradient-to-r from-blue-500 to bg-blue-300 hover:from-blue-300 hover:to-blue-500 text-white rounded-md px-4 py-1  transition">
                    <Link to="/login" className="text-white no-underline">
                        Sign In
                    </Link>
                </button>
            </div>
        </div>
    );
}
