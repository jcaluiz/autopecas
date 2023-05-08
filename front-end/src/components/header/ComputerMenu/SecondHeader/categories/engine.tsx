import Sidebar from "@/components/header/Sidebar";
import { Radio } from "lucide-react";
import Image from "next/image";

export default function Engine() {
    const engine = [
        'Antichama e Suspiro de óleo', 'Bloco do Motor', 'Bomba de Óleo',
        'Bronzinas de Biela', 'Bronzinas de Fixo', 'Carburadores',
        'Carter de Óleo do Motor', 'Correias', 'Correias Diversas',
        'Polias e Tencionadores', 'Kit da Correia Dentada',
        'Correias Dentadas', 'Coxim de Fixação da Caixa',
        'Coxim de Fixação do Motor', 'Eixo de Manivela Virabrequim',
        'Interruptores', 'Juntas e Retentores', 'Junta do Cabeçote',
        'Junta da Tampa dos Tuchos', 'Juntas dos Coletores',
        'Jogo de Juntas do Motor', 'Retentores e Vedadores do Motor',
        'Junta do Cárter de Óleo', 'Junta da Bomba de Óleo',
        'Junta Carcaça da Válvula', 'Motor Parcial', 'Pescador de Óleo',
        'Pistões do Motor', 'Sensores', 'Tampa de Óleo do Motor',
        'Tampão do Bloco do Motor', 'Vareta de Óleo',
    ];

    return (
        <div className="flex flex-col group text-sm">
            <ul className="flex gap-3">
                <li className="hover:text-yellow-200 text-sm gap-1 py-2 hover:bg-white/5 flex items-center justify-center">
                    <Image className="invert" src="/images/engine.svg" height={27} width={27} alt="Engine" />
                    Motores e Partes
                </li>
            </ul>
            <Sidebar array={engine} />
        </div>
    )
}