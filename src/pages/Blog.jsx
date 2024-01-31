import { useMemo } from 'react';
import { BlogContent, CountAnimation, BlogCardSkeleton } from '../components';
import { fetchBlogs } from '../api/blog';
import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { container, items } from '../assets/animations/transitions';


const Blog = () => {
  const { data: blogs, isLoading } = useQuery({ queryKey: ['blogs'], queryFn: fetchBlogs })

  const numberOfBlogs = useMemo(() => {
    return blogs?.length;
  }, [blogs]);

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={container} >
      <motion.div
        variants={items}
        className='flex flex-row justify-between items-center w-full lg:w-[70%]'>
        <h2 className='headers'>My Writings</h2>
        <span className='text-[.92rem] md:text-[.65rem] font-semibold'>
          {numberOfBlogs ? <CountAnimation n={numberOfBlogs} /> : null}
          <span> blogs</span>
        </span>
      </motion.div>
      <motion.div className='lg:w-[70%] w-full'
        variants={container}>
        {isLoading ? <BlogCardSkeleton /> : (
          blogs?.map(({ id, title, minsRead, createdAt, tags, slug, viewCount }, index) => {
            return (
              <BlogContent
                key={id}
                slug={slug}
                title={title}
                minsRead={minsRead}
                tags={tags}
                createdAt={createdAt}
                nextDelay={index += 1}
                viewCount={viewCount}
              />
            );
          })
        )}

      </motion.div>
    </motion.div >
  );
}

export default Blog;
