import './Blog.css';

const BlogContent = () => {
  return (
    <div className="h-[6.8rem] md:h-24 flex flex-col flex-wrap cursor-pointer transition ease-linear duration-150 hover:outline hover:outline-[2px] hover:outline-[#8ab2c5] w-[80%] md:w-[97%] rounded-md mb-3 md:mb-3">
      {/* <span
        className='absolute w-[5px] md:w-[4px] h-[6.8rem] md:h-24 bg-blue-300 rounded-l-md'
      ></span> */}
      <div className='flex flex-row flex-wrap justify-center items-center max-w-[100%] md:max-w-[95%] mt-1 ml-2 md:ml-1'>
        <div className='flex flex-col justify-center items-center mb-1'>
          <h3 className='text-[.9rem] md:text-[.71rem] font-bold'>Blog Title</h3>
          <div className='text-[.68rem] md:text-[.71rem] text-gray-600 font-semibold'>June 8, 2023 | 1min read.</div>
        </div>
        <div className='text-[.85em] md:text-[.65rem] '>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem ipsam repellendus a accusamus asperiores expedita soluta praesentium? Odit, reprehenderit. Quisquam.
        </div>
      </div>
    </div>
  );
}

export default BlogContent;
