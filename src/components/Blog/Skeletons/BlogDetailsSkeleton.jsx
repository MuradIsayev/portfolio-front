const BlogDetailsSkeleton = () => {
    return (
        <>
            <div className='flex flex-col items-center w-full gap-3 md:gap-2'>
                <div className='w-full rounded-lg h-9 md:h-7 animate-pulse bg-neutral-300 dark:bg-neutral-800 '>
                </div>
                <div className='w-full mb-5 md:mb-3'>
                    <div className='flex w-20 h-4 rounded md:h-3 md:w-14 animate-pulse bg-neutral-300 dark:bg-neutral-800'>
                    </div>
                </div>
                {Array(5).fill().map((_, i) => (
                    <div key={i} className='w-full mt-4'>
                        <div className='w-[70%] h-8 md:h-6 animate-pulse bg-neutral-300 rounded-lg dark:bg-neutral-800 mb-3'>
                        </div>
                        <article className='w-full h-56 mt-5 rounded-lg md:h-44 md:mt-4 animate-pulse bg-neutral-300 dark:bg-neutral-800'>
                        </article>
                    </div>
                ))}
            </div>
        </>
    )
}

export default BlogDetailsSkeleton