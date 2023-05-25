'use client';
import { CounterContext } from "@/context/Context";
import { useContext } from "react";

export default function DescriptionProduct() {
    const { state, dispatch } = useContext(CounterContext);

    return (
        <div className="flex flex-col gap-2">
            <label htmlFor="description-product" className="text-sm text-zinc-700 font-bold cursor-pointer">Descrição</label>
            <textarea
                rows={10}
                cols={66}
                id="description-product"
                className="bg-zinc-300 rounded h-8 w-96"
                onChange={({ target: { value } }) => dispatch({ type: 'DESCRIPTION', payload: value })}
                value={state.description}
            />
        </div>
    )
}