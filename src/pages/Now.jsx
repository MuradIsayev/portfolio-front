import React from 'react'

const Now = () => {
    return (
        <div >
            <h2 className='headers'>What I am up to now</h2>
            <div className='home-texts'>
                <div>This section is a <a
                    target='_blank'
                    className="custom-underline" href='https://nownownow.com/about'>/now page</a>, <span>inspired by </span>
                    <a className="text-base custom-underline" href="https://sive.rs/">Derek Sivers</a>. Here you will find whatever I am currently building, reading and learning.</div>

                <div className='mt-3 mb-1 text-lg font-semibold'>Top of my mind at the moment:</div>

                <div className='flex flex-col gap-1 ml-5'>

                    <div>
                        - Finalizing my Portfolio website
                    </div>
                    <div>
                        - Learning Data Structures and Algorithms
                    </div>
                    <div>
                        - Diving into Go language
                    </div>
                    <div>
                        - Searching for Jobs and Internships as a Software Developer
                    </div>
                    <div>
                        - Reading <a
                            target='_blank'
                            href="https://www.goodreads.com/book/show/4069.The_Pragmatic_Programmer" className="custom-underline">
                            The Go Programming Language</a> <span>and </span>
                        <a
                            target='_blank'
                            href="https://roxienafousi.com/books/manifest/" className="custom-underline">
                            Manifest</a>
                    </div>
                </div>

                <hr class="h-[1.3px] mb-2 mt-4 bg-[#ededeee0] border-0 dark:bg-[#1f1f20d5]"></hr>
                <div>
                    Last updated on 25 February, 2024 (Baku, Azerbaijan)
                </div>
            </div>
        </div >
    )
}

export default Now