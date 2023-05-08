import { Menu } from "lucide-react";
import Sidebar from "../../Sidebar";

export default function SearchByCategory() {
    const departament = ['LUBRIFICANTES', 'ADITIVOS', 'FILTROS', 'SUSPENSÃO',
        'MOTOR', 'SISTEMA DE IGNIÇÃO', 'ABRASIVOS', 'ACESSÓRIOS',
        'ACABAMENTO EXTERNO', 'ACABAMENTO INTERNO', 'CABEÇOTE DO MOTOR',
        'CAIXA DE MARCHA E COMPONENTES DE ENGATE'
    ];
    return (
        <div className="flex flex-col group text-sm pl-4">
            <ul className="flex gap-3">
                <li className="flex items-center">
                    <Menu />
                    <p>Todos os Departamentos</p>
                </li>
            </ul>
            <Sidebar array={departament} />
        </div>
    )
}