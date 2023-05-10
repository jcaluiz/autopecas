import {Abel} from 'next/font/google';

const abel = Abel({
  weight: '400',
  subsets: ['latin'],
  display: 'swap'
})

export default function IntroductionText() {
    return (
        <div className='max-lg:w-80 lg:w-1/2 flex flex-col gap-20 items-center pt-10 lg:pl-20'>
          <h1 className={`${abel.className} text-5xl text-center`}>Peças de qualidade para um desempenho sem igual.</h1>
          <p className={`${abel.className} flex flex-wrap text-center`}>
            Além disso, investir em autopeças de qualidade também pode
            ajudar a prolongar a vida útil do seu veículo, reduzindo os
            custos com manutenção e reparos. Por isso, na hora de escolher
            as peças para o seu automóvel, não abra mão da qualidade.
            Invista em peças de confiança e tenha a tranquilidade de saber
            que seu veículo estará sempre em boas mãos.
          </p>
          <button className='bg-blue-button text-white px-6 py-3 rounded w-52 hover:bg-blue-button/80'>
            Veja mais
          </button>
        </div>
    )
}