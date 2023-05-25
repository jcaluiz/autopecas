'use client';

import { CounterContext } from "@/context/Context";
import Requests from "@/services/Requests";
import { useContext, useEffect, useState } from "react";

export default function CategoryProduct() {
    const { state, dispatch } = useContext(CounterContext);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const requests = new Requests();
        const allCategories = async () => {
            const requestCategories = await requests.findAllCategories();
            setCategories(requestCategories);
        };
        allCategories();
    }, []);

    console.log(state.category);

    return (
        <div className="flex flex-col gap-2">
            <label htmlFor="category-product" className="text-sm text-zinc-700 font-bold cursor-pointer">Categoria</label>
            {/* <input
                type="text"
                id="category-product"
                className="bg-zinc-300 rounded h-8 w-96"
                onChange={({ target: { value } }) => dispatch({ type: 'CATEGORY', payload: value })}
                value={state.category}
            /> */}
            <select
                onChange={({ target: { value } }) => dispatch({ type: 'CATEGORY', payload: value })}
                className="h-10"
            >
                {
                    <>
                        <option></option>
                        {
                            categories.map(({categoria, subcategoria}) => (
                                subcategoria === null ? (
                                    <option key={categoria}>{categoria}</option>
                                ) : (
                                <option key={subcategoria}>{subcategoria}</option>
                                )
                                ))
                        }
                    </>
                }
            </select>
        </div>
    )
}