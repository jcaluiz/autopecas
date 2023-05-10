import IntroductionImage from "./introduction/IntroductionImage";
import IntroductionText from "./introduction/IntroductionText";

export default function Introduction() {
    return (
        <div className='w-full border h-4/5 max-lg:pl-20 flex justify-between bg-gradient-to-r from-yellow-200 pb-10 max-lg:relative'>
            <IntroductionText />
            <IntroductionImage />
        </div>
    )
}