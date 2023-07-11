import Image from "next/image";
import Link from "next/link";

export default function Logo() {
    return (
        <Link 
            className="hover:cursor-pointer"
            href="/"
        >
            <Image
                src="/images/logo-vr.png"
                width={140}
                height={140}
                alt="logo da VR Auto Peças"
                className="box-border max-lg:w-32 max-sm:w-20"
            />
        </Link>

    )
}