'use client';

import { Heart, ShoppingCart, User } from "lucide-react";
import UserOptions from "./userBar/UserOptions";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function UserBar() {
    const router = useRouter();


    const [user, setUser] = useState<{id: string | null, name: string | null}>({id: '', name: ''});

    useEffect(() => {
        setUser({
            id: localStorage.getItem('id'),
            name: localStorage.getItem('user')
        });
    }, []);

    
    return (
        <nav className="flex gap-10 max-sm:gap-3">
            <UserOptions />

            <button>
                <Heart className="hover:text-yellow-200 hover:fill-yellow-200" />
            </button>

            <button onClick={() => router.push(`/buy/${user.id}`)}>
                <ShoppingCart className="hover:text-yellow-200" />
            </button>
        </nav>
    )
}