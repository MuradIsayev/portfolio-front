import './Blog.css';

const BlogContent = () => {
  return (
    <div className="h-28 flex flex-col flex-wrap bg-gray-200 w-[80%] md:w-[97%] rounded-md mb-4 dark:bg-[#292929d2]">
      <span className='absolute w-[6px] h-28 bg-blue-400 rounded-l-md'></span>
      <div className='flex flex-row justify-between items-center w-[100%]'>
        <h3 className='text-[.9rem] md:text-[.8rem] font-bold ml-2'>Blog Title</h3>
        </div>
    </div>
  );
}

export default BlogContent;
