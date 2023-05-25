'use client';
import { CounterContext } from "@/context/Context";
import { useContext, useEffect, useState } from "react";

export default function SalePriceProduct() {
    const { state, dispatch } = useContext(CounterContext);
    const [porcentage, setPorcentage] = useState(30);
    let pricePorcentage = Number((state.costPrice * (1 + (porcentage / 100))).toFixed(2));
    const dispatchSalePrice = () => dispatch({ type: 'SALEPRICE', payload: pricePorcentage });

    const handleChange = (value: string) => {
        setPorcentage(Number(value));
        dispatchSalePrice();
    }

    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        pricePorcentage = Number((state.costPrice * (1 + (porcentage / 100))).toFixed(2));
        dispatchSalePrice();
    }, [state.costPrice])

    return (
        <div className="flex items-center gap-3">
            <div className="flex flex-col gap-2">
                <label htmlFor="sale-price-product" className="text-sm text-zinc-700 font-bold cursor-pointer">Preço de Venda</label>
                <input
                    type="text"
                    id="sale-price-product"
                    className="bg-zinc-300 rounded h-8 w-96"
                    // onChange={}
                    value={state.salePrice}
                />
            </div>
            <div className="flex flex-col items-center justify-center mt-2">
                <label htmlFor="sale-price-product" className="text-sm text-zinc-700 font-bold cursor-pointer">% de Venda</label>
                <input
                    type="text"
                    id="sale-price-product"
                    className="bg-zinc-300 rounded h-8 w-14"
                    onChange={({ target: { value } }) => handleChange(value)}
                    value={porcentage}
                />
            </div>
        </div>
    )
}