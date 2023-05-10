import { CounterContext } from "@/context/Context";
import FirstMobileHeader from "./MobileMenu/FirstMobileHeader";
import { useContext } from "react";
import SecondMobileHeader from "./MobileMenu/SecondMobileHeader";
import SidebarMobile from "./MobileMenu/SidebarMobile";

export default function MobileMenu() {
    const { state } = useContext(CounterContext);

    return (
        <header className="relative w-full">
            <FirstMobileHeader />
            <SecondMobileHeader />
            {
                state.clickMenu && (
                    <SidebarMobile />
                )
            }
        </header>
    )
}