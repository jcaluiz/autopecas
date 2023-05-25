'use client';

import { CounterContext } from "@/context/Context";
import Requests from "@/services/Requests";
import { useRouter } from "next/router";
import { FormEvent, useContext, useState } from "react";

export default function ProducerDashboard() {
    const {state, dispatch} = useContext(CounterContext);

    const [name, setName] = useState('');
    const [roadName, setRoadName] = useState('');
    const [number, setNumber] = useState(0);
    const [neighborhood, setNeighborhood] = useState('');
    const [city, setCity] = useState('');
    const [stateOfBrazil, setStateOfBrazil] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [cnpj, setCnpj] = useState('');

    const router = useRouter();

    const handleClick = async (e: FormEvent) => {
        e.preventDefault();
        const producer = {
            producer: name,
            address: {
                roadName,
                number,
                neighborhood,
                city,
                state: stateOfBrazil,
                zipCode,
            },
            cnpj,
        };
        const requests = new Requests();
        const findOne = await requests.findOneProducer(name);
        if (!findOne[0]) {
            const producerId = await requests.createProducer(producer);
            router.push('/');
            const backpath = () => router.push('/user/adm');
            setTimeout(backpath, 500);
            console.log(producerId);
            return dispatch({type: 'PRODUCERID', payload: producerId.id });
        } else {
            router.push('/');
            const backpath = () => router.push('/user/adm');
            setTimeout(backpath, 500);
            dispatch({type: 'PRODUCERID', payload: findOne[0].id });
        }
    }

    return (
        <div className="flex">
            <form className="flex flex-col mt-10 ml-52 py-20 px-10 bg-white shadow-lg gap-5">
                <h1 className="text-lg text-center">Cadastro de Fabricante</h1>
                <div className="flex flex-col gap-2">
                    <label htmlFor="name-producer" className="text-sm text-zinc-700 font-bold cursor-pointer">Nome do Fabricante</label>
                    <input 
                        id="name-producer"
                        type="text"
                        className="bg-zinc-300 rounded h-8 w-96"
                        onChange={({target: {value}}) => setName(value)}
                        value={name}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="road-name-producer" className="text-sm text-zinc-700 font-bold cursor-pointer">Rua/Avenida/Estrada - Coloque o nome do Logradouro junto com nome</label>
                    <input 
                        id="road-name-producer"
                        type="text"
                        className="bg-zinc-300 rounded h-8 w-96"
                        onChange={({target: {value}}) => setRoadName(value)}
                        value={roadName}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="number-producer" className="text-sm text-zinc-700 font-bold cursor-pointer">Número</label>
                    <input 
                        id="number-producer"
                        type="number"
                        className="bg-zinc-300 rounded h-8 w-96"
                        onChange={({target: {value}}) => setNumber(Number(value))}
                        value={number}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="neighborhood-producer" className="text-sm text-zinc-700 font-bold cursor-pointer">Bairro</label>
                    <input 
                        id="neighborhood-producer"
                        type="text"
                        className="bg-zinc-300 rounded h-8 w-96"
                        onChange={({target: {value}}) => setNeighborhood(value)}
                        value={neighborhood}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="city-producer" className="text-sm text-zinc-700 font-bold cursor-pointer">Cidade</label>
                    <input 
                        id="city-producer"
                        type="text"
                        className="bg-zinc-300 rounded h-8 w-96"
                        onChange={({target: {value}}) => setCity(value)}
                        value={city}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="state-producer" className="text-sm text-zinc-700 font-bold cursor-pointer">Estado</label>
                    <input 
                        id="state-producer"
                        type="text"
                        className="bg-zinc-300 rounded h-8 w-96"
                        onChange={({target: {value}}) => setStateOfBrazil(value)}
                        value={stateOfBrazil}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="zip-code-producer" className="text-sm text-zinc-700 font-bold cursor-pointer">CEP</label>
                    <input 
                        id="zip-code-producer"
                        type="text"
                        className="bg-zinc-300 rounded h-8 w-96"
                        onChange={({target: {value}}) => setZipCode(value)}
                        value={zipCode}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="cnpj-producer" className="text-sm text-zinc-700 font-bold cursor-pointer">CNPJ</label>
                    <input 
                        id="cnpj-producer"
                        type="text"
                        className="bg-zinc-300 rounded h-8 w-96"
                        onChange={({target: {value}}) => setCnpj(value)}
                        value={cnpj}
                    />
                </div>
                <button onClick={(e) => handleClick(e)}>Finalizar Cadastro</button>
            </form>
        </div>
    )
}