const JobTimeLine = ({ position, description, startedAt, endedAt, company, workScheduleType }) => {
    return (
        <li className="mb-10 ml-5 max-w-[72%] md:max-w-[100%]">
            <span class="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-[#ffffff] dark:ring-[#09090B] bg-[#18181B] dark:bg-neutral-400">
                <svg aria-hidden="true" className="w-3 h-3 object-contain text-[#ffffff] dark:text-[#09090B]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
            </span>
            <time className="text-[.83rem] md:text-[.71rem] font-medium leading-none text-gray-600 dark:text-gray-200">{startedAt} ‑ {endedAt}</time>
            <div className='flex gap-1 items-end'>
                <span className="text-base md:text-sm font-medium text-gray-900 dark:text-white">{position}</span>
                <span className="text-[.87rem] md:text-[.73rem] text-gray-600 dark:text-gray-200">@</span>
                <span className="text-[.87rem] md:text-[.73rem] font-medium text-gray-700 dark:text-white">{company}</span>
                <span className="text-[.87rem] md:text-[.73rem] font-medium text-gray-600 dark:text-gray-200">·</span>
                <span className="text-[.87rem] md:text-[.73rem] font-medium text-gray-700 dark:text-white">{workScheduleType}</span>
            </div>
            <p className="mb-4 text-sm font-normal md:text-[.67rem] text-gray-700 dark:text-gray-200">
                {description}
            </p>
        </li>
    )
}

export default JobTimeLine;

    //   initial={{
    //     opacity: 0,
    //     translateX: testValue % 2 === 0 ? -50 : 50,
    //     translateY: -50,
    //   }}
    //   animate={{ opacity: 1, translateX: 0, translateY: 0 }}
    //   transition={{ duration: 0.2, delay: testValue * 0.1 }}
    // >