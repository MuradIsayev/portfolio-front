import { useEffect, useMemo, useState } from 'react';
import BlogContent from './BlogContent';
import axios from 'axios';
import BlogDetails from './BlogDetails';
import BlogTags from './BlogTags';
import { Link } from 'react-router-dom';
import './test.scss';

const Blog = () => {
  const [blogData, setBlogData] = useState([]);
  const [selectedBlogId, setSelectedBlogId] = useState(null); // initialize the selected blog id to null
  const [selectedBlogTitle, setSelectedBlogTitle] = useState(null);
  const [selectedBlogCreatedAt, setSelectedBlogCreatedAt] = useState(null);
  const [selectedBlogMinsRead, setSelectedBlogMinsRead] = useState(null);
  const [tags, setTags] = useState([]);
  const [randomPost, setRandomPost] = useState(null);


  useEffect(() => {
    Promise.all([
      axios.get(`${import.meta.env.VITE_APP_BACKEND_URL}/blogs`),
      axios.get(`${import.meta.env.VITE_APP_BACKEND_URL}/tags`),
      axios.get(`${import.meta.env.VITE_APP_BACKEND_URL}/blogs/random`),
    ]).then(([blogsResponse, tagsResponse, randomPostResponse]) => {
      setBlogData(blogsResponse?.data);
      setTags(tagsResponse?.data);
      setRandomPost(randomPostResponse?.data);
    });
  }, []);

  const handleBlogSelection = (blogId, title, createdAt, minsRead) => {
    setSelectedBlogId(blogId);
    setSelectedBlogTitle(title);
    setSelectedBlogCreatedAt(createdAt);
    setSelectedBlogMinsRead(minsRead);
  };

  const numberOfBlogs = useMemo(() => {
    return blogData?.length;
  }, [blogData]);


  let i = 0;
  return (
    <>
      <div
        className="mt-[7.3rem] w-[63%] md:w-[100%] md:mt-20"
      >
        {selectedBlogId ? ( // conditionally render the BlogDetails component if a blog is selected
          <BlogDetails blogId={selectedBlogId} setSelectedBlogId={setSelectedBlogId} title={selectedBlogTitle} minsRead={selectedBlogMinsRead} createdAt={selectedBlogCreatedAt} />
        ) : (
          <>
            <div className='flex flex-row justify-between w-[90%] md:w-[95%] items-center'>
              <h2 className='headers'>Blog</h2>
              <span className='text-[.92rem] md:text-[.65rem] font-bold'>{numberOfBlogs} articles</span>
            </div>
            <div>
              {blogData?.map(({ id, blockId, title, description, minsRead, createdAt, tags }) => {
                return (
                  <BlogContent
                    key={id}
                    id={id}
                    title={title}
                    blockId={blockId}
                    description={description}
                    minsRead={minsRead}
                    tags={tags}
                    createdAt={createdAt}
                    handleClick={handleBlogSelection} // pass the blog id to the handler function
                    testValue={i += 3}
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
          <Link to={`/blogs/${randomPost?.id}`} className='text-[#376ccf] opacity-75 hover:opacity-100 duration-75 ease-linear
           dark:text-[#4673c5]  dark:opacity-80 dark:hover:opacity-100 home-texts brackets brackets2'>{randomPost?.title}</Link>
        </div>
        <p className='headers text-lg mt-7'>Tags</p>
        <div className='flex flex-wrap flex-row gap-2 text-xs'>
          {tags?.map(({ tag }, index) => {
            return (
              <BlogTags
                key={index}
                tag={tag}
                setBlogData={setBlogData}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Blog;
