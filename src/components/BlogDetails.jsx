import { goBack, darkGoBack } from '../assets';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchBlogById } from '../api/blog';
import { useQuery } from '@tanstack/react-query';
import ReactMarkdown from 'react-markdown';
import { useEffect, useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { isThemeChangedStore } from '../store/useIsThemeChanged';
import { motion } from 'framer-motion';


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

    const { data: singleBlog } = useQuery({ queryKey: ['singleBlog', slug], queryFn: () => fetchBlogById(slug) });

    return (
        <div className="flex flex-col justify-start w-[90%] mt-[7.3rem] md:mt-20 md:w-full">
            <div className='flex flex-row items-center w-[65%] gap-3'
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
                    <img src={isThemeDark ? goBack : darkGoBack} alt='Go back icon' className='w-7 md:w-5' />
                </motion.div>
                <div>
                    <h3 className='text-[1.65rem] font-semibold md:text-[1.32rem]'>{singleBlog?.post?.title}</h3>
                </div>
            </div>
            <div className=' mb-4 flex flex-row items-center justify-between w-[65%]'>
                <div className='flex gap-1 md:gap-[4px] text-[.8rem] md:text-[.58rem] text-neutral-600 dark:text-neutral-400'>
                    <span>{singleBlog?.post?.createdAt} | {singleBlog?.post?.minsRead} min read</span>
                </div>
                <div className='text-[.8rem] md:text-[.58rem] text-neutral-600 dark:text-neutral-400'>
                    123 Views
                </div>

            </div>

            <article className='prose md:prose-sm dark:prose-invert dark:text-neutral-400 lg:max-w-[65%] md:max-w-full mt-4'>
                <ReactMarkdown>{singleBlog?.markdown?.parent}</ReactMarkdown>
            </article>
        </div>
    );
}

export default BlogDetails;
