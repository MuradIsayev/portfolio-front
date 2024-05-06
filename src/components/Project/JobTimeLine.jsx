import { items } from '../../assets/animations/transitions';
import { motion } from 'framer-motion';


const JobTimeLine = ({ position, description, startedAt, endedAt, company, workScheduleType }) => {
    return (
        <li className="mb-10 ml-5 lg:ml-[22px] max-w-[70%] md:max-w-full">
            <span className="absolute flex items-center justify-center w-6 h-6 lg:w-7 lg:h-7 rounded-full -left-3 lg:-left-3.5 ring-8 ring-[#ffffff] dark:ring-[#09090B] bg-[#18181B] dark:bg-[#fafafa]">
                <svg aria-hidden="true" className="w-3 h-3 lg:h-[13px] lg:w-[13px] object-contain text-[#ffffff] dark:text-[#09090B]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
            </span>
            <motion.time variants={items} className="text-[.85rem] md:text-[.69rem] font-medium leading-none text-neutral-600 dark:text-neutral-400">{startedAt} ‑ {endedAt ? endedAt : "Present"}</motion.time>
            <motion.div variants={items} className='flex items-end gap-1'>
                <span className="text-[.98rem] md:text-[.75rem] font-medium dark:text-[#fafafa] text-[#09090B]">{position}</span>
                <span className="text-[.75rem] md:text-[.5rem] text-neutral-600 dark:text-neutral-400 font-medium self-center">@</span>
                <span className="text-[.95rem] md:text-[.75rem] font-medium dark:text-[#fafafa] text-[#09090B]">{company}</span>
                <div className='w-[3px] h-[3px] md:h-[2px] md:w-[2px] rounded bg-neutral-600 dark:bg-neutral-400 mx-1 self-center'>
                </div>

                <span className="text-[.9rem] md:text-[.7rem] font-medium dark:text-[#fafafa] text-[#09090B]">{workScheduleType}</span>
            </motion.div>
            <motion.p variants={items} className=" text-sm lg:text-[.9rem] font-normal md:text-[.67rem] text-neutral-600 dark:text-neutral-400">
                {description}
            </motion.p>
        </li>
    )
}

export default JobTimeLine;

