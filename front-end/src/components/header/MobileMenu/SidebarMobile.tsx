import Categories from "../ComputerMenu/SecondHeader/Categories";

export default function SidebarMobile() {
    return (
        <nav className="absolute bg-green-header-first top-0 w-4/5 lg:hidden">
            <div className="text-white">
                <Categories />
            </div>

        </nav>
    )
}