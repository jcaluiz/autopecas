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
            <Acessories />
            <Wrench />
            <SteeringWeel />
            <Eletric />
            <Filter />
            <Engine />
            <Gear />
            <Gearing />
        </>
    )
}