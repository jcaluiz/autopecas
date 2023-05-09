import Sidebar from "@/components/header/Sidebar";
import Image from "next/image";

export default function SteeringWeel() {
    const weel = [
        'Amortecedor de Direção', 'Barra Axial',
        'Barra de Direção', 'Bomba de Direção Hidráulica', 'Caixa de Direção',
        'Coifas da Direção', 'Manga de Direção', 'Mangueiras e tubulações',
        'Amortecedor Dianteiro', 'Amortecedor Traseiro', 'Balanças',
        'Barra Estabilizadora', 'Barra Tensora', 'Batente/Coifa/Coxim/Anel da mola',
        'Bieletas da Suspensão', 'Buchas da Suspensão', 'Cilindro de Freio',
        'Disco de Freio', 'Freio de Mão', 'Mangotes', 'Óleo de Freio',
        'Pastilha Traseira', 'Pastilhas Dianteira', 'Sapata e Lona de Freio'
    ]

    return (
        <div className="flex flex-col group text-sm">
            <ul className="flex gap-3">
                <li className="hover:text-yellow-200 text-sm gap-1 py-2 hover:bg-white/5 flex items-center justify-center">
                    <Image className="invert" src="/images/steering-wheel.svg" height={27} width={27} alt="steering wheel" />
                    Direção, Suspensão e Freios
                </li>
            </ul>
            <Sidebar array={weel}/>
        </div>
    )
}