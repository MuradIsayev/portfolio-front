import axios from 'axios';

export const fetchTags = async () => {
    const response = await axios.get(`${import.meta.env.VITE_APP_BACKEND_URL}/tags`);
    const tags = await response.data;

    return tags;
}

export const fetchRandomPost = async () => {
    const response = await axios.get(`${import.meta.env.VITE_APP_BACKEND_URL}/blogs/random`);
    const randomBlog = await response.data;

    return randomBlog;
}

export const fetchBlogs = async () => {
    const response = await axios.get(`${import.meta.env.VITE_APP_BACKEND_URL}/blogs`);
    const blogs = await response.data;

    return blogs;
}