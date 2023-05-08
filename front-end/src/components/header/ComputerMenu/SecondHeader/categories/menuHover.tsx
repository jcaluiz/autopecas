import { Radio } from "lucide-react";
import Sidebar from "../Sidebar";
import { ReactElement } from "react";

interface Props {
    children: ReactElement
}

export default function MenuHover({children}: Props) {
    return (
        <div className="flex flex-col relative group text-sm">
            <ul className="flex gap-3">
                <li className="hover:text-yellow-200 text-sm gap-1 py-2 hover:bg-white/5 flex items-center justify-center">
                    
                    {children}
                </li>
            </ul>
            <Sidebar />
        </div>
    )
}