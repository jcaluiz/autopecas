'use client';

import { CounterContext } from "@/context/Context";
import Requests from "@/services/Requests";
import { FormEvent, useContext, useState } from "react";
import ProductForm from "./product-producer-register/ProductForm";
import ProducerDashboard from "../ProducerDashboard";

export default function RegistrationProduct() {
    const {state} = useContext(CounterContext);
    const [checkProduct, setCheckProduct] = useState('')

    const handleClickCheckProducer = async (e: FormEvent) => {
        e.preventDefault();
        const requests = new Requests;
        const request = await requests.findOneProducer(state.producer);
        if (request[0] !== undefined) {
            setCheckProduct('has producer');
        } else {
            setCheckProduct('has not producer');
        }
    }

    return (
        <>
            {
                checkProduct !== 'has not producer' ? (
                    <ProductForm handleClick={handleClickCheckProducer} checkProduct={checkProduct}/>
                ) : (
                    <ProducerDashboard />
                )
            }
        </>
    )
}