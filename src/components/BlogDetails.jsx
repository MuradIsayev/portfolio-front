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
            <div className='flex flex-row items-center w-[65%] mb-1 gap-3'
            >
                <div onClick={handleGoBack} className='flex flex-row gap-[6px] cursor-pointer '>
                    <img src={goBack} alt='Go back icon' className='w-6' />
                </div>
                <div className=''>
                    <h3 className='text-[1.6rem] md:text-[1.32rem] font-medium'>{singleBlog?.post?.title}</h3>
                </div>
            </div>
            <div className=' mb-4 flex flex-row items-center justify-between w-[65%]'>
                <div className='flex gap-1 md:gap-[4px] text-[.8rem] md:text-[.58rem] text-neutral-600 dark:text-neutral-400'>
                    <span>{singleBlog?.post?.createdAt}</span>
                    <span>|</span>
                    <span>{singleBlog?.post?.minsRead} min read</span>
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
