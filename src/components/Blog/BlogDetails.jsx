import { useEffect, useState } from 'react';
import axios from 'axios';


const BlogDetails = ({ blogId }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3001/api/blogs/${blogId}`).then(response => {
            setData(response?.data);
        });
    }, [blogId]);

    return (
        <div>
            {<div>
                {data?.map((block) => {
                    const { type, [type]: content } = block;

                    switch (type) {
                        case "heading_3":
                            return (
                                <h3 key={block.id} style={{ color: content.color, marginTop: '2rem' }}>
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
                                </h3>
                            );
                        case "paragraph":
                            return (
                                <p key={block.id} style={{ color: content.color }}>
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
                                <ul key={block.id} style={{ color: content.color, listStyleType: 'disc', marginLeft: '20px' }} >
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
                                <ol key={block.id} style={{ color: content.color, listStyleType: 'decimal', marginLeft: '20px' }} >
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
                                    style={{ maxWidth: '100%' }}
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
