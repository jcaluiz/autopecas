import SearchByCategory from "./SecondHeader/SearchByCategory";
import Categories from "./SecondHeader/Categories";
import SocialMedia from "./SecondHeader/SocialMedia";

export default function SecondHeader() {
    return (
        <header className="bg-green-header-second h-14 hidden lg:flex justify-around items-center">
            <div className="flex justify-between items-center">
                <SearchByCategory />
                <ul className="flex w-full items-center text-xs">
                    <Categories />
                </ul>
            </div>
            <SocialMedia />
        </header>
    )
}