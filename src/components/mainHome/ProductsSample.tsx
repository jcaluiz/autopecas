'use client';
import Product from "./productsSample/Product";

export default function ProductsSample() {
    return (
        <section className="flex flex-col items-center justify-center lg:grid grid-cols-4 lg:pl-20 gap-y-5 font-body font-semibold text-sm/[14px] text-black/80">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
        </section>
    )
}