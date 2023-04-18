import './Blog.css';

const BlogContent = () => {
  return (
    <div className="blog-container">
      <a href="#" className="blog-links">
        <div className="blog-fist-content">
          <p className="blog-header-date">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit
          </p>
          <p className="blog-date">NOV 18, 2023</p>
        </div>
        <p className="view-counter">999 views</p>
      </a>
    </div>
  );
}

export default BlogContent;
