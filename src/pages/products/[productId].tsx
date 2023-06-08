'use client';
import Header from "@/components/Header";
import Requests from "@/services/Requests";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ProductPage() {
    const [product, setProduct] = useState({
        categoryId: 0,
        codeOriginalId: 0,
        codeProducer: "BR000395",
        costPrice: "7.80",
        description: "",
        id: 0,
        image: "",
        name: "",
        ncm: "",
        producerId: 0,
        quantity: 0,
        salePrice: "",
    });
    const [original, setOriginal] = useState('');
    const [producer, setProducer] = useState('');
    const router = useRouter();

    // console.log(product);
    const productId = router.query.productId;

    // const findOriginalCodeById = async () => {
    //     const requests = new Requests();
    //     const originalCode = await requests.findOriginalCodeById()
    // }

    useEffect(() => {
        const requests = new Requests();
        const findProduct = async () => {
            const findProductById = await requests.findProductById(Number(productId));
            const originalCode = await requests.findOriginalCodeById(findProductById.codeOriginalId);
            const producerById = await requests.findProducerById(findProductById.producerId);
            console.log(findProductById);
            setOriginal(originalCode.codigoOriginal);
            setProducer(producerById.producer);
            setProduct(findProductById);
        };
        findProduct();
    }, [productId])
    return (
        <>
            <Header />
            <main className="flex flex-col border-2 h-screen bg-white-body font-body">
                <section className="flex justify-between mx-28 pt-10 mt-10 bg-white">
                    <section className="pl-24">
                        <Image 
                            src={product.image} 
                            alt={`Imagem da peça ${product.name}`} 
                            width={450} height={450} 
                        />
                    </section>
                    <nav className="flex flex-col shadow-2xl pt-10 w-96 bg-white-body border-2 rounded-xl">
                        <div className="bg-white h-full mb-10 mx-5 pt-5 border-2 shadow-xl rounded-xl">
                            <h1 className="text-xl flex flex-wrap text-center font-bold">{product.name}</h1>
                            <p>Cód Original: {original}</p>
                        </div>
                    </nav>
                </section>
            </main>
        </>
    )
}