'use client';

import Header from "@/components/Header"
import { CounterContext } from "@/context/Context";
import Requests from "@/services/Requests";
import { ArrowBigRight, Delete, Edit, ShoppingCart } from "lucide-react";
import { FormEvent, useContext, useEffect, useState } from "react"
import oneImage from '../../../public/images/number-one.svg';
import twoImage from '../../../public/images/number-two.svg';
import threeImage from '../../../public/images/number-three.svg';
import fourImage from '../../../public/images/number-four.svg';
import Image from "next/image";
import Button from "@/components/utilsComponents/Button";
import { useRouter } from "next/router";
import MenuPurchase from "./components/MenuPurchase";

export default function Buy() {
    const [user, setUser] = useState<{ id: string | null, name: string | null }>({ id: '', name: '' });
    const { state, dispatch } = useContext(CounterContext);
    const [purchase, setPurchase] = useState<any>([]);
    const [products, setProducts] = useState<any>([]);

    const requests = new Requests();
    const router = useRouter();
    const queryId = router.query.buy;

    const getPurchases = async (userId: number) => {
        const results = await requests.getPurchaseByUser(userId);
        setPurchase(results);
    }

    useEffect(() => {
        const getProducts = async () => {
            await purchase.forEach(async (e: { productId: number }) => {
                const productsPurchase = await requests.findProductById(e.productId);
                setProducts((previous: object[]) => [...previous, productsPurchase]);
            });
        };
        getProducts();
    }, [purchase]);

    useEffect(() => {
        let id: string | null = '';
        let newName: string | null = '';
        if (typeof localStorage !== 'undefined') {
            id = localStorage.getItem('id');
            newName = localStorage.getItem('user');
          }
        setUser({
            id,
            name: newName && newName?.replace(/"/gm, ''),
        });
        dispatch({type: 'USER', payload: {
            id,
            name: newName && newName?.replace(/"/gm, ''),
        }})
        getPurchases(Number(id));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const total = products.reduce((
        acc: number,
        curr: { salePrice: string },
        i: number
    ) => acc + (purchase[i].quantity * Number(curr.salePrice)), 0);

    const cleanDelete = (e: FormEvent) => {
        e.preventDefault();
        console.log(products.map(({ id }: { id: number }) => id));
    };

    const clickDelete = async (productId: number) => {
        console.log(productId);
        await requests.deletePurchase(Number(user.id), productId);
        getPurchases(Number(user.id))
        setProducts(products.filter(({ id }: { id: number }) => id !== productId))
    }

    const secoundPartPurchase = (e: FormEvent) => {
        e.preventDefault();
        router.push(`/identification/${user.id}`);
    }

    return (
        <>
            <Header />
            <MenuPurchase selection="carrinho" />
            <div className="border py-10 flex justify-between px-5">
                <Button handleClick={cleanDelete} className="flex w-40 gap-2"><ShoppingCart />Limpar Carrinho</Button>
                <Button handleClick={secoundPartPurchase} className="flex w-40 gap-2">Finalizar Compra <ArrowBigRight /></Button>
            </div>
            <div className="flex flex-col w-sproductscreen">
                <p className="text-center text-3xl">{`SEUS PEDIDOS, ${user.name?.toUpperCase()}`}</p>
                <div className="flex flex-col w-full">
                    {
                        products.map((product: any, i: number) => (
                            <section key={product.id} className="flex gap-16 w-full">
                                <div className="flex flex-col justify-center items-center gap-2 pl-4">
                                    <div className="group relative flex hover:text-yellow-600">
                                        <button><Edit /></button>
                                        <p className="invisible group-hover:visible absolute left-7">Editar</p>
                                    </div>
                                    <div className="group relative flex hover:text-red-700">
                                        <button onClick={() => clickDelete(product.id)}><Delete /></button>
                                        <p className="invisible group-hover:visible absolute left-7">Excluir</p>
                                    </div>
                                </div>
                                <section className="flex w-full border">
                                    <div className="flex flex-col w-80 items-center border-2">
                                        <label htmlFor="name-product" className="text-center text-xl">Produto</label>
                                        <div>
                                            {/* <Image src={product.image} width={50} alt={`Imagem de ${product.name}`} /> */}
                                            <p className="text-center">{product.name}</p>

                                        </div>
                                    </div>
                                    <div className="flex flex-col w-80 border-2">
                                        <label htmlFor="name-product" className="text-center text-xl">Quantidade</label>
                                        <p className="text-center pt-2">{purchase[i].quantity}</p>
                                    </div>
                                    <div className="flex flex-col items-center border-2 w-80">
                                        <label htmlFor="name-product" className="text-center text-xl">Preço Unitário</label>
                                        <p className="text-center pt-2">{Number(product.salePrice).toFixed(2).replace(/\./, ',')}</p>
                                    </div>
                                    <div className="flex flex-col items-center border-2 w-80">
                                        <label htmlFor="name-product" className="text-center text-xl">Total</label>
                                        <p className="text-center pt-2">{(purchase[i].quantity * Number(product.salePrice)).toFixed(2).replace(/\./, ',')}</p>
                                    </div>
                                </section>
                            </section>

                        ))
                    }
                    <div className="border flex justify-end w-full bg-zinc-200 pr-10">
                        {
                            `R$ ${Number(total).toFixed(2).replace(/\./, ',')}`
                        }
                    </div>
                </div>
            </div>
        </>
    )
}