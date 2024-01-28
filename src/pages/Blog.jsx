import { useEffect, useMemo, useState } from 'react';
import { BlogContent, CountAnimation } from '../components';
import '../styles/brackets.scss'
import { fetchBlogs } from '../api/blog';
import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { cardContainer, container, items } from '../assets/animations/transitions';


const Blog = () => {
  const [blogData, setBlogData] = useState([]);

  const { data: blogs } = useQuery({ queryKey: ['blogs'], queryFn: fetchBlogs })

  useEffect(() => {
    if (blogs) setBlogData(blogs)
  }, [blogs])


  const numberOfBlogs = useMemo(() => {
    return blogData?.length;
  }, [blogData]);

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
          {blogData?.map(({ id, title, description, minsRead, createdAt, tags, slug }, index) => {
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
              />
            );
          })}
        </motion.div>
      </motion.div >
      {/* <div className='flex flex-col items-start w-[27%] mt-[7.3rem] pl-1 md:flex-row md:justify-evenly md:w-full'>
        <div>
          <p className='text-lg headers'>Random Post</p>
          <div>
            <Link to={`/blog/${randomPost?.id}`} className='text-[#376ccf] opacity-75 hover:opacity-100 duration-75 ease-linear
           dark:text-[#4673c5]  dark:opacity-80 dark:hover:opacity-100 home-texts brackets brackets2'>{randomPost?.title}</Link>
          </div>
        </div>
        <div className=''>
          <p className='text-lg headers mt-7 md:mt-0'>Tags</p>
          <div className='flex flex-row flex-wrap gap-2 text-xs md:gap-1 md:flex-col md:flex-nowrap'>
            {blogData?.map(({ tags }) => {
              return (
                tags?.map(({ id, name }) => {
                  return (
                    <BlogTags
                      key={id}
                      tag={name}
                      setBlogData={setBlogData}
                    />
                  );
                })
              );
            }
            )}
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Blog;
