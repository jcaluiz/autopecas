import Sidebar from "@/components/header/Sidebar";
import { Radio } from "lucide-react";

export default function Acessories() {
    const acessories = ['Aspiradores de Pó', 'Buzinas', 'Calhas de Chuva',
        'Calotas', 'Capas', 'Capas de Volante', 'Carregadores',
        'Cuidados Pessoais', 'Câmeras de ré', 'Encosto de Cabeça',
        'Inversores de Potência', 'Mini Compressores de Ar',
        'Mini Ventiladores', 'Parasol', 'Sensores de Estacionamento',
        'Suporte Veicular para Celular', 'Tapetes', 'Trava Anti-Furto'
    ];

    return (
        <div className="flex flex-col group">
            <ul className="flex">
                <li className="hover:text-yellow-200 text-sm gap-1 py-2 hover:bg-white/5 flex items-center justify-center">
                    <Radio size={20} />
                    <p className="text-xs">Acessórios</p>
                </li>
            </ul>
            <Sidebar array={acessories} />
        </div>
    )
}