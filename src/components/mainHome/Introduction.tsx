import IntroductionImage from "./introduction/IntroductionImage";
import IntroductionText from "./introduction/IntroductionText";

export default function Introduction() {
    return (
        <div className='w-screen border h-4/5 flex pl-16 justify-between bg-gradient-to-r from-yellow-200 pb-10 max-lg:relative'>
            <IntroductionText />
            <IntroductionImage />
        </div>
    )
}