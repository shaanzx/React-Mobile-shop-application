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
                {/*<div className="mt-4 text-center">
                    <a href="/" className="text-blue-600 hover:text-blue-800 text-sm inline-flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                             xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                  d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
                        </svg>
                        Continue Shopping
                    </a>
                </div>*/}

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
