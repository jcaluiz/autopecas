'use client';

import { ReactNode, useState } from "react";
import RegistrationProduct from "./products-dashboard/RegistrationProduct";
import AllProducts from "./products-dashboard/AllProduct";

interface OptionsChoice {
    [key: string]: ReactNode | string;
}

export default function ProductsDashboard() {
    const [buttonChoice, setButtonChoise] = useState('Cadastrar');
    const optionsButton = ['Cadastrar', 'Produtos'];

    const optionChoice: OptionsChoice = {
        'Cadastrar': <RegistrationProduct />,
        'Produtos': <AllProducts />,
    }

    return (
        <div className="flex flex-col ml-0.5 w-screen h-screen">
            <nav className="flex bg-green-header-first w-full text-white h-10 gap-5 pl-4">
                {
                    optionsButton.map((button) => (
                        <>
                            <button key={button} onClick={() => setButtonChoise(button)}>
                                {button}
                            </button>
                            <div className="bg-white h-full w-px" />
                        </>
                    ))
                }
            </nav>
            <div className="bg-white-body h-screen">
                {optionChoice[buttonChoice]}
            </div>

        </div>
    )
}