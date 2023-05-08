import IntroductionImage from "./introduction/IntroductionImage";
import IntroductionText from "./introduction/IntroductionText";

export default function Introduction() {
    return (
        <div className='w-full border h-4/5 flex justify-between bg-gradient-to-r from-yellow-200 pb-10'>
            <IntroductionText />
            <IntroductionImage />
        </div>
    )
}