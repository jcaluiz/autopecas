import CreateProducer from "./interfaces/CreateProducer";
// import IFindOneVehicleModel from "./interfaces/IFindOneVehicleModel";
import * as dotenv from'dotenv';

dotenv.config();

export default class Requests {
    private URL = process.env.URL_REQUEST || 'http://localhost:3001'
    public async getAllUsers() {
        const token = localStorage.getItem('message') || '';
        const response = await fetch(`${this.URL}/user`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: token,
            },
        });
        const users = await response.json();
        return users;
    }

    public async login(email: string, password: string) {
        const response = await fetch(`${this.URL}/user`, {
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
        const response = await fetch(`${this.URL}/products`, {
            method: 'GET',
        });
        const products = await response.json();
        return products;
    }

    public async createNewProduct(product: any) {
        const token = JSON.parse(localStorage.getItem('message') || '');
        const response = await fetch(`${this.URL}/product`, {
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
        const response = await fetch(`${this.URL}/original-code`, {
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
        const response = await fetch(`${this.URL}/original-code?originalCode=${codeOriginal}`, {
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
        const response = await fetch(`${this.URL}/category/find-one?category=${newCategory}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: token.token,
            },
            // body: JSON.stringify({producer: producer}),
        });
        const role = await response.json();
        console.log(role);
        return role;
    }

    public async getByEmail(email: string) {
        const response = await fetch(`${this.URL}/user/email`, {
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
        const response = await fetch(`${this.URL}/user/user-type`, {
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
        console.log(newProducer);
        const response = await fetch(`${this.URL}/producer?producer=${newProducer}`, {
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
        const response = await fetch(`${this.URL}/vehicle-brand/find-brand`, {
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
        const response = await fetch(`${this.URL}/vehicle/find-vehicle`, {
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
        const response = await fetch(`${this.URL}/vehicle-model?model=${model}`, {
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
        const response = await fetch(`${this.URL}/producer`, {
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
        const response = await fetch(`${this.URL}/vehicle/all-vehicle`, {
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
        const response = await fetch(`${this.URL}/vehicle-brand/all-brand`, {
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
        const response = await fetch(`${this.URL}/vehicle-model/all-model`, {
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
        const response = await fetch(`${this.URL}/vehicle`, {
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
        const response = await fetch(`${this.URL}/vehicle-brand`, {
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
        const response = await fetch(`${this.URL}/vehicle-model`, {
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
        const response = await fetch(`${this.URL}/category`, {
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
        const response = await fetch(`${this.URL}/product`, {
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
        const response = await fetch(`${this.URL}/product-original-code`, {
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
            `${this.URL}/product/check-codes?codeOriginalId=${codeOriginalId}&codeProducer=${codeProducer}`, 
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
        const response = await fetch(`${this.URL}/product-application`, {
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
        const response = await fetch(`${this.URL}/product/by-id?productId=${id}`, {
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
        const response = await fetch(`${this.URL}/original-code/by-id?id=${id}`, {
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
        const response = await fetch(`${this.URL}/producer/find-id?id=${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: token.token,
            },
        });
        const role = await response.json();
        return role;
    }
};
