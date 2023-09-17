import Lottie from "lottie-react"
import { notFound } from "../assets"

const NotFound = () => {
    const style = {
        height: 180,
        width:180,
    };

    return (
        <>
            <div
                className="mt-[7.3rem] w-[90%] md:w-full md:mt-20"
            >
                <h2 className="headers uppercase text-[1.3rem]">Have you lost baby girl?</h2>
                <Lottie animationData={notFound} style={style}/>
            </div>
        </>
    )
}

export default NotFound