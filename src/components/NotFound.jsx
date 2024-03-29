import Lottie from "lottie-react"
import { notFound } from "../assets"

const NotFound = () => {
    return (
        <>
            <h2 className="headers text-[1.3rem] md:text-[1.1rem]">Not to worry, why don't you try my navigation bar.</h2>
            <Lottie animationData={notFound} className="w-48 h-48 md:w-32 md:h-32" />
        </>
    )
}

export default NotFound