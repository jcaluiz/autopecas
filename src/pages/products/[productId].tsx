'use client';
import Header from "@/components/Header";
import Requests from "@/services/Requests";
import Image from "next/image";
import { useRouter } from "next/router";
import { FormEvent, useContext, useEffect, useState } from "react";
import boletoImage from '../../../public/images/boleto-logo.svg';
import pixImage from '../../../public/images/pix.svg';
import mastercardImage from '../../../public/images/mastercard.svg';
import visaImage from '../../../public/images/visa.svg';
import hipercardImage from '../../../public/images/Hipercard_logo.svg';
import eloImage from '../../../public/images/cartao-elo.svg';
import Button from "@/components/utilsComponents/Button";
import PaymentMethods from "@/components/productPage/PaymentMethods";
import { calcularPrecoPrazo } from "correios-brasil/dist";
import { CounterContext } from "@/context/Context";

export default function ProductPage() {
    const { state, dispatch } = useContext(CounterContext);
    const [product, setProduct] = useState({
        categoryId: 0,
        codeOriginalId: 0,
        codeProducer: "BR000395",
        costPrice: "7.80",
        description: "",
        id: 0,
        image: "",
        name: "",
        ncm: "",
        producerId: 0,
        quantity: 0,
        salePrice: "",
    });
    const [original, setOriginal] = useState('');
    const [producer, setProducer] = useState('');
    const [cep, setCep] = useState('');
    const router = useRouter();
    const [qty, setQty] = useState(0);

    const productId = router.query.productId;
    const requests = new Requests();

    useEffect(() => {
        const findProduct = async () => {
            const findProductById = await requests.findProductById(Number(productId));
            const originalCode = await requests.findOriginalCodeById(findProductById.codeOriginalId);
            const producerById = await requests.findProducerById(findProductById.producerId);
            // console.log(findProductById);
            setOriginal(originalCode.codigoOriginal);
            setProducer(producerById.producer);
            setProduct(findProductById);
        };
        findProduct();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [productId])

    const [frete, setFrete] = useState<any[]>();

    let args = {
        // Não se preocupe com a formatação dos valores de entrada do cep, qualquer uma será válida (ex: 21770-200, 21770 200, 21asa!770@###200 e etc),
        sCepOrigem: '25931774',
        sCepDestino: cep,
        nVlPeso: '1',
        nCdFormato: '1',
        nVlComprimento: '20',
        nVlAltura: '20',
        nVlLargura: '20',
        nCdServico: ['04014', '04510'], //Array com os códigos de serviço
        nVlDiametro: '0',
    };

    const calculoFrete = async (e: FormEvent) => {
        e.preventDefault();
        await calcularPrecoPrazo(args).then((response) => {
            setFrete(response);
        });
    }

    const handleClickPurchase = async () => {
        let userId: number | string = 0;
        if (typeof localStorage !== 'undefined') {
            userId = Number(localStorage.getItem('id'));
          }
          
        const checkPurchase = await requests.getPurchaseByUserProductId(userId, Number(productId));
        const purchase = {
            userId,
            productId: Number(productId),
            quantity: qty,
            status: 'carrinho',
        }
        if (!checkPurchase) return requests.postPurchase(purchase);
        await requests.updatePurchase(checkPurchase.id, qty);
    }
    console.log(state.purchase);
    return (
        <>
            <Header />
            <main className="flex flex-col border-2 h-screen bg-white-body font-body">
                <section className="flex justify-between mx-28 pt-10 mt-10 bg-white">
                    <section className="pl-24">
                        <Image
                            src={product.image}
                            alt={`Imagem da peça ${product.name}`}
                            width={450} height={450}
                        />
                    </section>
                    <nav className="flex flex-col shadow-2xl pt-10 w-96 bg-white-body border-2 rounded-xl">
                        <div className="bg-white flex flex-col items-center gap-5 h-full mb-10 mx-5 pt-5 border-2 shadow-xl rounded-xl">
                            <h1 className="text-xl flex flex-wrap text-center font-bold">{product.name}</h1>
                            <p>Cód Original: {original}</p>
                            <p>Preço: R$ {product.salePrice && product.salePrice.replace(/\./, ',')}</p>
                            <p>
                                {
                                    product.quantity === 0 ? (
                                        'Está zerado no estoque, mas pode fazer uma encomenda'
                                    ) : (
                                        `Em estoque: ${product.quantity} peças`
                                    )
                                }
                            </p>
                            <div className="flex flex-col items-center justify-center gap-4">
                                <Button handleClick={() => handleClickPurchase()}>Comprar</Button>
                                <div className="flex flex-col items-center">
                                    <label>Quantidade</label>
                                    <input
                                        className="bg-white-body border w-20 text-center"
                                        type="number"
                                        min={0}
                                        onChange={({target: { value }}) => setQty(Number(value))}
                                        value={qty}
                                    />
                                </div>
                            </div>
                            <p></p>
                        </div>
                    </nav>
                </section>
                <section className="bg-white-body flex justify-around py-10 drop-shadow-2xl">
                    <div className="flex flex-col w-1/2 gap-4 border-e-4">
                        <h1 className="text-center">FORMAS DE PAGAMENTO</h1>
                        <PaymentMethods
                            images={[boletoImage]}
                            h2="BOLETO BANCÁRIO"
                            text={`À vista - 3% de desconto: R$ ${product.salePrice && product.salePrice.replace(/\./, ',')}.
                            Desconto aparecerá na tela de pagamento`}
                        />
                        <PaymentMethods
                            images={[pixImage]}
                            h2="PIX"
                            text={`À vista - 3% de desconto: R$ ${product.salePrice && product.salePrice.replace(/\./, ',')}.
                            Desconto aparecerá na tela de pagamento`}
                        />
                        <PaymentMethods
                            images={[mastercardImage, visaImage, hipercardImage, eloImage]}
                            h2="CARTÃO DE CRÉDITO"
                            text={`À vista R$ ${product.salePrice && product.salePrice.replace(/\./, ',')}.`}
                        />
                    </div>
                    <div className="flex flex-col gap-4">
                        <h1>CALCULE O FRETE</h1>
                        <form className="flex gap-3">
                            <div className="flex flex-col">
                                <label>CEP</label>
                                <input
                                    type="text"
                                    className="border-solid border-2 border-zinc-400 rounded-lg"
                                    onChange={({ target: { value } }) => setCep(value)}
                                />
                            </div>
                            <div className="flex flex-col">
                                <label>QUANTIDADE</label>
                                <input type="number" className="border-solid border-2 border-zinc-400 rounded-lg" />
                            </div>
                            <Button
                                handleClick={(e: FormEvent) => calculoFrete(e)}
                            >CALCULAR</Button>
                        </form>
                        <a
                            href="https://buscacepinter.correios.com.br/app/endereco/index.php"
                            className="text-sm text-amber-900"
                            target="_blank"
                        >
                            Não sabe o seu CEP? Clique aqui
                        </a>
                    </div>
                </section>
                <section className="bg-white-body">
                    <p>{product.description}</p>
                </section>
                <footer className="pt-20 pb-3 bg-white-body"><p>&copy; 2023 Luiz Alberto Carreiro Junior</p></footer>
            </main>
        </>
    )
}