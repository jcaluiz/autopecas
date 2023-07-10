import IProductPurchase from "@/Interfaces/IProductPurchase";
import CreateProducer from "./interfaces/CreateProducer";
// import IFindOneVehicleModel from "./interfaces/IFindOneVehicleModel";
import * as dotenv from 'dotenv';
import IProductRequest from "@/Interfaces/IProductRequest";

dotenv.config();

export default class Requests {
    private PROTOCOL = process.env.REACT_APP_API_PROTOCOL || "http";
    private HOST = process.env.REACT_APP_API_HOST || 'localhost:3005';

    public async getAllUsers() {
        const token = JSON.parse(localStorage.getItem('message') || '');
        const response = await fetch(`${this.PROTOCOL}://${this.HOST}/user`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: token.token,
            },
        });
        const users = await response.json();
        return users;
    }

    public async login(email: string, password: string) {
        const response = await fetch(`${this.PROTOCOL}://${this.HOST}/user`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });
        const users = await response.json();
        return users;
    }

    public async getAllProducts() {
        const response = await fetch(`${this.PROTOCOL}://${this.HOST}/products`, {
            method: 'GET',
        });
        const products = await response.json();
        return products;
    }

    public async createNewProduct(product: any) {
        const token = JSON.parse(localStorage.getItem('message') || '');
        const response = await fetch(`${this.PROTOCOL}://${this.HOST}/product`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: token.token,
            },
            body: JSON.stringify({ ...product }),
        });
        const users = await response.json();
        return users;
    }

    public async createCodeOriginal(codeOriginal: string) {
        const token = JSON.parse(localStorage.getItem('message') || '');
        const response = await fetch(`${this.PROTOCOL}://${this.HOST}/original-code`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: token.token,
            },
            body: JSON.stringify({ codeOriginal }),
        });
        const users = await response.json();
        return users;
    }

    public async findOneCodeOriginal(codeOriginal: string) {
        const token = JSON.parse(localStorage.getItem('message') || '');
        const response = await fetch(`${this.PROTOCOL}://${this.HOST}/original-code?originalCode=${codeOriginal}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: token.token,
            },
            // body: JSON.stringify({producer: producer}),
        });
        const role = await response.json();
        return role;
    }

    public async findOneCategory(category: string) {
        const token = JSON.parse(localStorage.getItem('message') || '');
        const newCategory = category.replace(/\s/gm, '-');
        const response = await fetch(`${this.PROTOCOL}://${this.HOST}/category/find-one?category=${newCategory}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: token.token,
            },
            // body: JSON.stringify({producer: producer}),
        });
        const role = await response.json();
        return role;
    }

    public async getByEmail(email: string) {
        const response = await fetch(`${this.PROTOCOL}://${this.HOST}/user/email`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        });
        const users = await response.json();
        return users;
    };

    public async getUserType() {
        const token = JSON.parse(localStorage.getItem('message') || '');
        const response = await fetch(`${this.PROTOCOL}://${this.HOST}/user/user-type`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: token.token,
            },
            body: JSON.stringify({ token: token.token }),
        });
        const role = await response.json();
        return role;
    }

    public async findOneProducer(producer: string) {
        const token = JSON.parse(localStorage.getItem('message') || '');
        const newProducer = producer.replace(/\s/gm, '-');
        const response = await fetch(`${this.PROTOCOL}://${this.HOST}/producer?producer=${newProducer}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: token.token,
            },
            // body: JSON.stringify({producer: producer}),
        });
        const role = await response.json();
        return role;
    }

    public async findOneVehicleBrand(brand: string) {
        const token = JSON.parse(localStorage.getItem('message') || '');
        const response = await fetch(`${this.PROTOCOL}://${this.HOST}/vehicle-brand/find-brand`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: token.token,
            },
            body: JSON.stringify({ brand }),
        });
        const role = await response.json();
        return role;
    }

    public async findOneVehicle(vehicle: string) {
        const token = JSON.parse(localStorage.getItem('message') || '');
        const response = await fetch(`${this.PROTOCOL}://${this.HOST}/vehicle/find-vehicle`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: token.token,
            },
            body: JSON.stringify({ vehicle }),
        });
        const role = await response.json();
        return role;
    }

    public async findOneVehicleModel(model: string) {
        const token = JSON.parse(localStorage.getItem('message') || '');
        const response = await fetch(`${this.PROTOCOL}://${this.HOST}/vehicle-model?model=${model}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: token.token,
            },
            // body: JSON.stringify({model}),
        });
        const role = await response.json();
        return role;
    }

    public async createProducer(producer: CreateProducer) {
        const token = JSON.parse(localStorage.getItem('message') || '');
        const response = await fetch(`${this.PROTOCOL}://${this.HOST}/producer`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: token.token,
            },
            body: JSON.stringify({ ...producer }),
        });
        const role = await response.json();
        return role;
    }

    public async findAllVehicle() {
        const token = JSON.parse(localStorage.getItem('message') || '');
        const response = await fetch(`${this.PROTOCOL}://${this.HOST}/vehicle/all-vehicle`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: token.token,
            },
        });
        const role = await response.json();
        return role;
    }

    public async findAllVehicleBrand() {
        const token = JSON.parse(localStorage.getItem('message') || '');
        const response = await fetch(`${this.PROTOCOL}://${this.HOST}/vehicle-brand/all-brand`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: token.token,
            },
        });
        const role = await response.json();
        return role;
    }

    public async findAllVehicleModel() {
        const token = JSON.parse(localStorage.getItem('message') || '');
        const response = await fetch(`${this.PROTOCOL}://${this.HOST}/vehicle-model/all-model`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: token.token,
            },
        });
        const role = await response.json();
        return role;
    }

    public async createVehicle(vehicle: string) {
        const token = JSON.parse(localStorage.getItem('message') || '');
        const response = await fetch(`${this.PROTOCOL}://${this.HOST}/vehicle`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: token.token,
            },
            body: JSON.stringify({ vehicle }),
        });
        const role = await response.json();
        return role;
    }

    public async createVehicleBrand(brand: string) {
        const token = JSON.parse(localStorage.getItem('message') || '');
        const response = await fetch(`${this.PROTOCOL}://${this.HOST}/vehicle-brand`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: token.token,
            },
            body: JSON.stringify({ brand }),
        });
        const role = await response.json();
        return role;
    }

    public async createVehicleModel(model: string, vehicleBrandId: number, vehicleId: number) {
        const token = JSON.parse(localStorage.getItem('message') || '');
        const response = await fetch(`${this.PROTOCOL}://${this.HOST}/vehicle-model`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: token.token,
            },
            body: JSON.stringify({ model, vehicleBrandId, vehicleId }),
        });
        const role = await response.json();
        return role;
    }

    public async findAllCategories() {
        const token = JSON.parse(localStorage.getItem('message') || '');
        const response = await fetch(`${this.PROTOCOL}://${this.HOST}/category`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: token.token,
            },
        });
        const role = await response.json();
        return role;
    }

    public async findAllProduct() {
        // const token = JSON.parse(localStorage.getItem('message') || '');
        const response = await fetch(`${this.PROTOCOL}://${this.HOST}/product`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                // Authorization: token.token,
            },
        });
        const role = await response.json();
        return role;
    }

    public async createRelationshipProductOriginalCode(
        productId: number,
        originalCodeId: number,
    ) {
        const token = JSON.parse(localStorage.getItem('message') || '');
        const response = await fetch(`${this.PROTOCOL}://${this.HOST}/product-original-code`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: token.token,
            },
            body: JSON.stringify({ productId, originalCodeId }),
        });
        const role = await response.json();
        return role;
    }

    public async checkOriginalAndProducerCode(codeOriginalId: number, codeProducer: string) {
        const token = JSON.parse(localStorage.getItem('message') || '');
        const response = await fetch(
            `${this.PROTOCOL}://${this.HOST}/product/check-codes?codeOriginalId=${codeOriginalId}&codeProducer=${codeProducer}`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: token.token,
                },
            });
        const role = await response.json();
        return role;
    }

    public async createProductApplication(productId: number, vehicleModelId: number) {
        const token = JSON.parse(localStorage.getItem('message') || '');
        const response = await fetch(`${this.PROTOCOL}://${this.HOST}/product-application`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: token.token,
            },
            body: JSON.stringify({ productId, vehicleModelId }),
        });
        const role = await response.json();
        return role;
    }

    public async findProductById(id: number) {
        const token = JSON.parse(localStorage.getItem('message') || '');
        const response = await fetch(`${this.PROTOCOL}://${this.HOST}/product/by-id?productId=${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: token.token,
            },
        });
        const role = await response.json();
        return role;
    }

    public async findOriginalCodeById(id: number) {
        const token = JSON.parse(localStorage.getItem('message') || '');
        const response = await fetch(`${this.PROTOCOL}://${this.HOST}/original-code/by-id?id=${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: token.token,
            },
        });
        const role = await response.json();
        return role;
    }

    public async findProducerById(id: number) {
        const token = JSON.parse(localStorage.getItem('message') || '');
        const response = await fetch(`${this.PROTOCOL}://${this.HOST}/producer/find-id?id=${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: token.token,
            },
        });
        const role = await response.json();
        return role;
    }

    public async postPurchase(
        product: {
            userId: number,
            productId: number,
            quantity: number,
            status: string
        }
    ) {
        const token = JSON.parse(localStorage.getItem('message') || '');
        const response = await fetch(`${this.PROTOCOL}://${this.HOST}/purchase`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: token.token,
            },
            body: JSON.stringify(product),
        });
        const role = await response.json();
        return role;
    }

    public async getAllPurchase() {
        const token = JSON.parse(localStorage.getItem('message') || '');
        const response = await fetch(`${this.PROTOCOL}://${this.HOST}/purchase/all-purchase`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: token.token,
            },
        });
        const role = await response.json();
        return role;
    }

    public async getPurchaseByUser(userId: number) {
        const token = JSON.parse(localStorage.getItem('message') || '');
        const response = await fetch(`${this.PROTOCOL}://${this.HOST}/purchase?userId=${userId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: token.token,
            },
        });
        const role = await response.json();
        return role;
    }

    public async getPurchaseByUserProductId(userId: number, productId: number) {
        const token = JSON.parse(localStorage.getItem('message') || '');
        const routerWithQuery = `find-purchase?userId=${userId}&productId=${productId}`
        const response = await fetch(
            `${this.PROTOCOL}://${this.HOST}/purchase/${routerWithQuery}`,
            {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: token.token,
            },
        });
        const role = await response.json();
        return role;
    }

    public async updatePurchase(id: number, quantity: number) {
        const token = JSON.parse(localStorage.getItem('message') || '');
        const response = await fetch(
            `${this.PROTOCOL}://${this.HOST}/purchase`,
            {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: token.token,
            },
            body: JSON.stringify({id, quantity})
        });
        const role = await response.json();
        return role;
    }

    public async deletePurchase(userId: number, ProductId: number) {
        const token = JSON.parse(localStorage.getItem('message') || '');
        const response = await fetch(
            `${this.PROTOCOL}://${this.HOST}/purchase?productId=${ProductId}&userId=${userId}`,
            {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authorization: token.token,
            },
        });
        const role = await response;
        return role;
    }

    public async deletePurchaseByUserId(userId: number) {
        const token = JSON.parse(localStorage.getItem('message') || '');
        const response = await fetch(
            `${this.PROTOCOL}://${this.HOST}/purchase?userId=${userId}`,
            {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authorization: token.token,
            },
        });
        const role = await response;
        return role;
    }

    public async getUserById(userId: number) {
        const token = JSON.parse(localStorage.getItem('message') || '');
        const routerWithQuery = `find-by-id?id=${userId}`
        const response = await fetch(
            `${this.PROTOCOL}://${this.HOST}/user/${routerWithQuery}`,
            {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: token.token,
            },
        });
        const role = await response.json();
        return role;
    }

    public async updateProduct(product: IProductRequest) {
        const token = JSON.parse(localStorage.getItem('message') || '');
        const {id, name, codeOriginalId, codeProducer, description, quantity, costPrice, salePrice, categoryId, ncm, image} = product;
        const newProduct = {id, name, codeOriginalId, codeProducer, quantity, description, costPrice, salePrice, categoryId, ncm, image}
        const response = await fetch(
            `${this.PROTOCOL}://${this.HOST}/product/update`,
            {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: token.token,
            },
            body: JSON.stringify(newProduct),
        });
        const role = await response.json();
        return role;
    }

    public async deleteProductById(id: number) {
        const token = JSON.parse(localStorage.getItem('message') || '');
        const response = await fetch(
            `${this.PROTOCOL}://${this.HOST}/product/delete?id=${id}`,
            {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authorization: token.token,
            },
        });
        console.log(response);
        const role = await response;
        return role;
    }
};
