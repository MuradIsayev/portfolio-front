import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { items } from "../assets/animations/transitions";
import BlogTags from "./BlogTags";
import { updateViewCount } from "../api/blog";
import { animateTags } from "../assets/animations/transitions";


const BlogContent = ({ slug, title, createdAt, description, tags, nextDelay, viewCount }) => {

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
            whileHover={{ y: -3 }}
            transition={{
              type: "spring",
              stiffness: 210,
              damping: 15,
            }}
            className="gap-1 grow hover:bg-[#ededeee0]  dark:hover:bg-[#151516d5] p-4 h-[4.7rem] md:h-[4rem] justify-around items-start flex flex-col flex-wrap cursor-pointer hover:shadow-md border border-[#E4E4E7] dark:border-[#27272A] rounded-lg mb-3 md:mb-2 mt-1.5 card-hover">
              <div className='flex flex-col items-start justify-start max-w-[75%]'>
                <div className='text-[.95rem] md:text-[.62rem] font-medium'>{title}</div>
                <div className='flex flex-wrap gap-1'>
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
            <motion.div
              variants={animateTags}
              className='max-w-[25%] flex flex-col flex-wrap items-center self-end justify-center text-[.73rem] md:text-[.5rem] dark:text-neutral-400 text-neutral-600 font-medium'>
              <div>{createdAt}</div>
              <div>{viewCount} views</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </Link>
    </motion.div >
  );
}

export default BlogContent;
