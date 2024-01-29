import axios from "axios";

const handleTagClick = async (tag, setBlogData) => {
    await axios
        .get(`${import.meta.env.VITE_APP_BACKEND_URL}/blogs/search?tag=${tag}`)
        .then((response) => {
            setBlogData(response?.data);
        })
        .catch((error) => {
            console.log(error);
        });
};

const BlogTags = ({ tag }) => {
    return (
        <div
            className="text-neutral-500  text-[.75rem] md:text-[.55rem] font-medium"
        >
            #{tag}
        </div>
    );
};

export default BlogTags;