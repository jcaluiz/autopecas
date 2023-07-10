import Image from "next/image";

interface Props {
    images: string[];
    h2: string;
    text: string;
}

export default function PaymentMethods({ images, h2, text }: Props) {
    return (
        <div className="flex justify-around items-center">
            <div className="flex flex-wrap w-40 gap-2 items-center justify-center">
                {
                    images.map((image) => (
                        <Image key={image} src={image} width={60} height={60} alt={`imagem de ${image}`} />
                    ))
                }
            </div>
            <h2>{h2}</h2>
            <p className="w-52">
                {text}
            </p>
        </div>
    )
}