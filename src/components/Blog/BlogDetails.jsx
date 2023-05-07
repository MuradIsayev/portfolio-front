import { useEffect, useState } from 'react';
import axios from 'axios';
import goback from '../../assets/goback.svg';


const BlogDetails = ({ blogId, title, minsRead, createdAt, setSelectedBlogId }) => {
    const [data, setData] = useState([]);

    const handleGoBack = () => {
        setSelectedBlogId(null);
    };


    useEffect(() => {
        axios.get(`http://localhost:3001/api/blogs/${blogId}`).then(response => {
            setData(response?.data);
        });
    }, [blogId]);

    return (
        <div>
            <div className='flex flex-row justify-between w-[60%] items-center'
            >
                <div onClick={handleGoBack} className='flex items-center gap-[6px] cursor-pointer text-[#5f5f5f] opacity-70 hover:opacity-100 duration-75 ease-linear'>
                    <img src={goback} alt='goback' className='w-6' />
                    <span className='text-[1rem] md:text-[.65rem] font-medium'>Back to blog</span>
                </div>
                <div className='flex flex-col items-center md:items-start mb-4'>
                    <h3 className='text-[1.75rem] md:text-[1.33rem] font-medium'>{title}</h3>
                    <div className='flex gap-1 md:gap-[3px] text-[.82rem] md:text-[.58rem] text-gray-400 dark:text-[#a7a4a4]'>
                        <span className='dark:hover:text-[#fff] hover:text-[#000] duration-100 
                    ease-linear'>{createdAt}</span>
                        <span>|</span>
                        <span className='dark:hover:text-[#fff] hover:text-[#000] duration-100 
                    ease-linear'>{minsRead} min read</span>
                    </div>
                </div>
            </div>
            {<div>
                {data?.map((block) => {
                    const { type, [type]: content } = block;

                    switch (type) {

                        case "heading_3":
                            return (
                                <h3 className='md:text-[.9rem] text-[1.2rem] mt-6 md:mt-3' key={block.id} style={{ color: content.color, fontWeight: 'bold ' }}>
                                    {content?.text.map((text, index) => (
                                        <span
                                            key={`${block.id}-text-${index}`}
                                            style={{
                                                fontStyle: text.annotations?.italic ? 'italic' : 'normal',
                                                textDecoration: text.annotations?.underline ? 'underline' : 'none',
                                                color: text?.annotations?.color,
                                            }}
                                        >
                                            {text.plain_text}
                                        </span>
                                    ))}
                                </h3>
                            );

                        case "paragraph":
                            return (
                                <p className='md:text-[.76rem]' key={block.id} style={{ color: content.color }}>
                                    {content?.text.map((text, index) => (
                                        <span
                                            key={`${block.id}-text-${index}`}
                                            style={{
                                                fontWeight: text.annotations?.bold ? 'bold' : 'normal',
                                                fontStyle: text.annotations?.italic ? 'italic' : 'normal',
                                                textDecoration: text.annotations?.underline ? 'underline' : 'none',
                                                color: text?.annotations?.color,
                                            }}
                                        >
                                            {text.plain_text}
                                        </span>
                                    ))}
                                </p>
                            );

                        case "bulleted_list_item":
                            return (
                                <ul className='md:text-[.72rem]' key={block.id} style={{ color: content.color, listStyleType: 'disc', marginLeft: '20px' }} >
                                    <li>
                                        {content?.text.map((text, index) => (
                                            <span
                                                key={`${block.id}-text-${index}`}
                                                style={{
                                                    fontWeight: text.annotations?.bold ? 'bold' : 'normal',
                                                    fontStyle: text.annotations?.italic ? 'italic' : 'normal',
                                                    textDecoration: text.annotations?.underline ? 'underline' : 'none',
                                                    color: text?.annotations?.color,
                                                }}
                                            >
                                                {text.plain_text}
                                            </span>
                                        ))}
                                    </li>
                                </ul>
                            );

                        case "numbered_list_item":
                            return (
                                <ol className='md:text-xs' key={block.id} style={{ color: content.color, listStyleType: 'decimal', marginLeft: '20px' }} >
                                    <li>
                                        {content?.text.map((text, index) => (
                                            <span
                                                key={`${block.id}-text-${index}`}
                                                style={{
                                                    fontWeight: text.annotations?.bold ? 'bold' : 'normal',
                                                    fontStyle: text.annotations?.italic ? 'italic' : 'normal',
                                                    textDecoration: text.annotations?.underline ? 'underline' : 'none',
                                                    color: text?.annotations?.color,
                                                }}
                                            >
                                                {text.plain_text}
                                            </span>
                                        ))}
                                    </li>
                                </ol>
                            );

                        case "image":
                            return (
                                <img
                                    key={block.id}
                                    src={content?.file?.url}
                                    alt={content?.caption?.[0]?.plain_text}
                                    className='max-w-[70%] md:max-w-[90%] my-2'
                                />
                            );
                        default:
                            return null;
                    }
                })}
            </div>}
        </div>
    );
}

export default BlogDetails;
