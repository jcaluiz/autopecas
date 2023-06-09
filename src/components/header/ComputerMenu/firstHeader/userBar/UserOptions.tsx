'use client';
import Requests from "@/services/Requests";
import { User } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface Storage {
    token: string;
    role: 'adm' | 'customer' | '';
}

export default function UserOptions() {
    const [user, setUser] = useState('');
    const [userType, setUserType] = useState('');
    
    useEffect(() => {
        // localStorage.setItem('message', '')
        let newMessage: string | null;
        let information: Storage = {token: '', role: ''};
        let storage: string | null = '';
        
        if (typeof localStorage !== 'undefined') {
            newMessage = localStorage.getItem('message');
            information = newMessage ? JSON.parse(newMessage) : {role: ''};
            storage = localStorage.getItem('user');
          }

        if (information && information.role) {
            setUserType(information.role);
        }
        const newUser = storage && JSON.parse(storage);
        setUser(newUser);
    }, []);

    const handleClick = () => {
        if(typeof localStorage !== 'undefined') localStorage.clear()
        setUser('');
    }

    const router = useRouter();

    const goToDashboard = async () => {
        const getUserType: any = {
            'adm': () => router.push('/user/adm'),
            'customer': () => router.push('/user'),
            '': () => router.push('/user/login'),
        };
        try {
            const requests = new Requests();
            const {role} = await requests.getUserType();
            getUserType[role]();
        } catch (error) {
            getUserType['']();
        }
    }

    return (
        <>
            {
                user ? (
                    <div className="flex flex-col gap-1">
                        <button
                            className="flex gap-1 items-center hover:text-yellow-200"
                            onClick={() => goToDashboard()}
                        >
                            <User className="hover:text-yellow-200" />
                            <div>
                                <p className="text-sm">Olá, {user}</p>
                                <p className="text-sm">minha conta</p>
                            </div>

                        </button>

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