import React from 'react'
import { BulletPointItem } from '../components'


const Now = () => {

    return (
        <div >
            <h2 className='headers'>What I am up to now</h2>
            <div className='home-texts'>
                <div>This section is a <a
                    target='_blank'
                    className="custom-underline" href='https://nownownow.com/about'>/now page</a>, <span>inspired by </span>
                    <a className="custom-underline" href="https://sive.rs/" target='_blank'
                    >Derek Sivers</a>. Here you will find whatever I am currently building, reading and learning.</div>

                <div className='mt-5 mb-2 text-xl md:text-base headers'>Top of my mind at the moment:</div>

                <div className='flex flex-col gap-2 mt-2 ml-5'>
                    <BulletPointItem text='Building a personal website' />
                    <BulletPointItem text='Learning Data Structures and Algorithms' />
                    <BulletPointItem text='Diving into Go language' />
                    <BulletPointItem text='Searching for Jobs and Internships as a Software Developer' />
                    <BulletPointItem text='Reading The Go Programming Language and Manifest' />
                </div>
            </div>

            <hr class="h-[1.3px] mb-2 mt-4 bg-[#ededeee0] border-0 dark:bg-[#1f1f20d5]"></hr>
            <div className='home-texts'>
                Last updated on 25 February, 2024 (Baku, Azerbaijan)
            </div>
        </div>
    )
}

export default Now