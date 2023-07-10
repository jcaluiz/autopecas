'use client';
import { ReactNode, useState } from "react";
import ProductsDashboard from "./options-adm/ProductsDashboard";
import SuppliersDashboard from "./options-adm/SuppliersDashboard";
import UsersDashboard from "./options-adm/UsersDashboard";
import SalesDashboard from "./options-adm/SalesDashboard";

interface OptionsAdm {
    [key: string]: ReactNode | string;
}

interface Props {
    option: string,
}

export default function AdmDashboard({option}: Props) {
    const optionsAdm: OptionsAdm = {
        'PRODUTOS': <ProductsDashboard />,
        'FORNECEDORES': <SuppliersDashboard />,
        'USUÁRIOS': <UsersDashboard />,
        'VENDAS': <SalesDashboard />
    }

    return (
        <section className="h-screen">
            {
                optionsAdm && (
                    optionsAdm[option]
                )
            }
        </section>
    )
}