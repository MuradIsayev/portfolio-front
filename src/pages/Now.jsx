import React from 'react'
import { BulletPointItem } from '../components'
import { motion } from 'framer-motion'
import { container, items } from '../assets/animations/transitions'


const Now = () => {

    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className='lg:max-w-[60%] max-w-[70%] md:max-w-full'>
            <motion.h2 variants={items} className='headers'>What I am up to now</motion.h2>
            <div className='home-texts'>
                <motion.div variants={items}>
                    This section is a <a
                        target='_blank'
                        className="custom-underline" href='https://nownownow.com/about'>/now page</a>, <span>inspired by </span>
                    <a className="custom-underline" href="https://sive.rs/" target='_blank'
                    >Derek Sivers</a>. Here you will find whatever I am currently building, reading and learning.</motion.div>

                <motion.div
                    variants={items}
                    className='mb-2 text-xl mt-7 md:text-base headers'>Top of my mind at the moment:</motion.div>

                <div className='flex flex-col gap-2 mt-2 ml-5'>
                    <BulletPointItem text='Building a personal website' />
                    <BulletPointItem text='Learning Data Structures and Algorithms' />
                    <BulletPointItem text='Diving into Go language' />
                    <BulletPointItem text='Searching for Jobs and Internships as a Software Developer' />
                    <BulletPointItem text='Reading The Go Programming Language and Manifest' />
                </div>
            </div>

            <motion.hr variants={items} className="h-[1.3px] mb-2 mt-4 bg-[#ededeee0] border-0 dark:bg-[#1f1f20d5]"></motion.hr>
            <motion.div variants={items} className='home-texts'>
                Last updated on 25 February, 2024 (Baku, Azerbaijan)
            </motion.div>
        </motion.div>
    )
}

export default Now