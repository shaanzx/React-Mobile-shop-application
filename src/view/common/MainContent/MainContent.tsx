import { Route, Routes } from "react-router-dom";
import { Home } from "../../pages/Home/Home.tsx";
import { About } from "../../pages/About/About.tsx";
import { Contact } from "../../pages/Contact/Contact.tsx";
import { Services } from "../../pages/Services/Services.tsx";
import {ShoppingCart} from "../../pages/ShoppingCart/ShoppingCart.tsx";
import {itemList} from "../ModifyCart/ModifyCart.tsx";

export function MainContent() {
    return (
        <div className="flex justify-center items-center flex-col w-[calc(100%-20px)] h-[84vh] overflow-y-auto p-2 bg-white text-black">
            <Routes>
                <Route path="/" index element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/Services" element={<Services />} />
                <Route path="/shopping-cart" element={<ShoppingCart itemsList={itemList} />} />
            </Routes>
        </div>
    );
}
