import axios from "axios";

const handleTagClick = async (tag, setBlogData) => {
    await axios.get(`http://localhost:3001/api/blogs/search?tag=${tag}`)
        .then(response => {
            setBlogData(response?.data); // logs the filtered blogs array
        }).catch(error => {
            console.log(error);
        });
};

const BlogTags = ({ tag, setBlogData }) => {
    return (
        <div>
            <div
                onClick={() => handleTagClick(tag, setBlogData)}
                className="badge badge-outline border-gray-300 p-3 hover:bg-[#ebebeb] cursor-pointer"
            >
                {tag}
            </div>
        </div>
    );
};

export default BlogTags;