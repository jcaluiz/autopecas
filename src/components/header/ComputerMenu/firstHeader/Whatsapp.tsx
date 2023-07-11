import Image from "next/image";
import Link from "next/link";

export default function Whatsapp() {
    return (
        <div className="flex flex-col items-center">
            <p>WhatsApp</p>
            <a
                className="flex gap-2 hover:bg-white/5 w-full"
                href="https://api.whatsapp.com/send?phone=5521991883501"
                target="_blank"
            >
                <Image src="/images/whatsapp-logo-variant-svgrepo-com.svg" width={25} height={25} alt="WhatsApp" className="invert" />
                <p className="max-lg:text-sm text-base">+55 21 99188-3501</p>
            </a>
        </div>
    )
}