'use client';
import { Delete, Edit } from "lucide-react";

interface Props {
    sale: {
        id: number;
        idProductPurchase: {
            codeProducer: string;
            id: number;
            image: string;
            name: string;
            ncm: string;
            salePrice: string;
        };
        idUserPurchase: {
            id: number;
            address: string;
            city: string;
            neighborhood: string;
            phone: string;
            state: string;
            username: string;
        };
        productId: number;
        quantity: number;
        status: string;
        userId: number;
    };
    allSales: {
        id: number;
        idProductPurchase: {
            codeProducer: string;
            id: number;
            image: string;
            name: string;
            ncm: string;
            salePrice: string;
        };
        idUserPurchase: {
            id: number;
            address: string;
            city: string;
            neighborhood: string;
            phone: string;
            state: string;
            username: string;
        };
        productId: number;
        quantity: number;
        status: string;
        userId: number;
    }[];
    index: number;
}

export default function AllSales({ sale, allSales, index }: Props) {
    const products = allSales
        .filter(({ userId, status }) => sale.userId === userId && status === 'carrinho');

    const newProduct: any[] = [];

    const usersId: number[] = [];
    allSales.forEach((e, i) => {
        if (!(e.idUserPurchase.id in usersId)) {
            const object = {
                products: allSales.filter((f) => e.userId === f.userId).map((f) => ({
                    product: f.idProductPurchase,
                    quantity: f.quantity,
                })),
                user: e.idUserPurchase,
                // quantity: e.quantity,
                status: e.status,
                total: allSales.filter((f) => e.userId === f.userId).reduce((acc, curr) => {
                    const price = acc + (Number(curr.idProductPurchase.salePrice) * curr.quantity);
                    return price;
                }, 0),
            }
            newProduct.push(object);
        }
        usersId.push(e.idUserPurchase.id);
    });

    console.log(newProduct);

    return (
        <>
        
        {
            newProduct[index] && (
                <section key={sale.id} className="overflow-x-scroll w-full flex flex-col pb-5 mb-12 bg-zinc-200/90">

                    <section className="flex text-sm border-2 gap-5 w-full whitespace-nowrap">
                        <div className="flex flex-col justify-center items-center gap-2">
                            <div className="group relative flex hover:text-yellow-600">
                                <button><Edit /></button>
                                <p className="invisible group-hover:visible absolute left-7">Editar</p>
                            </div>
                            <div className="group relative flex hover:text-red-700">
                                <button><Delete /></button>
                                <p className="invisible group-hover:visible absolute left-7">Excluir</p>
                            </div>
                        </div>
                        <div className="flex flex-col border-slate-950">
                            <section className="flex flex-col bg-slate-500 text-white-body text-sm">
                                <h1 className="text-xl pl-80">Informações do Comprador</h1>
                                <div className="flex">
                                    <div className="flex flex-col overflow-x-scroll w-24 items-center border-2">
                                        <label htmlFor="name-user" className="text-center">Id</label>
                                        <p className="">{sale.idUserPurchase.id}</p>
                                    </div>
                                    <div className="flex flex-col overflow-x-scroll w-52 border-2">
                                        <label htmlFor="name-user" className="text-center">Nome</label>
                                        <p className="">{sale.idUserPurchase.username}</p>
                                    </div>
                                    <div className="flex flex-col items-center overflow-x-scroll border-2 w-32">
                                        <label htmlFor="name-user">Telefone</label>
                                        <p className="">{sale.idUserPurchase.phone}</p>
                                    </div>
                                    <div className="flex flex-col overflow-x-scroll border-2 w-32">
                                        <label htmlFor="name-user">Endereço</label>
                                        <p className="">{sale.idUserPurchase.address}</p>
                                    </div>
                                    <div className="flex flex-col items-center overflow-x-scroll border-2 w-32">
                                        <label htmlFor="name-user">Bairro</label>
                                        <p className="">{sale.idUserPurchase.neighborhood}</p>
                                    </div>
                                    <div className="flex flex-col items-center overflow-x-scroll border-2 w-32">
                                        <label htmlFor="name-user">Cidade</label>
                                        <p className="">{sale.idUserPurchase.city}</p>
                                    </div>
                                    <div className="flex flex-col items-center overflow-x-scroll border-2 w-32">
                                        <label htmlFor="name-user">Estado</label>
                                        <p className="">{sale.idUserPurchase.state}</p>
                                    </div>
                                </div>
                            </section>
                            <section className="flex flex-col bg-slate-700 text-white-body text-xs">
                                <h1 className="text-xl pl-96">Compra no Carrinho</h1>
                                {
                                    newProduct.filter((e) => e.user.id === sale.idProductPurchase.id).map((e) => (
                                        e.products.map((f: any, i: number) => (
                                            <div className="flex overflow-x-scroll" key={`${e.id}${i}`}>
                                                <div className="flex flex-col overflow-x-scroll w-24 items-center border-2">
                                                    <label htmlFor="name-user" className="text-center">Id</label>
                                                    <p className="">{f.product.id}</p>
                                                </div>
                                                <div className="flex flex-col overflow-x-scroll w-52 border-2">
                                                    <label htmlFor="name-user" className="text-center">Nome</label>
                                                    <p className="">{f.product.name}</p>
                                                </div>
                                                <div className="flex flex-col overflow-x-scroll w-52 border-2">
                                                    <label htmlFor="name-user" className="text-center">Código do Fabricante</label>
                                                    <p className="">{f.product.codeProducer}</p>
                                                </div>
                                                <div className="flex flex-col overflow-x-scroll w-52 border-2">
                                                    <label htmlFor="name-user" className="text-center">Quantidade</label>
                                                    <p className="">{f.quantity}</p>
                                                </div>
                                                <div className="flex flex-col overflow-x-scroll w-52 border-2">
                                                    <label htmlFor="name-user" className="text-center">Preço</label>
                                                    <p className="">{Number(f.product.salePrice).toFixed(2).replace(/\./, ',')}</p>
                                                </div>
                                                <div className="flex flex-col overflow-x-scroll w-52 border-2">
                                                    <label htmlFor="name-user" className="text-center">Total</label>
                                                    <p className="">{(Number(f.quantity) * Number(f.product.salePrice)).toFixed(2).replace(/\./, ',')}</p>
                                                </div>
                                                <div className="flex flex-col overflow-x-scroll w-52 border-2">
                                                    <label htmlFor="name-user" className="text-center">NCM</label>
                                                    <p className="">{f.product.ncm}</p>
                                                </div>
                                                <div className="flex flex-col overflow-x-scroll w-52 border-2">
                                                    <label htmlFor="name-user" className="text-center">Status</label>
                                                    <p className="">{e.status}</p>
                                                </div>
                                            </div>
                                        ))
                                    ))
                                }
                            </section>
                        </div>
                    </section>
                        <p className="pt-5 font-lg text-xl">{`Status: ${newProduct[index].status}`}</p>
                        <p className="pt-5 font-semibold text-xl">{`Total: ${newProduct[index].total.toFixed(2).replace(/\./, ',')}`}</p>
                </section>
            )
        }
        </>
    )
}