'use client';
import { CounterContext } from "@/context/Context";
import { useContext } from "react";

export default function ProductName() {
    const { state, dispatch } = useContext(CounterContext);
    return (
        <div className="flex flex-col gap-2">
            <label htmlFor="name-product" className="text-sm text-zinc-700 font-bold cursor-pointer">Nome do Produto</label>
            <input
                type="text"
                id="name-product"
                className="bg-zinc-300 rounded h-8 w-96"
                onChange={({ target: { value } }) => dispatch({ type: 'NAME', payload: value })}
                value={state.name}
            />
        </div>
    )
}