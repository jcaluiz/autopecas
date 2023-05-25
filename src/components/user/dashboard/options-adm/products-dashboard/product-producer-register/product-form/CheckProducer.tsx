import { CounterContext } from "@/context/Context";
import { useContext } from "react";

interface Props {
    handleClick: Function,
    checkProduct: string,
}

export default function CheckProducer({ handleClick, checkProduct }: Props) {
    const { state, dispatch } = useContext(CounterContext);
    return (
        <div className="flex items-end gap-3">
            <div className="flex flex-col gap-2">
                <label htmlFor="producer-product" className="text-sm text-zinc-700 font-bold cursor-pointer">Fabricante</label>
                <input
                    type="text"
                    id="producer-product"
                    className="bg-zinc-300 rounded h-8 w-96"
                    onChange={({ target: { value } }) => dispatch({ type: 'PRODUCER', payload: value })}
                    value={state.producer}
                />
            </div>
            <>
                {
                    checkProduct === '' && (
                        <button
                            className="bg-zinc-600 text-white-body w-40 font-bold rounded-lg cursor-pointer h-8"
                            onClick={(e) => handleClick(e)}
                        >
                            Checar Fabricante
                        </button>
                    )
                }
                {
                    checkProduct === 'has producer' && (
                        <p>Fabricante Cadastrado</p>
                    )
                }
            </>
        </div>
    )
}