import { useContext } from 'react';
import { ThemeContext } from '../../App';
import './Blog.css';

function BlogContent() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="blog-container" id={theme}>
      <a href="#" className='blog-links'>
        <p className="blog-header">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit
        </p>
        <p className="view-counter">999 views</p>
      </a>
    </div>
  );
}

export default BlogContent;
