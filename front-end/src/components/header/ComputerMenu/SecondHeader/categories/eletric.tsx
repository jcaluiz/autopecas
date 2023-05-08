import Image from "next/image";
import Sidebar from "@/components/header/Sidebar";

export default function Eletric() {
    const eletric = [
        'Alternador e Fixação do alternador', 'Bateria', 'Buzinas',
        'Cabos de Bateria', 'Fusíveis', 'Interruptores',
        'Motor de Partida', 'Painel de Instrumento e Interruptores',
        'Bico Injetor', 'Bomba de Combustível e Refil', 'Coletor de Admissão',
        'Corpo de Borboleta TBI', 'Flange da Bomba de Combustível',
        'Flauta dos Bicos Injetores', 'Medidores de Combustível',
        'Sensores da Injeção'
    ]
    return (
        <div className="flex flex-col group text-sm">
            <ul className="flex gap-3">
                <li className="hover:text-yellow-200 text-sm gap-1 py-2 hover:bg-white/5 flex items-center justify-center">
                    <Image className="invert" src="/images/car-battery.svg" height={27} width={27} alt="Car Battery" />
                    Elétrica e Injeção
                </li>
            </ul>
            <Sidebar array={eletric}/>
        </div>
    )
}