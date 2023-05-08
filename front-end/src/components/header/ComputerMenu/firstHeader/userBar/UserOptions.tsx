'use client';
import { User } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function UserOptions() {
    const [user, setUser] = useState('');
    useEffect(() => {
        const storage: string | null = localStorage.getItem('user');
        const newUser = storage && JSON.parse(storage);
        setUser(newUser);
    }, []);

    const handleClick = () => {
        localStorage.clear()
        setUser('');
    }

    return (
        <>
            {
                user ? (
                    <div className="flex flex-col gap-1">
                        <Link href="/user" className="flex gap-1 items-center hover:text-yellow-200">
                            <User className="hover:text-yellow-200" />
                            <div>
                                <p className="text-sm">Olá, {user}</p>
                                <p className="text-sm">minha conta</p>
                            </div>

                        </Link>

                        <button
                            onClick={handleClick}
                            className="text-sm hover:text-yellow-200"
                        >
                            Sair
                        </button>

                    </div>

                ) : (
                    <Link href="/user/login" className="flex gap-1 items-center hover:text-yellow-200">
                        <User className="hover:text-yellow-200" />
                    </Link>
                )

            }
        </>
    )
}