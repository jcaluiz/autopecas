'use client';

import { CounterContext } from "@/context/Context";
import Requests from "@/services/Requests";
import { FormEvent, useContext, useEffect, useState } from "react";

export default function ModelCheck() {
    const { state, dispatch } = useContext(CounterContext);
    // const [registerModels, setRegisterModels] = useState(true);
    const [modelState, setModelState] = useState([
        {
            id: 0,
            model: '',
            vehicleBrandId: 0,
            vehicleId: 0,
        }
    ]);
    const [willRegister, setWillRegister] = useState(false);

    useEffect(() => {
        const requests = async () => {
            const request = new Requests();
            const allModel = await request.findAllVehicleModel();
            setModelState(allModel);
        }
        requests();
    }, [willRegister]);

    const handleClick = async (e: FormEvent) => {
        e.preventDefault();
        if (willRegister) {
            const request = new Requests();
            const vehicle = await request.findOneVehicle(state.vehicle);
            const vehicleBrandId = await request.findOneVehicleBrand(state.brand);
            if (vehicleBrandId && vehicle) {
                await request.createVehicleModel(state.model, vehicleBrandId.id, vehicle.id);
                // dispatch({ type: 'MODELS', payload: models })
            }
        }
        setWillRegister(!willRegister);
    }

    useEffect(() => {
        if (state.vehicle.length > 0 && state.brand.length > 0 && state.model.length > 0) {
            dispatch({ type: 'REGISTERMODELS', payload: false })
        } else {
            dispatch({ type: 'REGISTERMODELS', payload: true })
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state.vehicle, state.brand, state.model]);

    return (
        <div className="flex flex-col">
            {
                !willRegister ? (
                    <>
                        <label htmlFor="model-product" className="text-sm text-zinc-700 font-bold cursor-pointer">Modelo</label>
                        <input
                            type="text"
                            id="model-product"
                            className="bg-zinc-300 rounded h-8 w-32"
                            onChange={({ target: { value } }) => dispatch({ type: 'MODEL', payload: value })}
                            value={state.model}
                        />
                        <select
                            onChange={({ target: { value } }) => dispatch({ type: 'MODEL', payload: value })}
                        >
                            {
                                modelState.map(({ id, model }) => (
                                    <>
                                    {
                                        model && model.includes(state.model) && (
                                            <option 
                                                key={id}
                                            >
                                                {model}
                                            </option>
                                        )
                                    }
                                    </>
                                ))
                            }
                        </select>
                        <button 
                            className="text-sm" 
                            onClick={
                                (e) => handleClick(e)
                            }
                        >
                            Cadastrar
                        </button>
                    </>
                ) : (
                    <>
                        <label htmlFor="model-product" className="text-sm text-zinc-700 font-bold cursor-pointer">Modelo</label>
                        <input
                            type="text"
                            id="model-product"
                            className="bg-zinc-300 rounded h-8 w-32"
                            onChange={({ target: { value } }) => dispatch({ type: 'MODEL', payload: value })}
                            value={state.model}
                        />
                        <button 
                            className="text-sm" 
                            onClick={(e) => handleClick(e)}
                        >
                            Finalizar Cadastro
                        </button>
                    </>
                )
            }
        </div>
    )
}