'use client';
import Header from "@/components/Header";
import MenuPurchase from "@/pages/buy/components/MenuPurchase";
import { ReactElement, ReactNode, useState } from "react";
import PixPayment from "./components/PixPayment";
import BoletoPayment from "./components/BoletoPayment";
import CreditPayment from "./components/CreditPayment";

interface OptionsPayment {
    [key: string]: ReactNode | string;
}

export default function Payment() {
    const [type, setType] = useState<string>('');
    const paymentType: OptionsPayment = {
        pix: <PixPayment />,
        boleto: <BoletoPayment />,
        credito: <CreditPayment />,
    }

    return (
        <>
            <Header />
            <MenuPurchase selection="pagamento" />
            <div>
                <div className="flex gap-16 justify-center">
                    <button 
                        className="border px-10 py-5 font-medium rounded-lg hover:bg-slate-500 hover:text-white-body"
                        onClick={() => type !== 'pix' ? setType('pix') : setType('')}
                    >
                            PIX
                    </button>
                    <button
                        className="border px-10 py-5 font-medium rounded-lg hover:bg-slate-500 hover:text-white-body"
                        onClick={() => type !== 'boleto' ? setType('boleto') : setType('')}
                    >
                        BOLETO
                    </button>
                    <button
                        className="border px-10 py-5 font-medium rounded-lg hover:bg-slate-500 hover:text-white-body"
                        onClick={() => type !== 'credito' ? setType('credito') : setType('')}
                    >
                        CARTÃO DE CRÉDITO
                    </button>
                </div>
                {
                    type !== '' && paymentType[type]
                }
            </div>
        </>
    )
}