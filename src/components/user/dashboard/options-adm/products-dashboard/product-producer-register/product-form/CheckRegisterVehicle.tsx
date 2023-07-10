'use client';
import ModelCheck from "./check-register-vehicle/ModelCheck";
import BrandCheck from "./check-register-vehicle/BrandCheck";
import VehicleCheck from "./check-register-vehicle/VehicleCheck";
import { FormEvent, useContext, useState } from "react";
import { CounterContext } from "@/context/Context";
import Requests from "@/services/Requests";

interface Props {
    aplicacao: {veiculo: string; marca: string; modelo: string}[];
    setAplicacao: Function;
}

export default function CheckRegisterVehicle({aplicacao, setAplicacao}: Props) {
    const { state, dispatch } = useContext(CounterContext);
    const [veiculo, setVeiculo] = useState('');
    const [marca, setMarca] = useState('');
    const [modelo, setmodelo] = useState('');
    

    const handleClick = async (e: FormEvent) => {
        e.preventDefault();
        const requests = new Requests();
        const request = await requests.findOneVehicleModel(modelo);
        setAplicacao([...aplicacao, {veiculo, marca, modelo}]);
        setVeiculo('')
        setMarca('')
        setmodelo('')


        if (request) {
            dispatch({ type: 'MODELS', payload: request });
            dispatch({ type: 'VEHICLE', payload: '' });
            dispatch({ type: 'BRAND', payload: '' });
            dispatch({ type: 'MODEL', payload: '' });
        }
    }

    return (
        <div className="flex flex-col gap-3">
            <div className="flex gap-2 justify-center items-center">
                <VehicleCheck setVeiculo={setVeiculo} />
                <BrandCheck setMarca={setMarca} />
                <ModelCheck setmodelo={setmodelo}/>
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
                            aplicacao.map((e) => (
                                <div key={e.modelo} className="flex justify-around border-2">
                                    <p>{e.veiculo}</p>
                                    <p>{e.marca}</p>
                                    <p>{e.modelo}</p>
                                </div>
                            ))
                        }
                    </div>
                )

            }
        </div>
    )
}