'use client';
import { CounterContext } from "@/context/Context";
import { useContext } from "react";

export default function ProducerCode() {
    const { state, dispatch } = useContext(CounterContext);
    return (
        <div className="flex flex-col gap-2">
            <label htmlFor="producer-product" className="text-sm text-zinc-700 font-bold cursor-pointer">Código Fabricante</label>
            <input
                type="text"
                id="producer-product"
                className="bg-zinc-300 rounded h-8 w-96"
                onChange={({ target: { value } }) => dispatch({ type: 'CODEPRODUCER', payload: value })}
                value={state.codProducer}
            />
        </div>
    )
}