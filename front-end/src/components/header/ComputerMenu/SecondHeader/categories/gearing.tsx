import Sidebar from "@/components/header/Sidebar";
import { Radio } from "lucide-react";
import Image from "next/image";

export default function Gearing() {
    const gearing = [
        'Cabo de Embreagem',
        'Cilindro, Atuador Hidráulico e Colar',
        'Guia e Garfo de Embreagem',
        'Kit de Embreagem',
        'Retentor e Vedador de Embreagem',
    ];

    return (
        <div className="flex flex-col group text-sm">
            <ul className="flex gap-3">
                <li className="hover:text-yellow-200 pl-5 text-sm gap-1 py-2 hover:bg-white/5 flex items-center justify-center">
                    <Image className="invert" src="/images/gearing.svg" height={27} width={27} alt="Gearing" />
                    Embreagem
                </li>
            </ul>
            <Sidebar array={gearing} />
        </div>
    )
}