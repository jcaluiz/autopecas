import { Facebook, Linkedin, Twitter } from "lucide-react";

export default function SocialMedia() {
    return (
        <div className="flex items-center justify-center gap-5 pl-4 pr-4">
            <button>
                <Facebook className="fill-white hover:fill-yellow-200 hover:text-yellow-200" />
            </button>
            <button>
                <Twitter className="fill-white hover:fill-yellow-200 hover:text-yellow-200" />
            </button>
            <button>
                <Linkedin className="fill-white hover:fill-yellow-200 hover:text-yellow-200" />
            </button>
        </div>
    )
}