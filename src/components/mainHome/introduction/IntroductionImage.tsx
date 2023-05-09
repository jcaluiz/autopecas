import Image from "next/image";

export default function IntroductionImage() {
    return (
        <div className="flex justify-center items-center pr-20">
            <Image src="/images/truck.png" width={500} height={500} alt="Imagem de caminhão" />
        </div>
    )
}