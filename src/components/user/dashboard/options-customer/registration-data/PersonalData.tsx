import { CounterContext } from "@/context/Context";
import { ChevronRight } from "lucide-react";
import { useContext } from "react";

export default function PersonalData() {
    const { state, dispatch } = useContext(CounterContext);

    return (
        <div className="flex flex-col gap-3">
            <h3>Dados Pessoais</h3>
            <div className="bg-white w-2/4">
                <div className="flex justify-between">
                    <div className="h-14 flex flex-col justify-around">
                        <p className="text-zinc-400 text-sm">Nome</p>
                        <p>Luiz Alberto</p>
                    </div>
                    {/* <button onClick={() => dispatch({ type: "PERSONALDATACUSTOMER" })}>
                        <ChevronRight />
                    </button> */}
                </div>
                <div className="w-full h-0.5 bg-zinc-100" />
                <div className="flex justify-between">
                    <div className="h-14 flex flex-col justify-around">
                        <p className="text-zinc-400 text-sm">Telefone</p>
                        <p>{"(21) 99188-3501"}</p>
                    </div>
                    {/* <button onClick={() => dispatch({ type: "PERSONALDATACUSTOMER" })}>
                        <ChevronRight />
                    </button> */}
                </div>
                <div className="w-full h-0.5 bg-zinc-100" />
                <div className="flex justify-between">
                    <div className="h-14 flex flex-col justify-around items-start">
                        <p className="text-zinc-400 text-sm">CPF</p>
                        <button>Adicionar o número do seu documento</button>
                    </div>
                    <button>
                        <ChevronRight />
                    </button>
                </div>
                <div className="w-full h-0.5 bg-zinc-100" />
            </div>
        </div>
    )
}