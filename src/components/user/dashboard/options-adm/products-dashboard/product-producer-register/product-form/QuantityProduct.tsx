'use client';
import { CounterContext } from "@/context/Context";
import { useContext } from "react";

export default function QuantityProduct() {
    const { state, dispatch } = useContext(CounterContext);
    return (
        <div className="flex flex-col gap-2">
            <label htmlFor="quantity-product" className="text-sm text-zinc-700 font-bold cursor-pointer">Quantidade</label>
            <input
                type="number"
                id="quantity-product"
                className="bg-zinc-300 rounded h-8 w-96"
                onChange={({ target: { value } }) => dispatch({ type: 'QUANTITY', payload: Number(value) })}
                value={state.quantity}
            />
        </div>
    )
}