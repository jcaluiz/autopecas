'use client';
import Requests from "@/services/Requests";
import { Delete, Edit } from "lucide-react";
import { useEffect, useState } from "react"

export default function UsersDashboard() {
    const [users, setUsers] = useState([]);
    const requests = new Requests();

    useEffect(() => {
        const getUsers = async () => {
            const users = await requests.getAllUsers();
            setUsers(users);
        }
        getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="w-[62rem] overflow-x-scroll whitespace-nowrap font-body flex flex-col items-center gap-1">
        <h1 className="text-lg font-bold pb-10 pt-3">Todos os Usuários</h1>
        {
            users.map((e: any) => (
                <section key={e.id} className="flex text-sm border-2 gap-1 w-full whitespace-nowrap pb-4">
                    <div className="flex flex-col justify-center items-center gap-2">
                        <div className="group relative flex hover:text-yellow-600">
                            <button><Edit /></button>
                            <p className="invisible group-hover:visible absolute left-7">Editar</p>
                        </div>
                        <div className="group relative flex hover:text-red-700">
                            <button><Delete /></button>
                            <p className="invisible group-hover:visible absolute left-7">Excluir</p>
                        </div>
                    </div>
                    <section className="flex">
                        <div className="flex flex-col overflow-x-scroll w-24 items-center border-2">
                            <label htmlFor="name-user" className="text-center">Id</label>
                            <p className="">{e.id}</p>
                        </div>
                        <div className="flex flex-col overflow-x-scroll w-52 border-2">
                            <label htmlFor="name-user" className="text-center">Nome</label>
                            <p className="">{e.username}</p>
                        </div>
                        <div className="flex flex-col items-center overflow-x-scroll border-2 w-32">
                            <label htmlFor="name-user">Tipo de Usuário</label>
                            <p className="">{e.role}</p>
                        </div>
                        <div className="flex flex-col items-center overflow-x-scroll border-2 w-32">
                            <label htmlFor="name-user">Telefone</label>
                            <p className="">{e.phone}</p>
                        </div>
                        <div className="flex flex-col overflow-x-scroll border-2 w-32">
                            <label htmlFor="name-user text-center">Email</label>
                            <p className="">{e.email}</p>
                        </div>
                        <div className="flex flex-col items-center overflow-x-scroll border-2 w-32">
                            <label htmlFor="name-user">Telefone</label>
                            <p className="">{e.phone}</p>
                        </div>
                        <div className="flex flex-col items-center overflow-x-scroll border-2 w-32">
                            <label htmlFor="name-user">Endereço</label>
                            <p className="">{e.address}</p>
                        </div>
                        <div className="flex flex-col items-center overflow-x-scroll border-2 w-32">
                            <label htmlFor="name-user">Bairro</label>
                            <p className="">{e.neighborhood}</p>
                        </div>
                        <div className="flex flex-col items-center overflow-x-scroll border-2 w-32">
                            <label htmlFor="name-user">Cidade</label>
                            <p className="">{e.city}</p>
                        </div>
                        <div className="flex flex-col items-center overflow-x-scroll border-2 w-32">
                            <label htmlFor="name-user">Estado</label>
                            <p className="">{e.state}</p>
                        </div>
                        <div className="flex flex-col items-center overflow-x-scroll border-2 w-32">
                            <label htmlFor="name-user">CPF</label>
                            <p className="">{e.cpf}</p>
                        </div>
                    </section>
                </section>
            ))
        }
    </div>
    )
}