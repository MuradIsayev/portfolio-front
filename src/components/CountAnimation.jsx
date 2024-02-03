import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

const CountAnimation = ({ n }) => {
    const count = useMotionValue(0);
    const rounded = useTransform(count, Math.round);

    let customDuration;

    switch (true) {
        case n > 5:
            customDuration = .5;
            break;
        case n > 10:
            customDuration = .7;
            break;
        case n > 20:
            customDuration = .9;
            break;
        case n > 30:
            customDuration = 1;
            break;
        default:
            customDuration = 0.3;
    }

    useEffect(() => {
        const animation = animate(count, n, {
            duration: customDuration
        });

        return animation.stop;
    }, [n]);

    return (
        <motion.span>{rounded}</motion.span>
    )
};

export default CountAnimation;
