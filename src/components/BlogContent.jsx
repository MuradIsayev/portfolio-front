import { Link } from "react-router-dom";
import { BlogTags } from "./";
import { motion } from "framer-motion";

const BlogContent = ({ id, title, minsRead, blockId, createdAt, description, handleClick, tags, testValue }) => {

  return (
    <Link to={`/blogs/${id}`}>
      <motion.div onClick={() => handleClick(blockId, title, createdAt, minsRead)}
        initial={{
          opacity: 0,
        }}
        animate={{ opacity: 1 }}
        transition={{ duration: .8, delay: testValue * 0.15, type: "tween", staggerChildren: 0.25, }}>
        <div className="h-[9rem] md:h-[6.5rem] flex flex-row flex-wrap justify-start cursor-pointer transition duration-150 
                    ease-linear hover:outline hover:outline-[2px] hover:outline-[#8ab2c5] dark:hover:outline-[#2c4a58] w-[90%] 
                    md:w-[97%] rounded-md mb-8 md:mb-5 mt-1.5">
          <div className='flex gap-3 md:gap-2 flex-row flex-wrap justify-center items-center md:justify-start max-w-[100%] md:max-w-[95%] ml-2 md:ml-1'>
            <div className='flex flex-col items-center md:items-start'>
              <h3 className='text-[1.1rem] md:text-[.79rem] font-medium'>{title}</h3>
              <div className='flex gap-1 md:gap-[3px] text-[.75rem] md:text-[.53rem] text-gray-400 dark:text-[#a7a4a4]'>
                <span className='dark:hover:text-[#fff] hover:text-[#000] duration-100 
                    ease-linear'>{createdAt}</span>
                <span>|</span>
                <span className='dark:hover:text-[#fff] hover:text-[#000] duration-100 
                    ease-linear'>{minsRead} min read</span>
              </div>
            </div>
            <div className='text-[.91rem] md:text-[.6rem] '>
              {description}
            </div>
          </div>
          <div className='flex flex-row flex-wrap justify-start gap-3 ml-2 cursor-pointer md:gap-2'>
            {tags?.map(({ id, name }) => {
              return (
                <BlogTags
                  key={id}
                  tag={name}
                />
              );
            })}
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

export default BlogContent;
