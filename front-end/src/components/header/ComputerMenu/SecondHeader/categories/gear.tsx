import Sidebar from "@/components/header/Sidebar";
import Image from "next/image";

export default function Gear() {
    const gear = [
        'Anel e Retentor da Transmissão',
        'Coifas de Vedação',
        'Cruzetas',
        'Diferencial, Coroa e Pinhão',
        'Homocinéticas',
        'Semi Eixo da Transmissão',
        'Trizetas',
        'Tulipas'
    ];

    return (
        <div className="flex flex-col group text-sm">
            <ul className="flex gap-3">
                <li className="hover:text-yellow-200 text-sm gap-1 py-2 hover:bg-white/5 flex items-center justify-center">
                    <Image className="invert" src="/images/gear.svg" height={27} width={27} alt="Gear" />
                    Transmissão
                </li>
            </ul>
            <Sidebar array={gear} />
        </div>
    )
}