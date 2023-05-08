import { CounterContext } from "@/context/Context";
import FirstMobileHeader from "./MobileMenu/FirstMobileHeader";
import { useContext } from "react";
import SecondMobileHeader from "./MobileMenu/SecondMobileHeader";

export default function MobileMenu() {
    const { state } = useContext(CounterContext);

    return (
        <>
            <FirstMobileHeader />
            <SecondMobileHeader />
        </>
    )
}