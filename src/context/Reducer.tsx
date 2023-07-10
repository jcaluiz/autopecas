import { ActionType, StateType } from "./Types";

export const reducer = (state: StateType, action: ActionType) => {
    switch (action.type) {
        case "MENUMOBILE":
            return { ...state, clickMenu: !state.clickMenu };
        case "PERSONALDATACUSTOMER":
            return { ...state, personalDataCustomer: !state.personalDataCustomer };
        case "NAME":
            return { ...state, name: action.payload };
        case "CODEORIGINAL":
            return { ...state, codOriginal: action.payload };
        case "CODEORIGINALID":
            return { ...state, codeOriginalId: action.payload };
        case "CODEPRODUCER":
            return { ...state, codProducer: action.payload };
        case "QUANTITY":
            return { ...state, quantity: action.payload };
        case "DESCRIPTION":
            return { ...state, description: action.payload };
        case "PRODUCER":
            return { ...state, producer: action.payload };
        case "PRODUCERID":
            return { ...state, producerId: action.payload };
        case "VEHICLE":
            return { ...state, vehicle: action.payload };
        case "BRAND":
            return { ...state, brand: action.payload };
        case "MODEL":
            return { ...state, model: action.payload };
        // case "MODELS":
        //     return { ...state, models: [...state.models, action.payload] };
        case "COSTPRICE":
            return { ...state, costPrice: action.payload };
        case "SALEPRICE":
            return { ...state, salePrice: action.payload };
        case "CATEGORY":
            return { ...state, category: action.payload };
        case "NCM":
            return { ...state, ncm: action.payload };
        case "IMAGE":
            return { ...state, image: action.payload };
        case "REGISTERMODELS":
            return { ...state, registerModels: action.payload };
        case "PURCHASE":
            return { ...state, purchase: action.payload };
        case "USER":
            return { ...state, user: action.payload };
        case "PRODUCTREQUEST":
            return { ...state, products: action.payload };
        case "PRODUCTNAMESEARCH":
            return { ...state, productNameSearch: action.payload };
        default:
            return state;
    }
};

// export const reducerAction = {
//     name: (state: StateType, payload: string) => {
//         state.name = payload
//     }
// }