import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { items } from "../assets/animations/transitions";

const BlogContent = ({ slug, title, minsRead, createdAt, description, tags, nextDelay }) => {

  return (
    <motion.div
      variants={items}
      initial={{
        opacity: 0,
      }}
      animate={{ opacity: 1 }}
      transition={{ duration: .4, delay: .3 * nextDelay, ease: 'linear' }}
    >
      <Link to={`/blog/${slug}`}>
        <div>
          <div
            className="grow hover:bg-[#ededeee0] dark:hover:bg-[#151516d5] h-[5.2rem] md:h-[4.5rem] flex flex-row flex-wrap cursor-pointer border border-[#E4E4E7] dark:border-[#27272A] card-hover rounded-lg mb-4 md:mb-3 mt-1.5">
            <div className='flex flex-row flex-wrap justify-center items-center md:justify-start max-w-[100%] md:max-w-[95%] p-4 md:ml-1'>
              <div className='flex flex-col items-start md:items-start'>
                <h3 className='text-[1rem] md:text-[.73rem] font-medium'>{title}</h3>
                <div className='flex gap-1 md:gap-[3px] text-[.75rem] md:text-[.53rem] text-neutral-500'>
                  <span>{createdAt}</span>
                  <span>|</span>
                  <span>{minsRead} min read</span>
                </div>
              </div>
            </div>
            {/* <div className='flex flex-row flex-wrap justify-start gap-3 ml-2 cursor-pointer md:gap-2'>
            {tags?.map(({ id, name }) => {
              return (
                <BlogTags
                  key={id}
                  tag={name}
                />
              );
            })}
          </div> */}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default BlogContent;
