'use client';
import { useEffect, useState } from "react";
import Product from "./productsSample/Product";
import Requests from "@/services/Requests";

export default function ProductsSample() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const requests = new Requests();
        const getAllProducts = async () => {
            const products = await requests.findAllProduct();
            setProducts(products);
        }
        getAllProducts();
    }, []);

    console.log(products);

    return (
        <section className="flex flex-col items-center justify-center lg:grid grid-cols-4 lg:pl-20 gap-y-5 font-body font-semibold text-sm/[14px] text-black/80">
            {
                products.map(({id, name, salePrice, image}) => (
                    <Product key={id} id={id} name={name} salePrice={salePrice} image={image}/>
                ))
            }
        </section>
    )
}