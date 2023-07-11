import Logo from "./firstHeader/Logo";
import OrderAndTracking from "./firstHeader/OrderAndTracking";
import SearchParts from "./firstHeader/SearchParts";
import UserBar from "./firstHeader/UserBar";
import Whatsapp from "./firstHeader/Whatsapp";

export default function FirstHeader() {
    return (
        <header className="bg-green-header-first h-20 flex justify-around items-center">
            <Logo />
            <SearchParts />
            <OrderAndTracking />
            <Whatsapp />
            <UserBar />
        </header>
    )
}