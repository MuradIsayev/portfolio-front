import React from 'react'
import { dot, darkDot } from '../assets'
import { useThemeStore } from '../store/useThemeDark';

const BulletPointItem = ({ text }) => {
    const { isThemeDark } = useThemeStore();

    return (
        <>
            <div className='flex items-center gap-[6px]'>
                <img src={isThemeDark ? dot : darkDot} className='h-[9px]' alt="bullet point" />
                <span >{text}</span>
            </div>
        </>
    )
}

export default BulletPointItem