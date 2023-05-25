'use client';
import { CounterContext } from "@/context/Context";
import { useContext } from "react";

export default function CostPriceProduct() {
    const { state, dispatch } = useContext(CounterContext);
    return (
        <div className="flex flex-col gap-2">
            <label htmlFor="cost-price-product" className="text-sm text-zinc-700 font-bold cursor-pointer">Preço de Custo</label>
            <input
                type="number"
                id="cost-price-product"
                className="bg-zinc-300 rounded h-8 w-96"
                onChange={({ target: { value } }) => dispatch({ type: 'COSTPRICE', payload: Number(value) })}
                value={state.costPrice}
            />
        </div>
    )
}