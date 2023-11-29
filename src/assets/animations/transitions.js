export const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.25,
            delayChildren: .2,
        },
    },
}

export const items = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1, transition: {
            type: "tween",
            staggerChildren: 0.25,
            delayChildren: .25,
            duration: ".7",
        },
    },
}
