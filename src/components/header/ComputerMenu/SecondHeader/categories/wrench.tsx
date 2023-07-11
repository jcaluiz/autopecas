import Sidebar from "@/components/header/Sidebar";
import { Radio } from "lucide-react";

export default function Wrench() {
    const wrench = ['Alicates', 'Cabos Para Chupeta de Bateria', 'Caixa de Ferramentas',
        'Cavalete de Apoio', 'Chave Allen', 'Chave Biela', 'Chave Canhão', 'Chave Catraca',
        'Chave Combinada', 'Chave Estrela', 'Chave Fixa de Boca', 'Chave Inglesa',
        'Chave Torx', 'Chave de Corrente', 'Chave de Fenda e Phillips',
        'Chave de Roda', 'Chave de Vela', 'Compressores e Bombas de Ar e Calibradores de Pneus',
        'Cordas para Reboque', 'Escovas de Aço', 'Estetoscópio', 'Estiletes',
        'Extintor Pó ABC', 'Fitas', 'Funis', 'Furadeiras Elétricas e Brocas',
        'Galão para Combustível', 'Injeção Eletrônica e Motor', 'Instrumento para Medidas',
        'Limas', 'Lixadeira e Esmerilhadeira', 'Macaco', 'Martelos', 'Multimetros',
        'Parafusadeiras', 'Pegador Magnético', 'Pontas Montadas', 'Saca Filtros',
        'Serras e Lâminas', 'Soquetes', 'Tesouras', 'Trenas',
    ];

    return (
        <div className="flex flex-col group">
            <ul className="flex gap-3">
                <li className="hover:text-yellow-200 gap-1 py-2 hover:bg-white/5 flex items-center justify-center">
                    <Radio size={20} />
                    <p className="text-xs">Ferramentas</p>
                </li>
            </ul>
            <Sidebar array={wrench} />
        </div>
    )
}