'use client';
import { useContext } from "react";
import Product from "./productsSample/Product";
import { CounterContext } from "@/context/Context";

export default function ProductsSample() {
    const {state} = useContext(CounterContext);

    return (
        <section className="flex flex-col items-center justify-center lg:grid grid-cols-4 lg:pl-20 gap-y-5 font-body font-semibold text-sm/[14px] text-black/80">
            {
                state.products && state.products
                    .filter(({name}) => name.toLowerCase().includes(state.productNameSearch.toLowerCase()))
                    .map(({id, name, salePrice, image}) => (
                        <Product key={id} id={Number(id)} name={name} salePrice={salePrice} image={image}/>
                ))
            }
        </section>
    )
}