import { CornerDownLeft, Truck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function OrderAndTracking() {
    return (
        <div className="flex flex-col gap-1 max-lg:hidden xl:block">
            <button
                className="flex gap-2 text-sm items-center hover:bg-white/5 w-full"
            >
                <Truck /> Pedidos e rastreamento
            </button>
            <button
                className="flex gap-2 text-sm items-center hover:bg-white/5 w-full"
            >
                <Image
                    src="/images/brazil.svg"
                    width={23}
                    height={23}
                    alt="bandeira do Brasil"
                />
                Entrega para o Brasil
            </button>
            <Link
            href="/"
                className="flex gap-2 text-sm items-center hover:bg-white/5 w-full"
            >
                <CornerDownLeft size={15} className="mr-2" />
                Retornar
            </Link>
        </div>
    )
}