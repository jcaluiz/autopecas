'use client';
import { CounterContext } from "@/context/Context";
import Requests from "@/services/Requests";
import { FormEvent, useContext, useEffect, useState } from "react";

interface Props {
    setVeiculo: Function
}

export default function VehicleCheck({setVeiculo}: Props) {
    const { state, dispatch } = useContext(CounterContext);
    const [vehicleState, setVehicleState] = useState([{id: 0, vehicle: ''}]);
    const [willRegister, setWillRegister] = useState(false);

    useEffect(() => {
        const requests = async () => {
            const request = new Requests();
            const allVehicle = await request.findAllVehicle();
            setVehicleState( allVehicle);
        }
        requests();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [willRegister]);

    const handleClick = async (e: FormEvent) => {
        e.preventDefault();
        if (willRegister) {
            const request = new Requests();
            await request.createVehicle(state.vehicle);
        }
        setWillRegister(!willRegister);
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({ type: 'VEHICLE', payload: e.target.value })
        setVeiculo(e.target.value)
    }

    return (
        <div className="flex flex-col">
            {
                !willRegister ? (
                    <>
                        <label htmlFor="vehicle-product" className="text-sm text-zinc-700 font-bold cursor-pointer">Tipo de Veículo</label>
                        <input
                            type="text"
                            id="vehicle-product"
                            className="bg-zinc-300 rounded h-8 w-32"
                            // onChange={({ target: { value } }) => dispatch({ type: 'VEHICLE', payload: value })}
                            onChange={(e) => handleChange(e)}
                            value={state.vehicle}
                        />
                        <select
                            onChange={({ target: { value } }) => dispatch({ type: 'VEHICLE', payload: value })}
                        >
                            {
                                vehicleState.map(({ id, vehicle }) => (
                                    <>
                                    {
                                        vehicle && vehicle.toLowerCase().includes(state.vehicle.toLowerCase()) && (
                                            <option key={id}>{vehicle}</option>

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
                        <label htmlFor="vehicle-product" className="text-sm text-zinc-700 font-bold cursor-pointer">Modelo</label>
                        <input
                            type="text"
                            id="vehicle-product"
                            className="bg-zinc-300 rounded h-8 w-32"
                            onChange={({ target: { value } }) => dispatch({ type: 'VEHICLE', payload: value })}
                            value={state.vehicle}
                        />
                        <button className="text-sm" onClick={(e) => handleClick(e)}>Finalizar Cadastro</button>
                    </>
                )
            }

        </div>
    )
}