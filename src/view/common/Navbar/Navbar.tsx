/*
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
*/

// import "./Navbar.css";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import logo from "../../../assets/react.svg";
/*import {HugeiconsIcon} from "@hugeicons/react";
import {ShoppingCart01Icon} from "@hugeicons/core-free-icons";*/

export function Navbar() {
    const [username, setUsername] = useState<string | null>(null);
    const [role, setRole] = useState<string | null>(null);


    useEffect(() => {
        const storedUsername = localStorage.getItem("username");
        const storedRole = localStorage.getItem("role");
        setUsername(storedUsername);
        setRole(storedRole);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("user");
        localStorage.removeItem("role");
        window.location.href = "/login";
    };


    return (
        <div
            className="font-sans flex justify-between items-center py-7 px-5 mt-2.5 mx-2.5 bg-white/5 shadow-lg backdrop-blur-lg border border-white/20 h-10 text-white w-[calc(100%-25px)] rounded-2xl">
            <div className="navbar_logo">
                <img src={logo} alt="logo"/>
            </div>

            <div className="navigation flex items-center justify-center gap-5">
                <ul className="flex items-center justify-center gap-5 list-none">
                    {role === 'customer' && (
                        <>
                            <li>
                                <Link
                                    to="/"
                                    className="text-black no-underline cursor-pointer border-b-2 border-transparent pb-2 transition-colors duration-400 hover:border-[#D4AF37] hover:text-[#D4AF37]"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/about"
                                    className="text-black no-underline cursor-pointer border-b-2 border-transparent pb-2 transition-colors duration-400 hover:border-[#D4AF37] hover:text-[#D4AF37]"
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/contact"
                                    className="text-black no-underline cursor-pointer border-b-2 border-transparent pb-2 transition-colors duration-400 hover:border-[#D4AF37] hover:text-[#D4AF37]"
                                >
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/shopping-cart"
                                    className="text-black no-underline cursor-pointer border-b-2 border-transparent pb-2 transition-colors duration-400 hover:border-[#D4AF37] hover:text-[#D4AF37]"
                                >
                                    {/*<HugeiconsIcon icon={ShoppingCart01Icon}/>*/}
                                </Link>
                            </li>
                        </>
                    )}

                    {role === 'admin' && (
                        <>
                            <li>
                                <Link
                                    to="/admin-panel"
                                    className="text-black no-underline cursor-pointer border-b-2 border-transparent pb-2 transition-colors duration-400 hover:border-[#D4AF37] hover:text-[#D4AF37]"
                                >
                                    Admin Panel
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/manage-products"
                                    className="text-black no-underline cursor-pointer border-b-2 border-transparent pb-2 transition-colors duration-400 hover:border-[#D4AF37] hover:text-[#D4AF37]"
                                >
                                    Manage Products
                                </Link>
                            </li>
                        </>
                    )}
                </ul>

                <div className="ml-4">
                    {username ? (
                        <p className=" text-black text-xl">{username}</p>
                    ) : (
                        <button
                            className="cursor-pointer bg-transparent text-[#D4AF37] border-2 border-[#D4AF37] rounded-lg !py-2 !px-4 transition-all duration-400 hover:bg-[#D4AF37] hover:text-[#101010]"
                            type="button"
                            onClick={() => (window.location.href = '/login')}
                        >
                            Sign In
                        </button>
                    )}

                </div>
                <div className="flex items-center justify-center gap-5">
                    {username && (
                        <button
                            className="cursor-pointer bg-transparent text-[#D4AF37] border-2 border-[#D4AF37] rounded-lg !py-2 !px-4 transition-all duration-400 hover:bg-[#D4AF37] hover:text-[#101010]"
                            type="button"
                            onClick={() => {
                                handleLogout()
                            }}>
                            Sign Out
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
