import NavBar from '../NavBar/NavBar';
import './Blog.css';
import BlogContent from './BlogContent';

const Blog = () => {
  return (
    <div className="main-container">
      <div className="navbar-container">
        <NavBar />
      </div>
      <div
        className="blogs-container"
        style={{ backgroundColor: 'transparent' }}
      >
        <div>
          <h2 className='headers'>Blog</h2>
        </div>
        <BlogContent />
        <BlogContent />
      </div>
    </div>
  );
}

export default Blog;
