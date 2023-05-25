'use client';
import { CounterContext } from "@/context/Context";
import { useContext } from "react";

export default function ImageProduct() {
    const { state, dispatch } = useContext(CounterContext);

    return (
        <div className="flex flex-col gap-2">
            <label htmlFor="image-product" className="text-sm text-zinc-700 font-bold cursor-pointer">Imagem do Produto</label>
            <input
                type="text"
                id="image-product"
                className="bg-zinc-300 rounded h-8 w-96"
                onChange={({ target: { value } }) => dispatch({ type: 'IMAGE', payload: value })}
                value={state.image}
            />
        </div>
    )
}