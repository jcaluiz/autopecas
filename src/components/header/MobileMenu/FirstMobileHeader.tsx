import Logo from "../ComputerMenu/firstHeader/Logo";
import UserBar from "../ComputerMenu/firstHeader/UserBar";
import MenuMobile from "./FirstMobileHeader/MenuMobile";

export default function FirstMobileHeader() {
    return (
        <header className="w-full lg:hidden text-white flex flex-col sticky top-0">
            <div className="bg-green-header-first h-20 flex justify-around items-center">
                <MenuMobile />
                <Logo />
                <UserBar />
            </div>
        </header>
    )
}