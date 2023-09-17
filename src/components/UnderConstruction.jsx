import Lottie from "lottie-react";
import { underConstruction } from "../assets";

const UnderConstruction = () => {
    const style = {
        height: 170,
        width: 170,
      };


    return (
        <>
            <div
                className="mt-[7.3rem] w-[90%] md:w-full md:mt-20"
            >
                <h2 className="headers uppercase text-[1.3rem]">I am still working on it! (AS YOU CAN SEE)</h2>
                <Lottie animationData={underConstruction} style={style}/>
            </div>
        </>
    )
}

export default UnderConstruction;