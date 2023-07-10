'use client';
import Requests from "@/services/Requests"
import { Delete, Edit } from "lucide-react";
import { useEffect, useState } from "react";
import AllSales from "./sales-dashboard/AllSales";

export default function SalesDashboard() {
    const requests = new Requests();
    const [purchases, setPurchases] = useState([]);

    useEffect(() => {
        const getPurchase = async () => {
            const newPurchases = await requests.getAllPurchase();
            setPurchases(newPurchases);
        }
        getPurchase();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    console.log(purchases)

    return (
        <div className="w-[62rem] overflow-x-scroll whitespace-nowrap font-body flex flex-col items-center gap-1">
        <h1 className="text-lg font-bold pb-10 pt-3">Todas as Vendas</h1>
        {
            purchases.map((e: any, i: number) => (
                <AllSales sale={e} allSales={purchases} key={e.id} index={i} />
            ))
        }
    </div>
    )
}