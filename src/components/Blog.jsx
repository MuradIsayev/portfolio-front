import { useContext } from 'react';
import { ThemeContext } from '../App';
import NavBar from './NavBar';
import './navbar-cont.css';
import './Blog.css';
import BlogContent from './BlogContent';

function Blog() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="navbar-container">
      <NavBar />
      <div
        className="blogs-container"
        id={theme}
        style={{ backgroundColor: 'transparent' }}
      >
        <h2>Blog</h2>
        <BlogContent />
        <BlogContent />
        <BlogContent />
      </div>
    </div>
  );
}

export default Blog;
