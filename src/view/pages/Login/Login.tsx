/*
import {useNavigate} from "react-router-dom";

export const Login = () => {

    const navigate = useNavigate();

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100 px-4">
            <form className="bg-white p-8 md:p-10 rounded-xl shadow-xl w-full max-w-md flex flex-col">
                <h2 className="text-2xl font-semibold text-center text-gray-800 mb-1">
                    Welcome Back 👋
                </h2>
                <p className="text-center text-gray-500 mb-6">
                    Please login to your account
                </p>

                <label className="font-semibold text-gray-600 mb-1">Email</label>
                <input
                    type="email"
                    placeholder="you@example.com"
                    required
                    className="mb-5 px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-blue-500"
                />

                <label className="font-semibold text-gray-600 mb-1">Password</label>
                <input
                    type="password"
                    placeholder="Enter your password"
                    required
                    className="mb-5 px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-blue-500"
                />

                <button
                    type="submit"
                    className="bg-gradient-to-r from-blue-500 to bg-blue-300 hover:from-blue-300 hover:to-blue-500 transition text-white py-3 rounded-lg text-base font-semibold transition-colors"
                >
                    Login
                </button>

                <p className="text-center text-sm mt-4">
                    Don’t have an account?{" "}
                    <a href="/register" className="text-blue-600 hover:underline">
                        Register here
                    </a>
                </p>
                {/!*<div className="mt-4 text-center">
                    <a href="/" className="text-blue-600 hover:text-blue-800 text-sm inline-flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                             xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                  d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
                        </svg>
                        Continue Shopping
                    </a>
                </div>*!/}

                <div className={"mt-3 mb-4 text-center "}>
                    <button onClick={() => navigate("/")} className={"text-sm text-blue-600 hover:text-blue-800 flex justify-center items-center mx-auto gap-2"}>
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                             xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                  d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
                        </svg>
                        Continue Shopping
                    </button>
                </div>
            </form>
        </div>
    );
};
*/

import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { backendApi } from "../../../api.ts";
import {getUserFromToken} from "../../../auth/auth.ts"; // Make sure this path is correct

type FormData = {
    username: string;
    password: string;
};

export function Login() {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

    /*
        const onSubmit = (data: FormData) => {
            console.log("Form submitted successfully:", data);
            alert(`Login successful for: ${data.email}`);
            window.location.href = "/";
        };
    */

    const authenticateUser = async (data: FormData) => {
        try {
            const userCredentials = {
                username: data.username, // Backend expects 'username'
                password: data.password,
            };

            const response = await backendApi.post('/auth/login', userCredentials);
            const accessToken = response.data.accessToken;
            const refreshToken = response.data.refreshToken;

            localStorage.setItem('token', accessToken);
            localStorage.setItem('refreshToken', refreshToken);

            const user = getUserFromToken(accessToken)

            localStorage.setItem('username', user.username as string);
            localStorage.setItem('role', user.role as string);
            alert(`Login successful for: ${data.username}`);
            navigate('/');
        } catch (error) {
            console.error(error);
            alert("Login failed");
        }
    };

    return (
        <div className="font-sans bg-[#101010] text-white w-[calc(100%-40px)] h-full flex justify-center items-center py-10 px-5">
            <form
                className="bg-[#1A1A1A] border border-[#2c2c2c] rounded-xl p-10 max-w-[400px] w-full shadow-[0_0_20px_rgba(212,175,55,0.1)] text-white"
                onSubmit={handleSubmit(authenticateUser)}
            >
                <div className="flex justify-start items-center w-full mb-5">
                    <button
                        type="button"
                        className="bg-transparent border-none text-white text-2xl cursor-pointer w-8 h-8 flex justify-center items-center pb-1 rounded-md transition-all duration-300 hover:text-[#D4AF37] hover:bg-[rgba(212,175,55,0.1)]"
                        onClick={() => navigate("/")}
                    >
                        ×
                    </button>
                    <h2 className="text-2xl text-[#D4AF37] mx-auto">Welcome Back 👋</h2>
                </div>
                <p className="text-sm text-[#bbbbbb] mb-7 text-center">
                    Please login with your account to continue
                </p>

                <div className="mb-4 w-full">
                    <label className="block mb-2 text-sm text-[#e0e0e0]">Username :</label>
                    <input
                        type="text"
                        placeholder="Enter your username"
                        className="w-full p-3 mb-1 bg-transparent border border-[#333] rounded-lg text-white text-sm transition-all duration-300 placeholder-[#777] focus:border-[#D4AF37] focus:shadow-[0_0_6px_rgba(212,175,55,0.5)] focus:outline-none"
                        {...register("username", {
                            required: "Username is required",
                            pattern: {
                                value: /^[a-zA-Z][a-zA-Z0-9_-]{2,14}$/i,
                                message: "Invalid username address",
                            },
                        })}
                    />
                    {errors.username && (
                        <span className="text-[#ff4d4d] text-sm">{errors.username.message}</span>
                    )}
                </div>

                <div className="mb-4 w-full">
                    <label className="block mb-2 text-sm text-[#e0e0e0]">Password :</label>
                    <input
                        type="password"
                        placeholder="Enter your password"
                        className="w-full p-3 mb-1 bg-transparent border border-[#333] rounded-lg text-white text-sm transition-all duration-300 placeholder-[#777] focus:border-[#D4AF37] focus:shadow-[0_0_6px_rgba(212,175,55,0.5)] focus:outline-none"
                        {...register("password", {
                            required: "Password is required",
                        })}
                    />
                    {errors.password && (
                        <span className="text-[#ff4d4d] text-sm">{errors.password.message}</span>
                    )}
                </div>

                <button
                    type="submit"
                    className="w-full bg-[#D4AF37] text-[#101010] border-none p-3.5 text-base font-bold rounded-lg cursor-pointer transition-all duration-300 hover:bg-[#e6c34a] hover:-translate-y-1"
                >
                    Login
                </button>

                <p className="mt-5 text-sm text-[#999999] text-center">
                    Don’t have an account?{" "}
                    <a
                        href="/register"
                        className="text-[#D4AF37] no-underline transition-colors duration-300 hover:text-[#e6c34a]"
                    >
                        Register here
                    </a>
                </p>
            </form>
        </div>
    );
}

