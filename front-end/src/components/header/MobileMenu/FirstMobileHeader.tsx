import Logo from "../ComputerMenu/firstHeader/Logo";
import UserBar from "../ComputerMenu/firstHeader/UserBar";
import MenuMobile from "./FirstMobileHeader/MenuMobile";

export default function FirstMobileHeader() {
    return (
        <div className="bg-green-header-first h-20 flex justify-around items-center">
            <MenuMobile />
            <Logo />
            <UserBar />
        </div>
    )
}