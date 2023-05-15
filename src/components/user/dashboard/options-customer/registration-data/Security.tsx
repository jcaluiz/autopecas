import { ChevronRight } from "lucide-react";

export default function Security() {
    return (
        <div className="flex flex-col gap-3">
            <h3>Segurança</h3>
            <div className="bg-white w-2/4">
                <div className="flex justify-between">
                    <div className="h-14 flex flex-col justify-around items-start">
                        <p className="text-zinc-400 text-sm">E-mail</p>
                        <p>lacjunior129.la@gmail.com</p>
                    </div>
                    <button>
                        <ChevronRight />
                    </button>
                </div>
                <div className="w-full h-0.5 bg-zinc-100" />
                <div className="flex justify-between">
                    <div className="h-14 flex flex-col justify-around items-start">
                        <p className="text-zinc-400 text-sm">Senha</p>
                        <p>******</p>
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