import { Route, Routes, useNavigate} from "react-router-dom";
import { Login } from "./view/pages/Login/Login.tsx";
import { DefaultLayout } from "./view/common/DefaultLayout/DefaultLayout.tsx";
import {useEffect} from "react";
import {isTokenExpired} from "./auth/auth.ts";

function App() {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token || isTokenExpired(token)) {
            localStorage.removeItem("token");
            localStorage.removeItem("refreshToken");
            navigate("/login");
        }
    }, [navigate]);

    return (
            <div className="flex flex-col min-h-screen bg-white text-black">
                <Routes>
                    <Route path="/*" element={<DefaultLayout />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </div>
    );
}

export default App;
