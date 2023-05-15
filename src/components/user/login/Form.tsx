'use client';
import Requests from "@/services/Requests";
import { CornerDownLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Form() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [hasAccess, setHasAccess] = useState(false);
    const [invalidAccess, setInvalidAccess] = useState('');

    const usersRequests = async () => {
        const requests = new Requests();
        const token = await requests.login(email, password);
        if (token && token.message) {
            localStorage.setItem('message', JSON.stringify(token.message));
            setHasAccess(true);
            setInvalidAccess('');
        } else {
            localStorage.setItem('message', '');
            setInvalidAccess(token.message);
        }
    }

    useEffect(() => {
        const onlyName = email.match(/[^\d]+/)
        if (onlyName && onlyName[0] !== null && hasAccess) {
            localStorage.setItem("user", JSON.stringify(onlyName[0]));
        }
        if (hasAccess) {
            router.push('/');
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [hasAccess]);
    
    const handleClick = async (e: any) => {
        e.preventDefault();
        usersRequests();
    };

    return (
        <form className="flex flex-col gap-10 bg-white drop-shadow-2xl p-20 rounded relative">
            <Link href="/" className="absolute top-2 left-5 hover:bg-white-body">
                <CornerDownLeft />
                Voltar
            </Link>
            <p className="font-bold text-lg">Digite o seu e-mail, CPF ou CNPJ</p>
            {
                invalidAccess !== '' && (
                    <p className="text-md text-center text-zinc-500">{invalidAccess}</p>
                )
            }
            <input
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white-body h-10"
                type="text"
                value={email}
                placeholder="E-mail, CPF ou CNPJ"
            />

            <input
                onChange={(e) => setPassword(e.target.value)}
                className="bg-white-body h-10"
                type="password"
                value={password}
                placeholder="Senha"
            />

            <div className="flex flex-col gap-5 items-center">
                <button
                    onClick={(e) => handleClick(e)}
                    className="bg-green-header-first h-10 text-white w-52 text-xl font-light"
                >
                    Continuar
                </button>
                <Link href="/user/register" className="flex justify-center items-center border-solid border-2 text-green-header-first border-green-header-first h-10 w-52 text-xl font-light">
                    criar conta
                </Link>
            </div>
        </form>
    )
}