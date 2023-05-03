import './Blog.css';

const BlogContent = () => {
  return (
    <div className="h-[7.7rem] md:h-24 flex flex-col flex-wrap cursor-pointer transition duration-150 
                    ease-linear hover:outline hover:outline-[2px] hover:outline-[#8ab2c5] w-[80%] 
                    md:w-[97%] rounded-md mb-3 md:mb-2">
      {/* <span
        className='absolute w-[5px] md:w-[4px] h-[6.8rem] md:h-24 bg-blue-300 rounded-l-md'
      ></span> */}
      <div className='flex flex-row flex-wrap justify-center items-center max-w-[100%] md:max-w-[95%] mt-1 ml-2 md:ml-1'>
        <div className='flex flex-col justify-center gap-1 md:gap-0 items-center mb-3 md:mb-1'>
          <h3 className='text-[1.1rem] md:text-[.79rem] font-medium'>Blog Title</h3>
          <div className='text-[.75rem] md:text-[.53rem] text-gray-400'>June 8, 2023 | 1min read.</div>
        </div>
        <div className='text-[.91rem] md:text-[.6rem] '>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem ipsam repellendus a accusamus asperiores expedita soluta praesentium? Odit, reprehenderit. Quisquam.
        </div>
      </div>
    </div>
  );
}

export default BlogContent;
