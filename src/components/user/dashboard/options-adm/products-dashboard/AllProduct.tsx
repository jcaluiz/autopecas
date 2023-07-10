'use client';

// import IProduct from "@/Interfaces/IProduct";
import IProductRequest from "@/Interfaces/IProductRequest";
import Requests from "@/services/Requests";
import { Delete, Edit } from "lucide-react";
import { useEffect, useState } from "react";
import ProductsOfAllProducts from "./all-product/ProductsOfAllProducts";

export default function AllProducts() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const allProduct = async () => {
            const requests = new Requests();
            const request = await requests.findAllProduct();
            setProducts(request);
        }
        allProduct();
    }, []);
    console.log(products);
    const handleClickEdit = (id: number) => console.log(id)

    return (
        <div className="w-[62rem] overflow-x-scroll whitespace-nowrap font-body flex flex-col items-center gap-1">
            <h1 className="text-lg font-bold pb-10 pt-3">Todos os Produtos</h1>
            {
                products.map((product: IProductRequest) => (
                    <ProductsOfAllProducts 
                        key={product.id} 
                        product={product} 
                    />
                ))
            }
        </div>
    )
}