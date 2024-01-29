import { useMemo } from 'react';
import { BlogContent, CountAnimation } from '../components';
import { fetchBlogs } from '../api/blog';
import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { container, items } from '../assets/animations/transitions';
import { Loading } from '../components';


const Blog = () => {
  const { data: blogs, isLoading } = useQuery({ queryKey: ['blogs'], queryFn: fetchBlogs })

  const numberOfBlogs = useMemo(() => {
    return blogs?.length;
  }, [blogs]);

  return (
    <>
      <motion.div
        initial="hidden"
        animate="show"
        variants={container}
        className="flex flex-col justify-start w-[90%] mt-[7.3rem] md:mt-20 md:w-full"
      >
        <motion.div
          variants={items}
          className='flex flex-row justify-between items-center w-full lg:w-[65%]'>
          <h2 className='headers'>Blog</h2>
          <span className='text-[.92rem] md:text-[.65rem] font-semibold'>
            <CountAnimation n={numberOfBlogs} />
            <span> blogs</span>
          </span>
        </motion.div>
        <motion.div className='lg:w-[65%] w-full'
          variants={container}>
          {isLoading ? <Loading /> : (
            blogs?.map(({ id, title, description, minsRead, createdAt, tags, slug, viewCount }, index) => {
              return (
                <BlogContent
                  key={id}
                  slug={slug}
                  title={title}
                  description={description}
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
    </>
  );
}

export default Blog;
