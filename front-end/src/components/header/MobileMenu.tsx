import FirstMobileHeader from "./MobileMenu/FirstMobileHeader";

export default function MobileMenu() {
    return (
        <header className="w-full lg:hidden text-white flex flex-col sticky top-0">
            <FirstMobileHeader />
        </header>
    )
}