import { goBack, darkGoBack } from '../../assets';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchBlogById, updateViewCount } from '../../api/blog';
import { useQuery } from '@tanstack/react-query';
import ReactMarkdown from 'react-markdown';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { BlogDetailsSkeleton } from '..';
import { isThemeDarkStore } from '../../store/useIsThemeDark';

const BlogDetails = () => {
    let { slug } = useParams();
    const { isThemeDark } = isThemeDarkStore();

    const navigate = useNavigate();


    const handleGoBack = () => {
        navigate('/blog');
    };

    const { data: singleBlog, isLoading } = useQuery({ queryKey: ['singleBlog', slug], queryFn: () => fetchBlogById(slug) });

    useEffect(() => {
        updateViewCount(slug);
    }, [slug]);

    return (
        <div className='lg:w-[70%] w-[80%] md:w-full'>
            <motion.div
                initial={{ x: 0 }}
                animate={{ x: -5 }}
                transition={{
                    type: "tween",
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 0.6,
                    ease: 'easeInOut',
                }}
                onClick={handleGoBack} className='
                flex md:h-7 md:w-7 h-9 w-9 p-1
                dark:hover:bg-[#151516d5] rounded-md hover:bg-[#ededeee0]
                relative transition duration-150 ease-linear cursor-pointer'>
                <img src={isThemeDark ? goBack : darkGoBack} alt='Go back icon' />
            </motion.div>

            {isLoading ? <BlogDetailsSkeleton /> : (
                <div className='w-[89%]'>
                    <div className='w-full mb-2 md:mb-1'>
                        <div className='text-[1.45rem] font-medium md:text-[1.15rem] leading-6 md:leading-5 '>{singleBlog?.post?.title}</div>
                    </div>
                    <div className='flex flex-row items-center justify-between w-full mb-4'>
                        <div className='flex gap-1 md:gap-[4px] text-[.85rem] md:text-[.58rem] text-neutral-600 dark:text-neutral-400 font-medium'>
                            {singleBlog?.post?.minsRead} min read
                        </div>
                        <div className='text-[.85rem] md:text-[.58rem] text-neutral-600 dark:text-neutral-400 font-medium'>
                            {singleBlog?.post?.fromNow}
                        </div>
                    </div>
                    <article className='w-full prose md:prose-sm !prose-neutral dark:!prose-invert dark:prose-pre:bg-[#151516d5] dark:prose-pre:text-neutral-300 prose-pre:bg-[#ededeee0] prose-pre:text-neutral-900 mt-8'>
                        <ReactMarkdown>{singleBlog?.markdown?.parent}</ReactMarkdown>
                    </article>
                </div>
            )}
        </div>
    );
}

export default BlogDetails;
