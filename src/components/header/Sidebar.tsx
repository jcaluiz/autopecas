interface Props {
    array: Array<string>,
}

export default function Sidebar({ array }: Props) {
    return (
        <nav className="bg-green-header-first z-20 flex flex-col flex-wrap w-full h-96 absolute top-32 invisible left-0 hover:visible group-hover:visible">
            {
                array && array.map((element) => (
                    <button className="py-4 text-md hover:bg-white/5 flex flex-wrap px-5" key={element}>{element}</button>
                ))
            }
        </nav>
    )
}