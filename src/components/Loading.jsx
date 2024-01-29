const Loading = () => {
    return (
        <>
            {Array(6)
                .fill(1)
                .map((_, index) => (
                    <div key={index} className="grow bg-[#ededeee0] dark:bg-[#151516d5] h-[5.2rem] md:h-[4.5rem] flex flex-row flex-wrap rounded-lg mb-4 md:mb-3 mt-1.5">
                        <div className='flex flex-row flex-wrap justify-center items-center md:justify-start max-w-[100%] md:max-w-[95%] p-4 md:ml-1'>
                            <div className='flex flex-col items-start gap-2 md:items-start'>
                                <div className='text-[1rem] md:text-[.73rem] font-medium h-5 w-52 animate-pulse bg-neutral-300 rounded dark:bg-neutral-800 md:w-24 md:h-4'></div>
                                <div className='flex gap-1 md:gap-[3px] animate-pulse bg-neutral-300 w-28 h-4 rounded dark:bg-neutral-800 md:w-12 md:h-3'>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
        </>
    )
}


export default Loading;

