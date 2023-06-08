export default interface IProduct {
    id?: number;
    name: string;
    codeOriginalId: number;
    codeProducer: string;
    quantity: number;
    producerId: number;
    description: string;
    model: {
        model: string;
        vehicle: string;
        brand: string;
    }[];
    costPrice: number;
    salePrice: number;
    categoryId: any;
    ncm: number;
    image: string;
}