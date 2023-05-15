'use client';
import Header from "@/components/Header";
import Customer from "@/components/user/dashboard/Customer";
import { CounterContext } from "@/context/Context";
import Requests from "@/services/Requests";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";

export default function User() {
    const { state, dispatch } = useContext(CounterContext);
    const [isCustomer, setIsCustomer] = useState(false);

    const router = useRouter();

    useEffect(() => {
        const requests = new Requests();
        const getUserType = async () => {
            try {
                const { role } = await requests.getUserType();
                // requests.getUserType();
                if (role === 'customer') {
                    setIsCustomer(true);
                } else {
                    router.push('/')
                }
            } catch (error) {
                router.push('/')
            }
        }
        getUserType();
    });

    console.log(isCustomer);

    const classEffect = state.personalDataCustomer ? 'bg-black' : '';
    return (
        <>
            {
                isCustomer && (
                    <div className={`${classEffect}`}>
                        <Header />
                        <Customer />
                    </div>
                )
            }
        </>
    )
}