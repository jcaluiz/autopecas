'use client';
import { CounterContext } from "@/context/Context";
import Requests from "@/services/Requests";
import { FormEvent, useContext, useEffect, useState } from "react";

interface Props {
    setMarca: Function;
}

export default function BrandCheck({setMarca}: Props) {
    const { state, dispatch } = useContext(CounterContext);
    const [brandState, setBrandState] = useState([{ id: 0, brand: '' }]);
    const [willRegister, setWillRegister] = useState(false);

    useEffect(() => {
        const requests = async () => {
            const request = new Requests();
            const allBrand = await request.findAllVehicleBrand();
            setBrandState(allBrand);
        }
        requests();
    }, [willRegister]);

    const handleClick = async (e: FormEvent) => {
        e.preventDefault();
        if (willRegister) {
            const request = new Requests();
            await request.createVehicleBrand(state.brand);
        }
        setWillRegister(!willRegister);
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({ type: 'BRAND', payload: e.target.value })
        setMarca(e.target.value)
    }

    return (
        <div className="flex flex-col">
            {
                !willRegister ? (
                    <>
                        <label htmlFor="brand-product" className="text-sm text-zinc-700 font-bold cursor-pointer">Marca</label>
                        <input
                            type="text"
                            id="brand-product"
                            className="bg-zinc-300 rounded h-8 w-32"
                            onChange={(e) => handleChange(e)}
                            value={state.brand}
                        />
                        <select
                            onChange={({ target: { value } }) => dispatch({ type: 'BRAND', payload: value })}
                        >
                            {
                                brandState.map(({ id, brand }) => (
                                    <>
                                        {
                                            brand && brand.includes(state.brand) && (
                                                <option key={id}>{brand}</option>

                                            )
                                        }
                                    </>
                                ))
                            }
                        </select>
                        <button className="text-sm" onClick={(e) => handleClick(e)}>Cadastrar</button>
                    </>
                ) : (
                    <>
                        <label htmlFor="brand-product" className="text-sm text-zinc-700 font-bold cursor-pointer">Marca</label>
                        <input
                            type="text"
                            id="brand-product"
                            className="bg-zinc-300 rounded h-8 w-32"
                            onChange={({ target: { value } }) => dispatch({ type: 'BRAND', payload: value })}
                            value={state.brand}
                        />
                        <button className="text-sm" onClick={(e) => handleClick(e)}>Finalizar Cadastro</button>
                    </>
                )
            }

        </div>
    )
}