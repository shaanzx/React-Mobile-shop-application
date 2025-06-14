import { useEffect, useState } from "react";
import type { CartItem } from "../../../model/CartItem";
import type {ProductData} from "../../../model/ProductData.ts";

interface ModifyCartProps {
    data: {product: ProductData}
}

export const itemList: CartItem[] = [];

export function ModifyCart({ data }: ModifyCartProps) {
    const [count, setCount] = useState(1);

    // Ensure count does not go below 1
    useEffect(() => {
        if (count < 1) {
            setCount(1);
            alert("Quantity cannot be less than 1");
        }
    }, [count]);

    // Update or add item in itemList
    useEffect(() => {
        const existingItem = itemList.find(item => item.product.id === data.product.id);

        if (existingItem) {
            existingItem.quantity = count;
        } else {
            itemList.push({
                product: data.product,
                quantity: count
            });
        }

        console.log("itemList", itemList);
    }, [count, data]);

    const increment = () => {
        setCount(prev => prev + 1);
    };

    const decrement = () => {
        setCount(prev => prev - 1);
    };

    return (
        <div className="w-fit mx-auto flex items-center justify-center gap-2 mt-1 p-1 border border-gray-300 rounded text-lg">
            <button
                className="bg-blue-400 px-5 py-1 rounded hover:bg-gray-300 transition"
                onClick={decrement}
            >
                −
            </button>
            <small className="font-semibold border bg-blue-100 px-2 py-1 rounded border-gray-300">
                {count}
            </small>
            <button
                className="bg-blue-400 px-5 py-1 rounded hover:bg-gray-300 transition"
                onClick={increment}
            >
                +
            </button>
        </div>
    );
}
