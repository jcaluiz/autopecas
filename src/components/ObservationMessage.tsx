'use client';
import { X } from 'lucide-react';
import React from 'react';

interface Props {
    setShowObservation: Function;
}

const ObservationMessage = ({ setShowObservation }: Props) => {
    const handleClick = () => setShowObservation(false);
    return (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div className="flex p-4 rounded shadow-md relative pt-10 bg-green-header-first/80">
                <button
                    className='absolute top-2 right-2 text-white hover:text-yellow-400'
                    onClick={handleClick}
                >
                    <X />
                </button>
                <div className='flex flex-col items-center gap-10'>
                    <h1 className='text-white flex flex-wrap text-lg font-extrabold'>Observações:</h1>
                    <p className='text-white flex flex-wrap'>
                        O site está em processo de desenvolvimento, ainda não está pronto
                    </p>
                    <p className='text-white flex flex-wrap'>
                        Este site está sendo desenvolvido por Luiz Alberto Carreiro Junior
                    </p>
                    <p className='text-white flex flex-wrap'>
                        Existem dois cabeçalhos e o primeiro está funcionando, exceto os botões de rastreio e o de favoritos
                    </p>
                    <p className='text-white flex flex-wrap'>
                        O segundo menu não está em funcionamento ainda
                    </p>
                    <p className='text-white flex flex-wrap'>
                        É uma aplicação full-stack então, desfrute para ver o que está funcionando
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ObservationMessage;
