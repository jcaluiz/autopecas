import { CreditCard } from "lucide-react";
import Image from "next/image";

export default function Product() {
    return (
        <div className="bg-white-product group shadow-lg z-10 shadow-black/30 rounded w-72 h-96 flex flex-col p-5 justify-between relative">
            <Image
                src="https://images.tcdn.com.br/img/img_prod/955400/valvula_retorno_bomba_injetora_moderna_mb_om352_e_366_0000747684_13961_1_25cb57a0baa29572cee05249c8b3b9e7.jpg"
                width={200}
                height={200}
                alt="Imagem de peça"
            />
            <p className="text-center">VALVULA RETORNO BOMBA INJETORA</p>
            <div className="flex gap-1 pt-3 w-full pl-8 text-gray">
                <p className="flex items-center">R$ </p>
                <p className="text-green-header-first text-3xl font-thin">19</p>
                <p className="text-green-header-first font-thin">,99</p>
            </div>
            <div className="flex items-center gap-1 text-xs pl-6 pt-4 font-thin text-slate-600">
                <CreditCard />
                <p>1x R$ 19,99 no cartão</p>
            </div>
            <button 
                className="bg-green-header-first text-white w-32 py-3 rounded absolute top-44 left-20 invisible group-hover:visible"
            >
                COMPRAR
            </button>
        </div>
    )
}