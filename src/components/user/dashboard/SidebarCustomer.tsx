'use client';
import { ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

interface Props {
    handleClick: Function;
}

export default function SidebarCustomer({handleClick}: Props) {
    const sidebarButtons = ['DADOS CADASTRAIS', 'MEUS ENDEREÇOS', 'MEUS PEDIDOS',
        'PROGRAMA AFILIADOS', 'MEUS CARTÕES', 'MEUS TICKETS'
    ];
    const descriptions = ['Edite seus dados cadastrais', 'Gerenciar endereços',
        'Gerenciar pedidos', 'Programa de afiliados VR', 'Gerenciar meus cartões',
        'Gerenciar tickets',
    ];

    const [user, setUser] = useState('');
    useEffect(() => {
        let storage: string | null = ''; 
        if (typeof localStorage !== 'undefined') {
            storage = localStorage.getItem('user');
          }
          
        if (storage) {
            setUser(storage);
        }
    }, []);

    const [clicked, setClicked] = useState(true);

    const clickFunction = (button: string) => {
        // setClicked(!clicked);
        if (clicked) {
            return handleClick(button);
        }
        handleClick('');
    }

    return (
        <>
                <nav className="bg-green-header-first w-full font-body text-white flex flex-col items-center border-t">
                    <div className="bg-green-header-second w-full flex flex-col items-center py-20 mx-20">
                        <p>Meu Painel</p>
                        <p>Olá, {user}</p>
                    </div>
                    {
                        sidebarButtons.map((button, i) => (
                            <div
                                key={button}
                                className="flex w-full items-center border-2 py-3 border-t-green-header-first hover:bg-white/5 hover:text-yellow-200"
                            >
                                <button
                                    onClick={() => clickFunction(button)}
                                    className="py-3 gap-5 flex flex-col items-center justify-between w-full pb-5"
                                >
                                    {button}
                                    <p className="text-sm text-center w-full text-gray-300">{descriptions[i]}</p>
                                </button>
                                <ChevronRight />
                            </div>
                        ))
                    }
                </nav>
            </>
    )
}