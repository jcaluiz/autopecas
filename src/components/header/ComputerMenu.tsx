import FirstHeader from "./ComputerMenu/FirstHeader";
import SecondHeader from "./ComputerMenu/SecondHeader";

export default function ComputerMenu() {
    return (
        <header className="max-lg:hidden w-full text-white flex flex-col sticky top-0">
            <FirstHeader />
            <SecondHeader />
        </header>
    )
}