import { useEffect, useMemo, useState } from 'react';
import { BlogContent, CountAnimation } from '../components';
import '../styles/brackets.scss'
import { fetchBlogs } from '../api/blog';
import { useQuery } from '@tanstack/react-query';


const Blog = () => {
  const [blogData, setBlogData] = useState([]);

  const { data: blogs } = useQuery({ queryKey: ['blogs'], queryFn: fetchBlogs })
  // const { data: tags } = useQuery({ queryKey: ['tags'], queryFn: fetchTags }, { staleTime: 3000 })
  // const { data: randomPost } = useQuery({ queryKey: ['randomPost'], queryFn: fetchRandomPost }, { staleTime: 60000 })

  useEffect(() => {
    if (blogs) setBlogData(blogs)
  }, [blogs])


  const numberOfBlogs = useMemo(() => {
    return blogData?.length;
  }, [blogData]);


  let i = 0;
  return (
    <>
      <div
        className="flex flex-col justify-start w-[90%] mt-[7.3rem] md:mt-20 md:w-auto"
      >
        <div className='flex flex-row justify-between w-[65%] md:w-[95%] items-center'>
          <h2 className='headers'>Blog</h2>
          <span className='text-[.92rem] md:text-[.65rem] font-bold'>
            <CountAnimation n={numberOfBlogs} />
            <span> blogs</span>
          </span>
        </div>
        <div>
          {blogData?.map(({ id, title, description, minsRead, createdAt, tags, slug }) => {
            return (
              <BlogContent
                key={id}
                // id={id}
                slug={slug}
                title={title}
                description={description}
                minsRead={minsRead}
                tags={tags}
                createdAt={createdAt}
                // handleClick={handleBlogSelection}
                testValue={i += 3}
              />
            );
          })}
        </div>
      </div>
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
