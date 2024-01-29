import axios from 'axios';

export const fetchTags = async () => {
  const response = await axios.get(
    `${import.meta.env.VITE_APP_BACKEND_URL}/tags`
  );
  const tags = await response.data;

  return tags;
};

export const fetchBlogs = async () => {
  const response = await axios.get(
    `${import.meta.env.VITE_APP_BACKEND_URL}/blog`
  );
  const blogs = await response.data;

  return blogs;
};

export const fetchBlogById = async slug => {
  const response = await axios.get(
    `${import.meta.env.VITE_APP_BACKEND_URL}/blog/${slug}`
  );
  const blog = await response.data;

  return blog;
};

export const updateViewCount = async slug => {
  console.log("I am called", slug);
  await axios.patch(
    `${import.meta.env.VITE_APP_BACKEND_URL}/blog/viewCount/${slug}`
  );

}
