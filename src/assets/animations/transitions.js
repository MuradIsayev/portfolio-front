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
            staggerChildren: 0.25, // 0.25 second delay between each child 
            delayChildren: .25, // wait .25 before starting 
            duration: ".7",
        },
    },
}

export const guestbookContainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: .37,
        },
    },
}

// TODO: add separate animation for the project content
