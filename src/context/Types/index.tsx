import IProduct from "@/Interfaces/IProduct";
import IProductPurchase from "@/Interfaces/IProductPurchase";
import IProductRequest from "@/Interfaces/IProductRequest";
import IUser from "@/Interfaces/IUser";
import IFindOneVehicleModel from "@/services/interfaces/IFindOneVehicleModel";

type models = {
    vehicleId: number;
    vehicleBrandId: number;
    model: string;
} 

export type StateType = {
    count: number;
    clickMenu: boolean;
    personalDataCustomer: boolean,
    name: string;
    quantity: number;
    codOriginal: string;
    codeOriginalId: number;
    codProducer: string;
    producer: string;
    producerId: number;
    description: string;
    vehicle: string;
    brand: string;
    model: string;
    costPrice: number;
    salePrice: number;
    category: string;
    ncm: number;
    image: string;
    models: IFindOneVehicleModel[];
    registerModels: boolean;
    purchase: IProductPurchase[];
    user: IUser;
    products: IProductRequest[];
    productNameSearch: string;
};

export type ActionType = {
    type: "MENUMOBILE", payload: boolean,
} | {
    type: "PERSONALDATACUSTOMER", payload: boolean,
} | {
    type: "NAME", payload: string,
} | {
    type: "CODEORIGINAL", payload: string,
} | {
    type: "CODEORIGINALID", payload: number,
} | {
    type: "CODEPRODUCER", payload: string,
} | {
    type: "QUANTITY", payload: number,
} | {
    type: "DESCRIPTION", payload: string,
} | {
    type: "PRODUCER", payload: string,
} | {
    type: "PRODUCERID", payload: number,
} | {
    type: "VEHICLE", payload: string,
} | {
    type: "BRAND", payload: string,
} | {
    type: "MODEL", payload: string,
} | {
    type: "MODELS", payload: IFindOneVehicleModel[],
} | {
    type: "COSTPRICE", payload: number,
} | {
    type: "SALEPRICE", payload: number,
} | {
    type: "CATEGORY", payload: string,
} | {
    type: "NCM", payload: number,
} | {
    type: "IMAGE", payload: string,
} | {
    type: "REGISTERMODELS", payload: boolean,
} | {
    type: "PURCHASE", payload: IProductPurchase[],
} | {
    type: "USER", payload: IUser,
} | {
    type: "PRODUCTREQUEST", payload: IProductRequest[],
} | {
    type: "PRODUCTNAMESEARCH", payload: string,
};
