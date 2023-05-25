'use client';
import { CounterContext } from "@/context/Context";
import { FormEvent, useContext, useState } from "react";
import CheckRegister from "./product-form/CheckRegisterVehicle";
import CheckRegisterVehicle from "./product-form/CheckRegisterVehicle";
import CheckProducer from "./product-form/CheckProducer";
import ProductName from "./product-form/ProductName";
import OriginalCode from "./product-form/OriginalCode";
import ProducerCode from "./product-form/ProducerCode";
import DescriptionProduct from "./product-form/DescriptionProduct";
import CostPriceProduct from "./product-form/CostPriceProduct";
import CategoryProduct from "./product-form/CategoryProduct";
import NcmProduct from "./product-form/NcmProduct";
import ImageProduct from "./product-form/ImageProduct";
import QuantityProduct from "./product-form/QuantityProduct";
import SalePriceProduct from "./product-form/SalePriceProduct";
import Requests from "@/services/Requests";

interface Props {
    handleClick: Function,
    checkProduct: string,
}

export default function ProductForm({ handleClick, checkProduct }: Props) {
    const { state, dispatch } = useContext(CounterContext);

    const clickRegister = async (e: FormEvent) => {
        e.preventDefault();
        const requests = new Requests();
        const categoryId = await requests.findOneCategory(state.category);
        const product = {
            name: state.name,
            codeOriginalId: state.codeOriginalId,
            codeProducer: state.codProducer,
            quantity: state.quantity,
            producerId: state.producerId,
            description: state.description,
            model: state.models.map(({model, vehicle, vehicleBrand}) => ({
                model,
                vehicle: vehicle.vehicle,
                brand: vehicleBrand.brand,
            })),
            costPrice: state.costPrice,
            salePrice: state.salePrice,
            categoryId: categoryId.id,
            ncm: state.ncm,
            image: state.image,
        }
        // const requests = new Requests();
        await requests.createNewProduct(product);
        console.log(product);
    }

    return (
        <div className="flex font-body">
            <form className="flex flex-col mt-10 ml-20 py-20 px-10 bg-white shadow-lg gap-5">
                <h1 className="text-lg text-center">Cadastro de Produtos</h1>
                <ProductName />
                <OriginalCode />
                <ProducerCode />
                <QuantityProduct />
                <CheckProducer handleClick={handleClick} checkProduct={checkProduct} />
                <DescriptionProduct />
                <CheckRegisterVehicle />
                <CostPriceProduct />
                <SalePriceProduct />
                <CategoryProduct />
                <NcmProduct />
                <ImageProduct />

                <button onClick={(e) => clickRegister(e)}>Finalizar Cadastro</button>
            </form>
        </div>
    )
}