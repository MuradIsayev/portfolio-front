const BlogCardSkeleton = () => {
    return (
        <>
            {Array(10)
                .fill(1)
                .map((_, index) => (
                    <div key={index} className="gap-1 grow bg-[#ededeee0] dark:bg-[#151516d5] h-[4.7rem] md:h-[4rem] p-4 flex justify-around items-start flex-col flex-wrap rounded-lg mb-3 md:mb-2 mt-1.5">
                        <div className='flex flex-col items-start justify-start max-w-[75%] gap-2'>
                            <div className='text-[1rem] md:text-[.73rem] font-medium h-5 lg:w-64 w-56 animate-pulse bg-neutral-300 rounded dark:bg-neutral-800 md:w-40 md:h-4'></div>
                            <div className='flex flex-row flex-wrap h-4 gap-2 animate-pulse md:h-3'>
                                {Array(3).fill(1).map((_, index) => (
                                    <div key={index} className='w-12 h-3 rounded md:h-2 md:w-8 bg-neutral-300 dark:bg-neutral-800'></div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
        </>
    )
}


export default BlogCardSkeleton;

