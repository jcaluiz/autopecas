'use client';

import { CounterContext } from "@/context/Context";
import { useContext } from "react";

export default function NcmProduct() {
    const { state, dispatch } = useContext(CounterContext);

    return (
        <div className="flex flex-col gap-2">
        <label htmlFor="ncm-product" className="text-sm text-zinc-700 font-bold cursor-pointer">NCM</label>
        <input
            type="number"
            id="ncm-product"
            className="bg-zinc-300 rounded h-8 w-96"
            onChange={({ target: { value } }) => dispatch({ type: 'NCM', payload: Number(value) })}
            value={state.ncm}
        />
    </div>
    )
}