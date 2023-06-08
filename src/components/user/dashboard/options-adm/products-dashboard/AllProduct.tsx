'use client';

import IProduct from "@/Interfaces/IProduct";
import Requests from "@/services/Requests";
import { Delete, Edit } from "lucide-react";
import { useEffect, useState } from "react";

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
    return (
        <div className="w-[62rem] overflow-x-scroll whitespace-nowrap font-body flex flex-col items-center gap-10">
            <h1 className="text-lg font-bold">Todos os Produtos</h1>
            {
                products.map((e: IProduct) => (
                    <section key={e.id} className="flex text-sm border-2 gap-1 w-full whitespace-nowrap pb-4">
                        <div className="flex flex-col justify-center items-center gap-2">
                            <div className="group relative flex hover:text-yellow-600">
                                <button><Edit /></button>
                                <p className="invisible group-hover:visible absolute left-7">Editar</p>
                            </div>
                            <div className="group relative flex hover:text-red-700">
                                <button><Delete /></button>
                                <p className="invisible group-hover:visible absolute left-7">Excluir</p>
                            </div>
                        </div>
                        <section className="flex">
                            <div className="flex flex-col overflow-x-scroll w-24 items-center border-2">
                                <label htmlFor="name-product" className="text-center">Id</label>
                                <p className="">{e.id}</p>
                            </div>
                            <div className="flex flex-col overflow-x-scroll w-52 border-2">
                                <label htmlFor="name-product" className="text-center">Produto</label>
                                <p className="">{e.name}</p>
                            </div>
                            <div className="flex flex-col items-center overflow-x-scroll border-2 w-32">
                                <label htmlFor="name-product">Código Original</label>
                                <p className="">{e.codeOriginalId}</p>
                            </div>
                            <div className="flex flex-col items-center overflow-x-scroll border-2 w-32">
                                <label htmlFor="name-product">Código Fabricante</label>
                                <p className="">{e.codeProducer}</p>
                            </div>
                            <div className="flex flex-col items-center overflow-x-scroll border-2 w-24">
                                <label htmlFor="name-product">Quantidade</label>
                                <p className="">{e.quantity}</p>
                            </div>
                            <div className="flex flex-col items-center overflow-x-scroll border-2 w-20">
                                <label htmlFor="name-product">Custo</label>
                                <p className="">{e.costPrice}</p>
                            </div>
                            <div className="flex flex-col items-center overflow-x-scroll border-2 w-20">
                                <label htmlFor="name-product">Venda</label>
                                <p className="">{e.salePrice}</p>
                            </div>
                            <div className="flex flex-col items-center overflow-x-scroll border-2 w-20">
                                <label htmlFor="name-product">Fabricante</label>
                                <p className="">{e.producerId}</p>
                            </div>
                            <div className="flex flex-col items-center overflow-x-scroll border-2 w-20">
                                <label htmlFor="name-product">Categoria</label>
                                <p className="">{e.categoryId}</p>
                            </div>
                            <div className="flex flex-col items-center overflow-x-scroll border-2 w-20">
                                <label htmlFor="name-product">NCM</label>
                                <p className="">{e.ncm}</p>
                            </div>
                            <div className="flex flex-col overflow-x-scroll border-2 w-40">
                                <label htmlFor="name-product">Descrição</label>
                                <p className="">{e.description}</p>
                            </div>
                            <div className="flex flex-col overflow-x-scroll border-2 w-40">
                                <label htmlFor="name-product">Imagem</label>
                                <p className="">{e.image}</p>
                            </div>
                        </section>
                    </section>
                ))
            }
        </div>
    )
}