import React from 'react';
import blogData from '../../../data/blogData.json';
import Link from 'next/link';

const page = () => {
    return (
        <div>
            <h1> is blog</h1>
            
            <ul>
                {blogData.map((post) => (
                <li key={post.id}>
                    <Link href="/blog/[id]" as={`/blog/${post.id}`}>
                        {post.title}
                    </Link>
                </li>
                ))}
            </ul>
        </div>
    );
};

export default page;