import { goBack, darkGoBack } from '../assets';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchBlogById } from '../api/blog';
import { useQuery } from '@tanstack/react-query';
import ReactMarkdown from 'react-markdown';
import { useEffect, useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { isThemeChangedStore } from '../store/useIsThemeChanged';
import { motion } from 'framer-motion';
import { BlogDetailsSkeleton } from '../components';

const BlogDetails = () => {
    let { slug } = useParams();

    const navigate = useNavigate();
    const [getIsDarkTheme] = useLocalStorage("dark-theme");
    const isThemeChanged = isThemeChangedStore();
    const [isThemeDark, setIsThemeDark] = useState(() => getIsDarkTheme())

    useEffect(() => {
        setIsThemeDark(getIsDarkTheme())
    }, [isThemeChanged])


    const handleGoBack = () => {
        navigate('/blog');
    };

    const { data: singleBlog, isLoading } = useQuery({ queryKey: ['singleBlog', slug], queryFn: () => fetchBlogById(slug) });

    return (
        <div className="flex flex-col justify-start w-[90%] mt-[7.3rem] md:mt-20 md:w-full">
            {isLoading ? <BlogDetailsSkeleton /> : (
                <>
                    <div className='flex flex-row items-center w-[65%] md:w-full gap-3 mb-1'
                    >
                        <motion.div
                            initial={{ x: 0 }}
                            animate={{ x: -4 }}
                            transition={{
                                type: "tween",
                                repeat: Infinity,
                                repeatType: "reverse",
                                duration: 0.6,
                                ease: 'easeInOut',
                                delay: 2
                            }}
                            onClick={handleGoBack} className='transition duration-150 ease-linear cursor-pointer opacity-70 hover:opacity-100'>
                            <img src={isThemeDark ? goBack : darkGoBack} alt='Go back icon' className='w-7' />
                        </motion.div>
                        <div>
                            <div className='text-[1.45rem] font-semibold md:text-[1.15rem] leading-6 md:leading-5'>{singleBlog?.post?.title}</div>
                        </div>
                    </div>
                    <div className=' mb-4 flex flex-row items-center justify-between w-[65%] md:w-full'>
                        <div className='flex gap-1 md:gap-[4px] text-[.8rem] md:text-[.55rem] text-neutral-600 dark:text-neutral-400 font-medium'>
                            {singleBlog?.post?.minsRead} min read
                        </div>
                        <div className='text-[.8rem] md:text-[.55rem] text-neutral-600 dark:text-neutral-400 font-medium'>
                            {singleBlog?.post?.fromNow}
                        </div>
                    </div>
                    <article className='prose mb-5 md:mb-3 md:prose-sm !prose-slate dark:!prose-invert dark:prose-pre:bg-[#151516d5] dark:prose-pre:text-neutral-400 prose-pre:bg-[#ededeee0] prose-pre:text-neutral-900 text-black dark:text-white lg:max-w-[65%] md:max-w-full mt-5 md:mt-3'>
                        <ReactMarkdown>{singleBlog?.markdown?.parent}</ReactMarkdown>
                    </article>
                </>
            )}
        </div>
    );
}

export default BlogDetails;
