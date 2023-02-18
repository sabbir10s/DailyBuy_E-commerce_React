import React from 'react';
import { BlogsData } from '../../../StaticData/BlogsData';
import BlogCard from './BlogCard';

const Blogs = () => {

    return (
        <div className='container mt-[80px] lg:mt-[30px]'>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 justify-center gap-[28px]'>
                {
                    BlogsData.map(blog=><BlogCard blog={blog} key={blog._id}/>)
                }
            </div>
        </div>
    );
};

export default Blogs;