'use client';
import { useContext } from "react";
import PersonalData from "./registration-data/PersonalData";
import Security from "./registration-data/Security";
import UpdatePersonal from "./registration-data/update-data/UpdatePersonal";
import { CounterContext } from "@/context/Context";

export default function RegistrationData() {
    const { state } = useContext(CounterContext);
    return (
        <div className="bg-white-body w-screen h-screen flex flex-col gap-10 pl-52 pt-10 font-body relative">
            <PersonalData />
            <Security />
            {
                state.personalDataCustomer && (
                    <UpdatePersonal />
                )
            }
        </div>
    )
}