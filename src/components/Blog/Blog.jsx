import { useContext } from 'react';
import { ThemeContext } from '../../App';
import NavBar from '../NavBar/NavBar';
import '../NavBar/navbar-cont.css'
import './Blog.css';
import BlogContent from './BlogContent';

function Blog() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className='main-container'>
      <div className="navbar-container navbar-class-block">
      <NavBar />
      </div>    
      <div
        className="blogs-container"
        id={theme}
        style={{ backgroundColor: 'transparent' }}
      >
        <div>
        <h2>Blog</h2>
        </div>
        <BlogContent />
        <BlogContent />
      </div>
    </div>
    
  );
}

export default Blog;
