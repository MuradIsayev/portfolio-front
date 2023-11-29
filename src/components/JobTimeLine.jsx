import { container, items } from '../assets/animations/transitions';
import { motion } from 'framer-motion';


const JobTimeLine = ({ position, description, startedAt, endedAt, company, workScheduleType }) => {
    return (
        <motion.li variants={items} className="mb-10 ml-5 max-w-[72%] md:max-w-[100%]">
            <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-[#ffffff] dark:ring-[#09090B] bg-[#18181B] dark:bg-neutral-400">
                <svg aria-hidden="true" className="w-3 h-3 object-contain text-[#ffffff] dark:text-[#09090B]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
            </span>
            <motion.time variants={items} className="text-[.83rem] md:text-[.71rem] font-medium leading-none text-neutral-600 dark:text-neutral-400">{startedAt} ‑ {endedAt}</motion.time>
            <motion.div variants={items} className='flex items-end gap-1'>
                <span className="text-base md:text-sm font-medium dark:text-[#fafafa] text-[#09090B]">{position}</span>
                <span className="text-[.87rem] md:text-[.73rem] text-neutral-600 dark:text-neutral-400 font-medium">@</span>
                <span className="text-[.87rem] md:text-[.73rem] font-medium dark:text-[#fafafa] text-[#09090B]">{company}</span>
                <span className="text-[.8rem] font-[600] text-neutral-600 dark:text-neutral-400">·</span>
                <span className="text-[.87rem] md:text-[.73rem] font-medium dark:text-[#fafafa] text-[#09090B]">{workScheduleType}</span>
            </motion.div>
            <motion.p variants={items} className="mb-4 text-sm font-normal md:text-[.67rem] text-neutral-600 dark:text-neutral-400">
                {description}
            </motion.p>
        </motion.li>
    )
}

export default JobTimeLine;

