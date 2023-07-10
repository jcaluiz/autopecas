export default interface IProductRequest {
    id?: number;
    name: string;
    codeOriginalId: number;
    codeProducer: string;
    quantity: number;
    producerId: number;
    description: string;
    costPrice: string;
    salePrice: string;
    categoryId: number;
    idCategory: {category: string, subcategoria: string};
    idCodeOriginal: {codigoOriginal: string};
    idProductApplication: any[];
    ncm: string;
    image: string;
    idProducer: {producer: string};
}