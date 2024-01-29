import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { items } from "../assets/animations/transitions";
import BlogTags from "./BlogTags";
import { useQuery } from "@tanstack/react-query";
import { updateViewCount } from "../api/blog";


const BlogContent = ({ slug, title, minsRead, createdAt, description, tags, nextDelay, viewCount }) => {

  const animateTags = {
    initial: {
      opacity: 0,
      x: 15,
    },

    animateTags: {
      opacity: 1,
      x: -10,
      transition: {
        type: "spring",
        stiffness: 210,
        damping: 15,
      },
    },
  };

  return (
    <motion.div
      variants={items}
      initial={{
        opacity: 0,
      }
      }
      animate={{ opacity: 1 }}
      transition={{ duration: .4, delay: .3 * nextDelay, ease: 'linear' }}
      onClick={() => updateViewCount(slug)}
    >
      <Link to={`/blog/${slug}`}>
        <motion.div
          initial="initial"
          animate="initial"
          whileHover="animateTags"
        >
          <motion.div
            initial={{ y: 0 }}
            whileHover={{ y: -5 }}
            transition={{
              type: "spring",
              stiffness: 210,
              damping: 15,
            }}
            className="grow hover:bg-[#ededeee0] dark:hover:bg-[#151516d5] p-4 h-[4.7rem] md:h-[4.5rem] justify-around items-start flex flex-col flex-wrap cursor-pointer hover:shadow-md border border-[#E4E4E7] dark:border-[#27272A] rounded-lg mb-3 md:mb-3 mt-1.5 card-hover">
            <div className='flex flex-row flex-wrap items-center justify-start md:justify-start md:ml-1'>
              <div className='flex flex-col items-start justify-start'>
                <h3 className='text-[1rem] md:text-[.73rem] font-medium'>{title}</h3>
                <div className='flex gap-1 md:gap-[3px] text-[.75rem] md:text-[.53rem] text-neutral-500'>
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
            </div>
            <motion.div
              variants={animateTags}
              className='flex flex-col flex-wrap items-center self-end justify-center text-[.75rem] md:text-[.53rem] text-neutral-500'>
              <span>{createdAt}</span>
              <span>{viewCount} views</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </Link>
    </motion.div >
  );
}

export default BlogContent;
