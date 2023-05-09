import { Heart, ShoppingCart, User } from "lucide-react";
import UserOptions from "./userBar/UserOptions";

export default function UserBar() {
    

    return (
        <nav className="flex gap-10 max-sm:gap-3">
            <UserOptions />

            <button>
                <Heart className="hover:text-yellow-200 hover:fill-yellow-200" />
            </button>

            <button>
                <ShoppingCart className="hover:text-yellow-200" />
            </button>
        </nav>
    )
}