import './Blog.css';

const BlogContent = () => {
  return (
    <div className="h-[7.7rem]  md:h-24 flex flex-col flex-wrap justify-center cursor-pointer transition duration-150 
                    ease-linear hover:outline hover:outline-[2px] hover:outline-[#8ab2c5] dark:hover:outline-[#2c4a58] w-[80%] 
                    md:w-[97%] rounded-md mb-7 md:mb-5 mt-1.5">
      {/* <span
        className='absolute w-[5px] md:w-[4px] h-[6.8rem] md:h-24 bg-blue-300 rounded-l-md'
      ></span> */}
      <div className='flex flex-row flex-wrap justify-center items-center md:justify-start max-w-[100%] md:max-w-[95%] ml-2 md:ml-1'>
        <div className='flex flex-col justify-center items-center md:items-start md:mb-3 mb-4'>
          <h3 className='text-[1.1rem] md:text-[.79rem] font-medium'>Blog Title</h3>
          <div className='flex gap-1 md:gap-[3px] text-[.75rem] md:text-[.53rem] text-gray-400 dark:text-[#a7a4a4]'>
            <span className='dark:hover:text-[#fff] hover:text-[#000] duration-100 
                    ease-linear'>June 8, 2023</span>
            <span>|</span>
            <span className='dark:hover:text-[#fff] hover:text-[#000] duration-100 
                    ease-linear'>3 min read</span>
          </div>
        </div>
        <div className='text-[.91rem] md:text-[.6rem] '>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem ipsam repellendus a 
          accusamus asperiores expedita soluta praesentium? Odit, reprehenderit. Quisquam.
        </div>
      </div>
    </div>
  );
}

export default BlogContent;
