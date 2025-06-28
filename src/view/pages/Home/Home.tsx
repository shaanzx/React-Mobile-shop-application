import {Product} from "../../common/product/Product.tsx";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAllProducts} from "../../../slices/productsSlice.ts";
import type {AppDispatch, RootState} from "../../../store/store.ts";

/*type ProductData = {
    id: number;
    name: string;
    price: number;
    currency: string;
    color: string;
    ram: string;
    storage: string;
    image: string;
}*/

export const Home = () => {

    const dispatch = useDispatch<AppDispatch>();
    const {list}  = useSelector((state : RootState) => state.products)

    useEffect(() =>{
        dispatch(getAllProducts());
    },[]);

    return (
        <div>
            <div className="flex flex-wrap h-screen ml-[1px] mt-5 mb-5 justify-center items-center mx-auto gap-15">
                {
                    list.map((product) => (
                        <Product key={product.id} data={product}/>
                    ))
                }
            </div>
        </div>

    );
};
