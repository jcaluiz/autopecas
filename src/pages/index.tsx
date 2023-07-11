'use client';
import Header from '@/components/Header'
import MainHome from '@/components/MainHome'
import ObservationMessage from '@/components/ObservationMessage';
import { CounterContext } from '@/context/Context';
import Requests from '@/services/Requests';
import { useContext, useEffect, useState } from 'react';

export const metadata = {
  title: 'Home - VR Auto Peças',
  description: 'Listen your favorite music',
}

export default function Home() {
  const {dispatch} = useContext(CounterContext);
  const [showObservation, setShowObservation] = useState(true);
    useEffect(() => {
        const requests = new Requests();
        const getAllProducts = async () => {
            const products = await requests.findAllProduct();
            dispatch({type: 'PRODUCTREQUEST', payload: products});
        }
        getAllProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

  return (
    <main className='h-screen w-full bg-white-body flex flex-col relative'>
    {/* // <main> */}
    {showObservation && (
        <ObservationMessage
          setShowObservation={setShowObservation} 
        />
      )}
      <Header />
      <MainHome />
    </main>
  )
}
