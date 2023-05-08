import { AlignJustify } from "lucide-react";
import Logo from "../ComputerMenu/firstHeader/Logo";
import UserBar from "../ComputerMenu/firstHeader/UserBar";

export default function FirstMobileHeader() {
    return (
        <div className="bg-green-header-first h-20 flex justify-around items-center">
            <AlignJustify size={50} />
            <Logo />
            <UserBar />
        </div>
    )
}