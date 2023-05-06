import { useEffect, useState } from 'react';
import NavBar from '../NavBar/NavBar';
import BlogContent from './BlogContent';
import axios from 'axios';
import BlogDetails from './BlogDetails';

const Blog = () => {
  const [blogData, setBlogData] = useState([]);
  const [selectedBlogId, setSelectedBlogId] = useState(null); // initialize the selected blog id to null

  useEffect(() => {
    axios.get('http://localhost:3001/api/blogs').then(response => {
      setBlogData(response?.data);
    });
  }, []);

  const handleBlogSelection = (blogId) => {
    setSelectedBlogId(blogId);
  };

  return (
    <div className="main-container">
      <div className="navbar-container">
        <NavBar />
      </div>
      <div
        className="mt-32 w-[90%] md:w-[100%] md:mt-20"
      >
        <div className='flex flex-row justify-between w-[80%] md:w-[95%] items-center'>
          <h2 className='headers'>Blog</h2>
          <span className='mr-2 text-[.92rem] md:text-[.65rem] font-bold'>{blogData.length} articles</span>
        </div>
        {selectedBlogId ? ( // conditionally render the BlogDetails component if a blog is selected
          <BlogDetails blogId={selectedBlogId} />
        ) : (
          <>
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
    </div>
  );
}

export default Blog;
