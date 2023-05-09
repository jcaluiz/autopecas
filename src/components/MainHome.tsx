import Introduction from "./mainHome/Introduction"
import ProductsSample from "./mainHome/ProductsSample"

export default function MainHome() {
    return (
        <main className="flex flex-col gap-20 pb-20 bg-white-body">
            <Introduction />
            <ProductsSample />
        </main>
    )
}