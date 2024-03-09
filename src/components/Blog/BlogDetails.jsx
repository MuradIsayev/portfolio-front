import { goBack, darkGoBack } from '../../assets';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchBlogById, updateViewCount } from '../../api/blog';
import { useQuery } from '@tanstack/react-query';
import ReactMarkdown from 'react-markdown';
import { useEffect } from 'react';
import { BlogDetailsSkeleton } from '..';
import { useThemeStore } from '../../store/useThemeDark';
import { useBlogContentStore } from '../../store/useBlogContent';

const BlogDetails = () => {
    let { slug } = useParams();
    const navigate = useNavigate();

    const { isThemeDark } = useThemeStore();
    const { storagePost, setStoragePost } = useBlogContentStore();

    const handleGoBack = () => {
        navigate('/blog');
    };

    const { data: singleBlog, isLoading } = useQuery({ queryKey: ['singleBlog', slug], queryFn: () => fetchBlogById(slug) });

    useEffect(() => {
        if (storagePost?.post?.slug === slug && storagePost?.markdown?.parent === singleBlog?.markdown?.parent) return;

        if (singleBlog) {
            setStoragePost(singleBlog);
        }
    }, [singleBlog]);

    useEffect(() => {
        updateViewCount(slug);
    }, [slug]);

    return (
        <div className='lg:w-[70%] w-[80%] md:w-full mb-3 md:mb-2'>
            <div
                onClick={handleGoBack} className='border w-[9.5rem] h-[43px] mb-3 md:mb-2 
                bg-[#ffffff] text-[#09090B] dark:text-[#fafafa] dark:bg-[#09090B] hover:bg-[#ededeee0] dark:hover:bg-[#151516d5] 
                border-[#E4E4E7] dark:border-[#27272A]
                flex items-center justify-center gap-[6px] rounded-md
                transition duration-150 ease-linear cursor-pointer
                md:w-[7.5rem] md:h-[34px]
                '>
                <img src={isThemeDark ? goBack : darkGoBack} alt='Go back icon' className='h-5 md:h-[15px]' />
                <div className='text-sm font-medium md:text-[.65rem] home-texts text-neutral-600 dark:text-neutral-400'>Back to blog</div>
            </div>

            {(isLoading && !(slug === storagePost?.post?.slug)) ? <BlogDetailsSkeleton /> : (
                <div className='w-full'>
                    <div className='mb-2'>
                        <div className='text-[1.45rem] font-medium md:text-[1.15rem] leading-6 md:leading-5 '>{storagePost?.post?.title ?? singleBlog?.post?.title}</div>
                    </div>
                    <div className='mb-4'>
                        <div className='text-[.85rem] md:text-[.58rem] text-neutral-600 dark:text-neutral-400 font-medium'>
                            {storagePost?.post?.fromNow ?? singleBlog?.post?.fromNow}
                        </div>
                    </div>
                    <article className='w-full prose md:prose-sm !prose-neutral dark:!prose-invert  prose-h1:font-medium prose-h2:font-medium prose-h3:font-medium dark:prose-pre:bg-[#151516d5] dark:prose-pre:text-neutral-300 prose-pre:bg-[#ededeee0] prose-pre:text-neutral-900 mt-9 md:mt-7'>
                        <ReactMarkdown>{storagePost?.markdown?.parent ?? singleBlog?.markdown?.parent}</ReactMarkdown>
                    </article>
                </div>
            )}
        </div>
    );
}

export default BlogDetails;
