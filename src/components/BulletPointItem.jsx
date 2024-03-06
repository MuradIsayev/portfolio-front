import React from 'react'
import { dot, darkDot } from '../assets'
import { useThemeStore } from '../store/useThemeDark';
import { motion } from 'framer-motion';
import { items } from '../assets/animations/transitions';

const BulletPointItem = ({ text }) => {
    const { isThemeDark } = useThemeStore();

    return (
        <>
            <motion.div variants={items} className='flex items-center gap-[6px]'>
                <img src={isThemeDark ? dot : darkDot} className='h-[9px]' alt="bullet point" />
                <span >{text}</span>
            </motion.div>
        </>
    )
}

export default BulletPointItem