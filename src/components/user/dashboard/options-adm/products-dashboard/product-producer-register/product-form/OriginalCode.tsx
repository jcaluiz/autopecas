'use client';
import { CounterContext } from "@/context/Context";
import Requests from "@/services/Requests";
import { FormEvent, useContext, useState } from "react";

export default function OriginalCode() {
    const { state, dispatch } = useContext(CounterContext);
    const [isRegistered, setIsRegistered] = useState('check');

    const checkCode = async (e: FormEvent) => {
        e.preventDefault();
        const requests = new Requests();
        const request = await requests.findOneCodeOriginal(state.codOriginal);
        if (request) {
            dispatch({type: 'CODEORIGINALID', payload: request.id});
            return setIsRegistered('registered');
        }
        if (isRegistered === 'check') {
            return setIsRegistered('will register');
        }
        if (isRegistered === 'will register') {
            console.log(state.codOriginal);
            const create = await requests.createCodeOriginal(state.codOriginal);
            dispatch({type: 'CODEORIGINALID', payload: create.id});
            return setIsRegistered('registered');
        }
        setIsRegistered('registered');
    }

    return (
        <div className="flex gap-3 items-center">
            <div className="flex flex-col gap-2">
                <label htmlFor="original-product" className="text-sm text-zinc-700 font-bold cursor-pointer">Código Original</label>
                <input
                    type="text"
                    id="original-product"
                    className="bg-zinc-300 rounded h-8 w-96"
                    onChange={({ target: { value } }) => dispatch({ type: 'CODEORIGINAL', payload: value })}
                    value={state.codOriginal}
                />
            </div>
            {
                isRegistered === 'check' && (
                    <button onClick={(e) => checkCode(e)} className="flex mt-5">Checar Código</button>
                ) 
            }
            {
                isRegistered === 'will register' && (
                    <button onClick={(e) => checkCode(e)} className="flex mt-5">Cadastrar Código</button>
                )
            }
            {
                isRegistered === 'registered' && (
                    <p className="flex mt-5">Código Registrado</p>
                )
            }
        </div>
    )
}