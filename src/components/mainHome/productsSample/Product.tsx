import { CreditCard } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/router";

interface Props {
    id: number;
    name: string;
    salePrice: string;
    image: string;
}

export default function Product({id, name, salePrice, image}: Props) {
    const reais = salePrice.match(/^\d+/)?.[0];
    const centavos = salePrice.match(/\d+$/)?.[0];

    const router = useRouter();

    return (
        <div className="bg-white-product group shadow-lg z-10 shadow-black/30 rounded w-72 h-96 flex flex-col p-5 justify-between relative">
            <Image
                src={image}
                width={200}
                height={200}
                alt="Imagem de peça"
            />
            <p className="text-center">{name}</p>
            <div className="flex gap-1 pt-3 w-full pl-8 text-gray">
                <p className="flex items-center">R$ </p>
                <p className="text-green-header-first text-3xl font-thin">{`${reais}`}</p>
                <p className="text-green-header-first font-thin">{`,${centavos}`}</p>
            </div>
            <div className="flex items-center gap-1 text-xs pl-6 pt-4 font-thin text-slate-600">
                <CreditCard />
                <p>{`1x R$ ${reais},${centavos} no cartão`}</p>
            </div>
            <button
                onClick={() => router.push(`/products/${id}`)}
                className="bg-green-header-first text-white w-32 py-3 rounded absolute top-44 left-20 invisible group-hover:visible"
            >
                COMPRAR
            </button>
        </div>
    )
}