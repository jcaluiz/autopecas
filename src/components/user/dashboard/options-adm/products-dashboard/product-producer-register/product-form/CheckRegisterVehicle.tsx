'use client';
import ModelCheck from "./check-register-vehicle/ModelCheck";
import BrandCheck from "./check-register-vehicle/BrandCheck";
import VehicleCheck from "./check-register-vehicle/VehicleCheck";
import { FormEvent, useContext } from "react";
import { CounterContext } from "@/context/Context";
import Requests from "@/services/Requests";

export default function CheckRegisterVehicle() {
    const { state, dispatch } = useContext(CounterContext);
    const handleClick = async (e: FormEvent) => {
        e.preventDefault();
        const requests = new Requests();
        const request = await requests.findOneVehicleModel(state.model);
        console.log(request);
        if (request) {
            dispatch({ type: 'MODELS', payload: request });
            dispatch({ type: 'VEHICLE', payload: '' });
            dispatch({ type: 'BRAND', payload: '' });
            dispatch({ type: 'MODEL', payload: '' });
        }
    }
    console.log(state.models);

    return (
        <div className="flex flex-col gap-3">
            <div className="flex gap-2 justify-center items-center">
                <VehicleCheck />
                <BrandCheck />
                <ModelCheck />
                <button
                    disabled={state.registerModels}
                    onClick={(e) => handleClick(e)}
                    className={
                        `bg-zinc-600 text-white-body w-32 font-bold rounded-lg h-8 ${state.registerModels && 'opacity-50 cursor-default'}`
                    }
                >
                    Associar Modelo
                </button>
            </div>
            {
                state.models && (
                    <div className="flex flex-col gap-3 border-2">
                        <p className="text-center">Aplicação da Peça</p>
                        {
                            state.models.map((e) => (
                                <div key={e.model} className="flex justify-around border-2">
                                    <p>{e.vehicle.vehicle}</p>
                                    <p>{e.vehicleBrand.brand}</p>
                                    <p>{e.model}</p>
                                </div>
                            ))
                        }
                    </div>
                )

            }
        </div>
    )
}