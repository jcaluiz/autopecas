import Sidebar from "@/components/header/Sidebar";
import { Filter as FilterIcon } from "lucide-react";

export default function Filter() {
    const filter = [
        'Caixa do Filtro de Ar Completo', 'Filtros de Ar do Motor',
        'Filtros de Cabine', 'Filtros de Combustível',
        'Filtros de Óleo', 'Filtros para Câmbio Automático',
        'Mangueiras do Filtro de Ar', 'Óleos de Transmissão',
        'Óleos Multiuso e Graxas', 'SAE 40', '0w20',
        '0W30', '0W40', '10W30',
    ];

    return (
        <div className="flex flex-col group text-sm">
            <ul className="flex gap-3">
                <li className="hover:text-yellow-200 text-sm gap-1 py-2 hover:bg-white/5 flex items-center justify-center">
                    <FilterIcon />
                    Filtros e Lubrificantes
                </li>
            </ul>
            <Sidebar array={filter} />
        </div>
    )
}