import { goBack } from '../assets';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchBlogById } from '../api/blog';
import { useQuery } from '@tanstack/react-query';
import ReactMarkdown from 'react-markdown';


const BlogDetails = () => {
    let { slug } = useParams();
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate('/blog');
    };

    // destructure the markdown and posts properties from the useQuery hook data object
    const { data: singleBlog } = useQuery({ queryKey: ['singleBlog', slug], queryFn: () => fetchBlogById(slug) });


    return (
        <div className="flex flex-col justify-start w-[90%] mt-[7.3rem] md:mt-20 md:w-full">
            <div className='flex flex-row items-center justify-start gap-24'
            >
                {/* <div onClick={handleGoBack} className='flex items-center gap-[6px] cursor-pointer text-[#5f5f5f] opacity-70 hover:opacity-100 duration-75 ease-linear'>
                    <img src={goBack} alt='Go back icon' className='w-5' />
                    <span className='text-[.95rem] md:text-[.65rem] font-medium'>Back to blog</span>
                </div> */}
                <div className='flex flex-col items-center mb-4 md:items-start'>
                    <h3 className='text-[1.55rem] md:text-[1.3rem] font-medium'>{singleBlog?.post?.title}</h3>
                    <div className='flex gap-1 md:gap-[3px] text-[.85rem] md:text-[.58rem] text-gray-400 dark:text-[#a7a4a4]'>
                        <span className='dark:hover:text-[#fff] hover:text-[#000] duration-100 
                    ease-linear'>{singleBlog?.post?.createdAt}</span>
                        <span>|</span>
                        <span className='dark:hover:text-[#fff] hover:text-[#000] duration-100 
                    ease-linear'>{singleBlog?.post?.minsRead} min read</span>
                    </div>
                </div>
            </div>

            <article className='prose md:prose-sm dark:prose-invert dark:text-neutral-400 lg:max-w-[65%] md:max-w-full mt-4'>
                <ReactMarkdown>{singleBlog?.markdown?.parent}</ReactMarkdown>
            </article>
        </div>
    );
}

export default BlogDetails;
