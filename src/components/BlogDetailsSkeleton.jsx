const BlogDetailsSkeleton = () => {
    return (
        <>
            <div className='flex flex-col items-center w-[65%] md:w-full gap-3 md:gap-2'>
                <div className='w-full md:[50%] h-9 md:h-7 animate-pulse bg-neutral-300 rounded dark:bg-neutral-800 '>
                </div>
                <div className='flex flex-row items-center justify-between w-full mb-4 md:mb-3'>
                    <div className='flex h-3 gap-1 rounded md:w-12 w-14 animate-pulse bg-neutral-300 dark:bg-neutral-800 '>
                    </div>
                    <div className='h-3 rounded w-14 md:w-12 animate-pulse bg-neutral-300 dark:bg-neutral-800'>
                    </div>
                </div>
                {Array(5).fill().map((_, i) => (
                    <div key={i} className='w-full mt-3'>
                        <div className='w-[70%] h-8 md:h-6 animate-pulse bg-neutral-300 rounded dark:bg-neutral-800 mb-3'>
                        </div>
                        <article className='w-full h-56 mb-5 rounded md:h-44 md:h-mt-5 md:mt-3 md:mb-3 animate-pulse bg-neutral-300 dark:bg-neutral-800'>
                        </article>
                    </div>
                ))}
            </div>
        </>
    )
}

export default BlogDetailsSkeleton