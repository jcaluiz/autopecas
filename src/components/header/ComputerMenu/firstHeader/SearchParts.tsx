'use client';
import { CounterContext } from "@/context/Context";
import { Search } from "lucide-react";
import { useContext } from "react";

export default function SearchParts() {
    const {state, dispatch} = useContext(CounterContext);
    return (
        <div className="flex">
            <select className="text-gray-500 h-10 rounded-l-md max-sm:w-32">
                <option value="opcao1">Todas as categorias</option>
                <option value="opcao2">Opção 2</option>
                <option value="opcao3">Opção 3</option>
            </select>
            <input 
                className="border-l max-sm:w-40 text-black pl-3"
                type="text"
                placeholder="Pesquise sua peça"
                onChange={({target: {value}}) => dispatch({type: 'PRODUCTNAMESEARCH', payload: value})}
                value={state.productNameSearch}
            />
            <button className="bg-gray-400 w-10 flex justify-center items-center rounded-r-md">
                <Search />
            </button>
        </div>
    )
}