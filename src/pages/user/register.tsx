import { User } from "lucide-react";
import Link from "next/link";

export default function Register() {
    return (
        <main className="bg-white-body font-body flex flex-col justify-center items-center h-screen">
            <form className="drop-shadow-2xl p-20 flex flex-col items-center justify-center gap-10 bg-white ">
                <div className="flex gap-1">
                    <User />
                    <p className="text-2xl">
                        Cadastro pessoa fisica
                    </p>
                </div>
                <div className="flex flex-col text-black/80">
                    <label className="text-xs" htmlFor="name">* Nome</label>
                    <input id="name" className="bg-white-body h-10 w-80" type="text" placeholder="Nome" />
                </div>
                <div className="flex flex-col text-black/80">
                    <label className="text-xs" htmlFor="phone">* Telefone ou Celular</label>
                    <input id="phone" className="bg-white-body h-10 w-80" type="text" placeholder="Telefone ou Celular, somente número" />
                </div>
                <div className="flex flex-col text-black/80">
                    <label className="text-xs" htmlFor="email">* Email</label>
                    <input id="email" className="bg-white-body h-10 w-80" type="email" placeholder="E-mail" />
                </div>
                <div className="flex gap-4">
                    <input id="checkbox" type="checkbox" />
                    <label htmlFor="checkbox" className="flex flex-wrap w-96 hover:cursor-pointer">Aceito os Termos e condições e autorizo o uso de meus
                        dados de acordo com a Política de Privacidade
                    </label>
                </div>
                <div className="flex justify-between w-full gap-5">
                    <Link className="flex justify-center items-center border-solid border-2 text-green-header-first border-green-header-first h-10 w-52 text-xl font-light" href="/user/login">
                        Voltar
                    </Link>
                    <button className="bg-green-header-first h-10 text-white w-52 text-xl font-light">Finalizar</button>
                </div>
            </form>
            <div className="flex gap-2 p-5">
                <p>Já possui cadastro?</p>
                <Link href="/user/login" className="text-green-header-first hover:underline">
                    Entrar
                </Link>
            </div>
        </main>
    )
}