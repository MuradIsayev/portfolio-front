import NavBar from '../NavBar/NavBar';
import './Blog.css';
import BlogContent from './BlogContent';

function Blog() {
  return (
    <div className="main-container">
      <div className="navbar-container navbar-class-block">
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
