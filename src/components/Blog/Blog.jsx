import { useEffect, useState } from 'react';
import NavBar from '../NavBar/NavBar';
import BlogContent from './BlogContent';
import axios from 'axios';
import BlogDetails from './BlogDetails';
import BlogTags from './BlogTags';

const Blog = () => {
  const [blogData, setBlogData] = useState([]);
  const [selectedBlogId, setSelectedBlogId] = useState(null); // initialize the selected blog id to null
  const [selectedBlogTitle, setSelectedBlogTitle] = useState(null);
  const [selectedBlogCreatedAt, setSelectedBlogCreatedAt] = useState(null);
  const [selectedBlogMinsRead, setSelectedBlogMinsRead] = useState(null);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/blogs').then(response => {
      setBlogData(response?.data);
    });
  }, []);

  useEffect(() => {
    axios.get('http://localhost:3001/api/tags').then(response => {
      setTags(response?.data);
    });
  }, []);

  const handleBlogSelection = (blogId, title, createdAt, minsRead) => {
    setSelectedBlogId(blogId);
    setSelectedBlogTitle(title);
    setSelectedBlogCreatedAt(createdAt);
    setSelectedBlogMinsRead(minsRead);
  };

  return (
    <div className="main-container">
      <div className="navbar-container">
        <NavBar />
      </div>
      <div
        className="mt-[7.3rem] w-[63%] md:w-[100%] md:mt-20"
      >
        {selectedBlogId ? ( // conditionally render the BlogDetails component if a blog is selected
          <BlogDetails blogId={selectedBlogId} setSelectedBlogId={setSelectedBlogId} title={selectedBlogTitle} minsRead={selectedBlogMinsRead} createdAt={selectedBlogCreatedAt} />
        ) : (
          <>
            <div className='flex flex-row justify-between w-[90%] md:w-[95%] items-center'>
              <h2 className='headers'>Blog</h2>
              <span className='text-[.92rem] md:text-[.65rem] font-bold'>{blogData.length} articles</span>
            </div>
            <div>
              {blogData?.map(({ id, blockId, title, description, minsRead, createdAt }) => {
                return (
                  <BlogContent
                    key={id}
                    title={title}
                    blockId={blockId}
                    description={description}
                    minsRead={minsRead}
                    createdAt={createdAt}
                    handleClick={handleBlogSelection} // pass the blog id to the handler function
                  />
                );
              })}
            </div>
          </>
        )}
      </div>
      <div className='flex flex-col items-start w-[27%] mt-[7.3rem] pl-1'>
        <p className='headers text-lg'>Random Post</p>
        <div>
          <a href='#' className='text-sky-600 hover:text-sky-800 home-texts'>Exciting New Features In Javascript</a>
        </div>
        <p className='headers text-lg mt-7'>Tags</p>
        <div className='flex flex-wrap flex-row gap-2 text-xs cursor-pointer'>
          {tags?.map(({ tag }, index) => {
            return (
              <BlogTags
                key={index}
                tag={tag}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Blog;
