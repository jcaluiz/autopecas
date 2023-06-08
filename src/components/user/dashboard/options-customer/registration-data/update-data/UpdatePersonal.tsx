import { CounterContext } from "@/context/Context";
import { X } from "lucide-react";
import { useContext } from "react";

export default function UpdatePersonal() {
    const { dispatch } = useContext(CounterContext);

    return (
        <form className="bg-white w-2/4 flex flex-col py-20 px-10 absolute shadow-lg">
            <button
                className="absolute top-2 right-2"
                // onClick={() => dispatch({ type: "PERSONALDATACUSTOMER" })}
            >
                <X />
            </button>
            <h3 className="pb-5 text-center text-lg">Dados Pessoais</h3>
            <div className="py-4 flex flex-col">
                <label htmlFor="name-input" className="text-zinc-400 text-sm">Nome</label>
                <input type="text" id="name-input" className="border-b-2 border-cyan-500 h-10" />
            </div>
            <div className="w-full h-0.5 bg-zinc-100" />
            <div className="py-4 flex flex-col">
                <label htmlFor="phone-input" className="text-zinc-400 text-sm">Telefone</label>
                <input type="text" id="phone-input" className="border-b-2 border-cyan-500 h-10" />
            </div>
            <div className="flex justify-center items-center h-20">
                <button className="bg-green-header-first text-white w-52 h-12 rounded-lg">Alterar Dados</button>
            </div>
        </form>
    )
}