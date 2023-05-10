'use client';
import { ReactNode, useState } from "react";
import SidebarCustomer from "./SidebarCustomer";
import InitiateDashbord from "./options-customer/InitiateDashbord";
import RegistrationData from "./options-customer/RegistrationData";
import Adresses from "./options-customer/Adresses";
import MyRequests from "./options-customer/MyRequests";
import Afiliate from "./options-customer/Afiliate";
import MyCards from "./options-customer/MyCards";
import MyTickets from "./options-customer/MyTickets";

interface OptionsCustomer {
    [key: string]: ReactNode | string;
}

export default function Customer() {
    const [buttonOption, setButtonOption] = useState('DADOS CADASTRAIS');
    const handleClick = (button: string) => setButtonOption(button);

    const optionsCustomer: OptionsCustomer = {
        'DADOS CADASTRAIS': <RegistrationData />,
        'MEUS ENDEREÇOS': <Adresses />,
        'MEUS PEDIDOS': <MyRequests />,
        'PROGRAMA AFILIADOS': <Afiliate />,
        'MEUS CARTÕES': <MyCards />,
        'MEUS TICKETS': <MyTickets />,
    }

    return (
        <main className="flex">
            <SidebarCustomer handleClick={handleClick} />
            {
                buttonOption !== '' ? (
            <div>
                <h1>{optionsCustomer[buttonOption]}</h1>
            </div>

                ) : (
                    <InitiateDashbord />
                )
            }
        </main>
    )
}