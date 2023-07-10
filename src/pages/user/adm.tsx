'use client';
import Header from "@/components/Header";
import AdmDashboard from "@/components/user/dashboard/AdmDashboard";
import Requests from "@/services/Requests";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Adm() {
    const [isAdm, setIsAdm] = useState(false);
    const [buttonOption, setButtonOption] = useState('PRODUTOS');

    const router = useRouter();

    useEffect(() => {
        const requests = new Requests();
        const getUserType = async () => {
            try {
                const { role } = await requests.getUserType();
                if (role === 'adm') {
                    setIsAdm(true);
                } else {
                    router.push('/')
                }
            } catch (error) {
                router.push('/')
            }
        }
        getUserType();
    });

    const admButtons = ['PRODUTOS', 'FORNECEDORES', 'USUÁRIOS', 'VENDAS'];
    const infoButtons = [
        'Aqui você pode cadastrar e ter acesso a todos os produtos',
        'Aqui você pode cadastrar e ter acesso a todos os fornecedores',
        'Aqui você pode cadastrar e ter acesso a todos os usuários',
        'Aqui você pode cadastrar e ter acesso a todas as vendas',
    ];

    const handleClick = (button: string) => setButtonOption(button);

    return (
        <>
            {
                isAdm && (
                    <>
                        <Header />
                        <main className="flex flex-row h-screen bg-white-body">
                            <nav className="flex flex-col gap-3 bg-green-header-first h-screen text-white">
                                {
                                    admButtons.map((button, i) => (
                                        <>
                                            <button 
                                                key={button} 
                                                onClick={() => handleClick(button)}
                                            >
                                                <p>{button}</p>
                                                <p className="flex flex-wrap w-72 text-center text-sm text-zinc-400">{infoButtons[i]}</p>
                                            </button>
                                            <div className="h-px w-full bg-white" />
                                        </>
                                    ))
                                }
                            </nav>
                            <AdmDashboard option={buttonOption} />
                        </main>
                    </>
                )
            }
        </>
    )
}