
import {useEffect, useState} from "react";
import {Product} from "../../common/product/Product.tsx";

type ProductData = {
    id: number;
    name: string;
    price: number;
    currency: string;
    color: string;
    ram: string;
    storage: string;
    image: string;
}

export const Home = () => {
    const [products, setProducts] = useState<ProductData[]>([]);

    useEffect(() =>{
        const fetchData = async () =>{
            try{
/*                const response = await fetch('./product-data.json')
                const jsonData = await response.json();*/
                // console.log(jsonData);
                setProducts(jsonData);
            }catch (error){
                console.error('Error fetching data: ', error);
            }
        }
        fetchData();
    },[]);

    return (
        <div>
            <div className="flex flex-wrap h-screen ml-[1px] mt-5 mb-5 justify-center items-center mx-auto gap-15">
                {/*<div
                    className="w-72 h-[420px] p-4 bg-white shadow-md rounded-xl text-black flex flex-col justify-between items-center hover:scale-105 transition-all duration-500 ease-in-out">
                    <div>
                        <img src={basicVersion} alt="logo" className="w-[128px] h-[128px]"/>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold ">Apple 12</h2>
                    </div>
                    <div className="text-center">
                        <p className="text-1xl ">
                            $1,999.99
                        </p>
                        <p>
                            color: Light Blue<br/>
                            ram: 8gb<br/>
                            storage: 256gb<br/>
                        </p>
                    </div>
                    <div className="flex justify-center items-center">
                        <button
                            className="w-fit h-fit bg-orange-500 hover:bg-orange-600 transition text-white p-2 rounded-lg text-base font-semibold transition-colors"
                        >
                            Add To Cart <FontAwesomeIcon icon={faCartShopping}/>
                        </button>

                    </div>
                </div>*/}
                {
                    products.map((product) => (
                        <Product key={product.id} data={product}/>
                    ))
                }

                {/*<div
                    className="w-72 h-[420px] p-4 bg-white shadow-md rounded-xl text-black flex flex-col justify-between items-center hover:scale-105 transition-all duration-500 ease-in-out">
                    <div>
                        <img src={proVersion} alt="logo" className="w-[128px] h-[128px]"/>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold ">Apple 12 Pro</h2>
                    </div>
                    <div className="text-center">
                        <p className="text-1xl ">
                            $1,499.99
                        </p>
                        <p>
                            color: blue<br/>
                            ram: 8gb<br/>
                            storage: 256gb<br/>
                        </p>
                    </div>
                    <div className="flex justify-center items-center">
                        <button
                            className="w-fit h-fit bg-orange-500 hover:bg-orange-600 transition text-white p-2 rounded-lg text-base font-semibold transition-colors"
                        >
                            Add To Cart <FontAwesomeIcon icon={faCartShopping}/>
                        </button>

                    </div>
                </div>*/}

               {/* <div
                    className="w-72 h-[420px] p-4 bg-white shadow-md rounded-xl text-black flex flex-col justify-between items-center hover:scale-105 transition-all duration-500 ease-in-out">
                    <div>
                        <img src={proMaxVersion} alt="logo" className="w-[128px] h-[128px]"/>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold ">Apple 12 Pro MAX</h2>
                    </div>
                    <div className="text-center">
                        <p className="text-1xl ">
                            $1,999.99
                        </p>
                        <p>
                            color: Gold<br/>
                            ram: 8gb<br/>
                            storage: 512gb<br/>
                        </p>
                    </div>
                    <div className="flex justify-center items-center">
                        <button
                            className="w-fit h-fit bg-orange-500 hover:bg-orange-600 transition text-white p-2 rounded-lg text-base font-semibold transition-colors"
                        >
                            Add To Cart <FontAwesomeIcon icon={faCartShopping}/>
                        </button>

                    </div>
                </div>*/}
            </div>
        </div>

    );
};
