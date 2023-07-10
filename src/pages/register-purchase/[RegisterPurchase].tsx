'use client';
import Header from "@/components/Header";
import MenuPurchase from "../buy/components/MenuPurchase";
import Requests from "@/services/Requests";
import { useContext, useEffect, useState } from "react";
import { CounterContext } from "@/context/Context";
import { useRouter } from "next/router";
import Button from "@/components/utilsComponents/Button";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";

export default function RegisterPurchase() {
    const [user, setUser] = useState<{cpf: string, email: string, phone: string, username: string}>({
        cpf: '', email: '', phone: '', username: '',
    });
    const requests = new Requests();
    const {state, dispatch} = useContext(CounterContext);
    const router = useRouter();

    const getUsers = async () => {
        const getUser = await requests.getUserById(Number(state.user.id));
        setUser(getUser);
        let userLocalstorage: string | null = '';
        if (typeof localStorage !== 'undefined') {
            userLocalstorage = localStorage.getItem('message');
          }
          
        let idInLocalstorage;
        if (userLocalstorage) idInLocalstorage = JSON.parse(userLocalstorage).user.id;
        if (state.user.id === '' || Number(idInLocalstorage) !== Number(state.user.id)) router.push('/');
    }

    useEffect(() => {
        getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <Header />
            <MenuPurchase selection="cadastro" />
            <div className="flex flex-col items-center gap-5">
                <h2 className="text-2xl">CONFIRME SUAS INFORMAÇÕES</h2>
                <div className="border flex flex-col gap-3 py-5 px-10">
                    <p>{`Nome: ${user.username}`}</p>
                    <p>{`Email: ${user.email}`}</p>
                    <p>{`CPF: ${user.cpf}`}</p>
                    <p>{`Telefone: ${user.phone}`}</p>
                </div>
                <div className="flex justify-between w-96">
                    <Button 
                        handleClick={() => router.push('/user')}
                        className="flex justify-center items-center gap-2 hover:text-yellow-500"
                    >
                        <ArrowBigLeft />Menu de Cadastro
                    </Button>

                    <Button 
                        handleClick={() => router.push(`payment/${state.user.id}`)}
                        className="flex justify-center items-center gap-2 hover:text-yellow-500"
                    >
                        Continuar <ArrowBigRight />
                    </Button>
                </div>
            </div>
        </>
    )
}