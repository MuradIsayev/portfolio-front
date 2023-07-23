import axios from "axios";
import './test.scss'

const handleTagClick = async (tag, setBlogData) => {
    await axios
        .get(`${import.meta.env.VITE_APP_BACKEND_URL}/blogs/search?tag=${tag}`)
        .then((response) => {
            setBlogData(response?.data); // logs the filtered blogs array
        })
        .catch((error) => {
            console.log(error);
        });
};

const BlogTags = ({ tag, setBlogData }) => {
    return (
        <div>
            <div
                onClick={() => handleTagClick(tag, setBlogData)}
                className="brackets  text-[#d31a1a] opacity-75 hover:opacity-100 duration-75 ease-linear
                         dark:text-[#be6060]"
            >
                {tag}
            </div>
        </div>
    );
};

export default BlogTags;