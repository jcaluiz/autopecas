'use client';
import Header from "@/components/Header";
import MenuPurchase from "../buy/components/MenuPurchase";
import Link from "next/link";
import { FormEvent, useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { CornerDownLeft } from "lucide-react";
import Requests from "@/services/Requests";
import Form from "@/components/user/login/Form";
import { CounterContext } from "@/context/Context";

export default function Identification() {
    const { state } = useContext(CounterContext);
    const router = useRouter();
    const [handleRouter, setHandleRouter] = useState('');

    const buttonClick = () => {
        const userLocalstorage = localStorage.getItem('message');
        let idInLocalstorage: number = 0;
        if (userLocalstorage) idInLocalstorage = JSON.parse(userLocalstorage).user.id;
        console.log(Number(idInLocalstorage))
        console.log(Number(state.user.id))
        if (state.user.id === '' || Number(idInLocalstorage) !== Number(state.user.id)) {
            setHandleRouter('/');
        } else {
            setHandleRouter(`/register-purchase/${state.user.id}`)
        }
    }

    console.log(handleRouter);

    return (
        <>
            <Header />
            <MenuPurchase selection="identificacao" />
            <div className="flex items-center flex-col gap-3">
                <h2 className="text-2xl">Confirme seu Cadastro</h2>
                <Form 
                    handleRouter={handleRouter}
                    buttonClick={buttonClick}
                />
            </div>
        </>
    )
}