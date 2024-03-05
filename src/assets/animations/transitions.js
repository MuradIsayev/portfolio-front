export const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: .15,
        },
    },
}


export const cardContainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: .5,
        },
    },
}

export const items = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1, transition: {
            type: "tween",
            staggerChildren: 0.2, // 0.25 second delay between each child 
            delayChildren: .2, // wait .25 before starting 
            duration: ".6",
        },
    },
}

export const animateTags = {
    initial: {
        opacity: 0,
        x: 15,
    },

    animateTags: {
        opacity: 1,
        x: 0,
        transition: {
            type: 'tween',
            duration: .2,
        },
    },
};

export const animateLink = {
    initial: {
        opacity: 0,
        x: 10,
    },

    animateLink: {
        opacity: 1,
        x: 0,
        transition: {
            type: 'tween',
            duration: .25,
        },
    },
};

// TODO: add separate animation for the project content
