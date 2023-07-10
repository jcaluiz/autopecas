import Image from "next/image";
import oneImage from '../../../../public/images/number-one.svg';
import twoImage from '../../../../public/images/number-two.svg';
import threeImage from '../../../../public/images/number-three.svg';
import fourImage from '../../../../public/images/number-four.svg';

interface Props {
    selection: string
}

export default function MenuPurchase({selection}: Props) {
    return (
        <div className="flex justify-around py-12">
            <div className={`flex items-center gap-3 ${selection !== 'carrinho' && 'opacity-50'}`}>
                <Image src={oneImage} alt="imagem numero 1" width={30} />
                <p>CARRINHO</p>
            </div>
            <div className={`flex items-center gap-3 ${selection !== 'identificacao' && 'opacity-50'}`}>
                <Image src={twoImage} alt="imagem numero 1" width={30} />
                <p>IDENTIFICAÇÃO</p>
            </div>
            <div className={`flex items-center gap-3 ${selection !== 'cadastro' && 'opacity-50'}`}>
                <Image src={threeImage} alt="imagem numero 1" width={30} />
                <p>CADASTRO</p>
            </div>
            <div className={`flex items-center gap-3 ${selection !== 'pagamento' && 'opacity-50'}`}>
                <Image src={fourImage} alt="imagem numero 1" width={30} />
                <p>PAGAMENTO</p>
            </div>
        </div>
    )
}