import Lottie from "lottie-react";
import { underConstruction } from "../assets";

const UnderConstruction = () => {
    return (
        <>
            <div
                className="mt-[7.3rem] w-[90%] md:w-full md:mt-20"
            >
                <h2 className="headers text-[1.3rem] md:text-[1.1rem]">Oops.. I haven't completed it yet.</h2>
                <Lottie animationData={underConstruction} className="w-[155px] h-[155px] md:w-28 md:h-28" />
            </div>
        </>
    )
}

export default UnderConstruction;