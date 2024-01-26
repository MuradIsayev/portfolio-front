import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

const CountAnimation = ({ n }) => {
    const count = useMotionValue(0);
    const rounded = useTransform(count, Math.round);

    useEffect(() => {
        const animation = animate(count, n, {
            duration: n > 15 ? 1 : 0.3,
        });

        return animation.stop;
    }, [n]);

    return (
        <motion.span>{rounded}</motion.span>
    )
};

export default CountAnimation;
