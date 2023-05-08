import { Search } from "lucide-react";

export default function SearchParts() {
    return (
        <div className="flex">
            <select className="text-gray-500 h-10 rounded-l-md">
                <option value="opcao1">Todas as categorias</option>
                <option value="opcao2">Opção 2</option>
                <option value="opcao3">Opção 3</option>
            </select>
            <input className="border-l" type="text" placeholder="Pesquise sua peça" />
            <button className="bg-gray-400 w-10 flex justify-center items-center rounded-r-md">
                <Search />
            </button>
        </div>
    )
}