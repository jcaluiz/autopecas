'use client';
import IProductRequest from "@/Interfaces/IProductRequest"
import Requests from "@/services/Requests";
import { Delete, Edit } from "lucide-react";
import { useEffect, useState } from "react";

interface Props {
    product: IProductRequest;
}

export default function ProductsOfAllProducts({ product}: Props) {
    const [edit, setEdit] = useState(false);
    const [productEdit, setProductEdit] = useState<IProductRequest>(product);
    const requests = new Requests();

    const handleClickEdit = async () => {
        setEdit(!edit);
        if (edit) {
            await requests.updateProduct(productEdit);
        }
    }

    const handleClickDelete = async () => {
        await requests.deleteProductById(Number(product.id));
    }

    const handleChange = (property: string, value: string) => {
        const updateProduct: any = {...productEdit};
        updateProduct[property] = value;
        if (property === 'costPrice') updateProduct.salePrice = Number(value) * 1.3;
        setProductEdit(updateProduct);
    }

    console.log(product);

    return (
        <>
            {edit && <p className="text-green-800">{`Editando o produto com o id ${product.id}`}</p>}
            <section key={product.id} className="flex text-sm border-2 gap-1 w-full whitespace-nowrap pb-4">
                <div className="flex flex-col justify-center items-center gap-2">
                    <div className="group relative flex hover:text-yellow-600">
                        <button onClick={() => handleClickEdit()}><Edit /></button>
                        <p className="invisible group-hover:visible absolute left-7">Editar</p>
                    </div>
                    <div className="group relative flex hover:text-red-700">
                        <button onClick={() => handleClickDelete()}><Delete /></button>
                        <p className="invisible group-hover:visible absolute left-7">Excluir</p>
                    </div>
                </div>
        {
            // !edit ? (
                <section className="flex">
                    <div className="flex flex-col overflow-x-scroll w-24 items-center border-2">
                        <label htmlFor="name-product" className="text-center">Id</label>
                        <p className="">{product.id}</p>
                    </div>
                    <div className="flex flex-col overflow-x-scroll w-52 border-2">
                        <label htmlFor="name-product" className="text-center">Produto</label>
                        {
                            !edit ? <p className="">{productEdit.name}</p> : (
                                <input 
                                    type="text"
                                    className="text-white-body bg-zinc-400"
                                    onChange={({target: {value}}) => handleChange('name', value)}
                                    value={productEdit.name}
                                />
                            )
                        }
                    </div>
                    <div className="flex flex-col items-center overflow-x-scroll border-2 w-32">
                        <label htmlFor="name-product">Código Original</label>
                        <p className="">{product.idCodeOriginal.codigoOriginal}</p>
                    </div>
                    <div className="flex flex-col items-center overflow-x-scroll border-2 w-32">
                        <label htmlFor="name-product">Código Fabricante</label>
                        <p className="">{product.codeProducer}</p>
                    </div>
                    <div className="flex flex-col items-center overflow-x-scroll border-2 w-24">
                        <label htmlFor="name-product">Quantidade</label>
                        {
                            !edit ? <p className="">{productEdit.quantity}</p> : (
                                <input 
                                    type="number"
                                    className="w-20"
                                    onChange={({target: {value}}) => handleChange('quantity', value)}
                                    value={productEdit.quantity}
                                />
                            )
                        }
                    </div>
                    <div className="flex flex-col items-center overflow-x-scroll border-2 w-20">
                        <label htmlFor="name-product">Custo</label>
                        {
                            !edit ? <p className="">{Number(productEdit.costPrice).toFixed(2)}</p> : (
                                <input 
                                    type="text"
                                    className="w-20"
                                    onChange={({target: {value}}) => handleChange('costPrice', value)}
                                    value={productEdit.costPrice}
                                />
                            )
                        }
                    </div>
                    <div className="flex flex-col items-center overflow-x-scroll border-2 w-20">
                        <label htmlFor="name-product">Venda</label>
                        {
                            !edit ? <p className="">{Number(productEdit.salePrice).toFixed(2)}</p> : (
                                <input 
                                    type="text"
                                    className="w-20"
                                    onChange={({target: {value}}) => handleChange('salePrice', value)}
                                    value={productEdit.salePrice}
                                />
                            )
                        }
                    </div>
                    <div className="flex flex-col overflow-x-scroll border-2 w-20">
                        <label htmlFor="name-product">Fabricante</label>
                        <p className="">{product.idProducer.producer}</p>
                    </div>
                    <div className="flex flex-col items-center overflow-x-scroll border-2 w-20">
                        <label htmlFor="name-product">Categoria</label>
                        <p className="">{product.idCategory.subcategoria}</p>
                    </div>
                    <div className="flex flex-col items-center overflow-x-scroll border-2 w-20">
                        <label htmlFor="name-product">NCM</label>
                        {
                            !edit ? <p className="">{productEdit.ncm}</p> : (
                                <input 
                                        type="text"
                                        onChange={({target: {value}}) => handleChange('ncm', value)}
                                        value={productEdit.ncm}
                                    />
                            )
                        }
                    </div>
                    <div className="flex flex-col overflow-x-scroll border-2 w-40">
                        <label htmlFor="name-product">Descrição</label>
                        {
                            !edit ? <p className="">{productEdit.description}</p> : (
                                <input 
                                        type="text"
                                        onChange={({target: {value}}) => handleChange('description', value)}
                                        value={productEdit.description}
                                    />
                            )
                        }
                    </div>
                    <div className="flex flex-col overflow-x-scroll border-2 w-40">
                        <label htmlFor="name-product">Imagem</label>
                        {
                            !edit ? <p className="">{productEdit.image}</p> : (
                                !edit ? <p className="">{productEdit.image}</p> : (
                                    <input 
                                        type="text"
                                        onChange={({target: {value}}) => handleChange('image', value)}
                                        value={productEdit.image}
                                    />
                                )
                            )
                        }
                    </div>
                </section>
            // ) : (
            //     <p>Editar</p>
            // )
        }
            </section>
        </>
    )
}