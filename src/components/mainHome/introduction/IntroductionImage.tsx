import Image from "next/image";

export default function IntroductionImage() {
    return (
        <div className="flex justify-center items-center pr-20 max-lg:absolute max-lg:opacity-30 max-lg:top-40">
            <Image src="/images/truck.png" width={500} height={500} alt="Imagem de caminhão" />
        </div>
    )
}