import { useEffect, useState } from 'react';
import NavBar from '../NavBar/NavBar';
import './Blog.css';
import BlogContent from './BlogContent';
import { Client } from '@notionhq/client';
import axios from 'axios';

const client = new Client({
  auth: import.meta.env.VITE_APP_NOTION_KEY,
});

const Blog = () => {
  const [data, setData] = useState([]);
  const [blogData, setBlogData] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3001/api/blogs/f5349c902cdf45deafe570f1f9bc1fd4').then(response => {
      setData(response?.data);
      console.log(response?.data);
    });
  }, []);

  useEffect(() => {
    axios.get('http://localhost:3001/api/blogs').then(response => {
      setBlogData(response?.data);
    });
  }, []);

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
        <div>
          {blogData?.map(({id, title, description, minsRead, createdAt }) => {
            return (
              <BlogContent key={id} title={title} description={description} minsRead={minsRead} createdAt={createdAt} />
            )
          })}
        </div>
        {/* <div>
          {data?.map((block) => {
            const { type, [type]: content } = block;

            switch (type) {
              case "heading_3":
                return (
                  <h3 key={block.id} style={{ color: content.color, marginTop: '2rem' }}>
                    {content?.text.map((text, index) => (
                      <span
                        key={`${block.id}-text-${index}`}
                        style={{
                          fontWeight: text.annotations?.bold ? 'bold' : 'normal',
                          fontStyle: text.annotations?.italic ? 'italic' : 'normal',
                          textDecoration: text.annotations?.underline ? 'underline' : 'none',
                          color: text?.annotations?.color,
                        }}
                      >
                        {text.plain_text}
                      </span>
                    ))}
                  </h3>
                );
              case "paragraph":
                return (
                  <p key={block.id} style={{ color: content.color }}>
                    {content?.text.map((text, index) => (
                      <span
                        key={`${block.id}-text-${index}`}
                        style={{
                          fontWeight: text.annotations?.bold ? 'bold' : 'normal',
                          fontStyle: text.annotations?.italic ? 'italic' : 'normal',
                          textDecoration: text.annotations?.underline ? 'underline' : 'none',
                          color: text?.annotations?.color,
                        }}
                      >
                        {text.plain_text}
                      </span>
                    ))}
                  </p>
                );
              case "bulleted_list_item":
                return (
                  <ul key={block.id} style={{ color: content.color, listStyleType: 'disc', marginLeft: '20px' }} >
                    <li>
                      {content?.text.map((text, index) => (
                        <span
                          key={`${block.id}-text-${index}`}
                          style={{
                            fontWeight: text.annotations?.bold ? 'bold' : 'normal',
                            fontStyle: text.annotations?.italic ? 'italic' : 'normal',
                            textDecoration: text.annotations?.underline ? 'underline' : 'none',
                            color: text?.annotations?.color,
                          }}
                        >
                          {text.plain_text}
                        </span>
                      ))}
                    </li>
                  </ul>
                );
              default:
                return null;
            }
          })}
        </div> */}
      </div>
    </div>
  );
}

export default Blog;
