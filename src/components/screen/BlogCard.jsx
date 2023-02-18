import React from 'react';

const BlogCard = ({blog}) => {
    const {date, blog_title, img} = blog
    return (
        <div className='border-[1px] border-[#E9E9E9] rounded-[12px] max-w-[400px]'>
            <img className='rounded-t-[12px]' src={img} alt="" />
            <div className='p-[21px]'>
                <h1 className='font-bold text-[16px] md:text-[20px] lg:text-[24px]'>{blog_title}</h1>
                <div className='my-[12px] h-[1px] bg-[#E9E9E9]'></div>
                <div className='flex items-center justify-between text-[12px]'>
                    <button className='hover:text-[#00B8D9] font-semibold uppercase '>Vegetable</button>
                    <p className='text-[#6F757D]'>{date}</p>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;