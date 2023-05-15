export default class Requests {
    public async getAllUsers() {
        const token = localStorage.getItem('message') || '';
        console.log(token);
        const response = await fetch(`http://localhost:3001/user`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                // Authorization: token,
            },
        });
        const users = await response.json();
        return users;
    }

    public async login(email: string, password: string) {
        const response = await fetch(`http://localhost:3001/user`, {
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
        const response = await fetch(`http://localhost:3001/products`, {
            method: 'GET',
        });
        const products = await response.json();
        return products;
    }

    public async createNewProduct(products: any) {
        const response = await fetch(`http://localhost:3001/products`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(products),
        });
        const users = await response.json();
        return users;
    }

    public async getByEmail(email: string) {
        const response = await fetch(`http://localhost:3001/user/email`, {
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
        console.log(token.token);
        const response = await fetch(`http://localhost:3001/user/user-type`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: token.token,
            },
            body: JSON.stringify({token: token.token}),
        });
        const role = await response.json();
        return role;
    }
};
