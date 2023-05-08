import Acessories from "./categories/acessories";
import Wrench from "./categories/wrench";
import SteeringWeel from "./categories/steeringWheel";
import Filter from "./categories/filter";
import Eletric from "./categories/eletric";
import Engine from "./categories/engine";
import Gear from "./categories/gear";
import Gearing from "./categories/gearing";

export default function Categories() {
    return (
        <>
            <ul className="flex gap-1 w-full items-center pr-3 text-xs">
                <Acessories />
                <Wrench />
                <SteeringWeel />
                <Eletric />
                <Filter />
                <Engine />
                <Gear />
                <Gearing />
            </ul>
        </>
    )
}