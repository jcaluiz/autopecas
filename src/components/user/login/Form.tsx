'use client';
import { CornerDownLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Form() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleClick = (e: any) => {
        e.preventDefault();
        const onlyName = email.match(/[^\d]+/)
        if (onlyName && onlyName[0] !== null) {
            localStorage.setItem("user", JSON.stringify(onlyName[0]));
        }
        router.push('/')
    };

    return (
        <form className="flex flex-col gap-10 bg-white drop-shadow-2xl p-20 rounded relative">
            <Link href="/" className="absolute top-2 left-5 hover:bg-white-body">
                <CornerDownLeft />
                Voltar
            </Link>
            <p className="font-bold text-lg">Digite o seu e-mail, CPF ou CNPJ</p>
            <input
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white-body h-10"
                type="text"
                placeholder="E-mail, CPF ou CNPJ"
            />

            <input
                onChange={(e) => setPassword(e.target.value)}
                className="bg-white-body h-10"
                type="password"
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