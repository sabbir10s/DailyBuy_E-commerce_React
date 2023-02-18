import React from 'react';
import { useNavigate } from 'react-router-dom';

const BlogCard = ({blog}) => {
    const {_id,date, blog_title, img, category} = blog
    const navigate = useNavigate()
    const handleBlogDetails = () => {
        navigate(`/blog/${_id}`)
    }
    return (
        <>
            <div onClick={()=>handleBlogDetails(_id)} className='border-[1px] border-[#E9E9E9] rounded-[12px] max-w-[400px] cursor-pointer'>
                <img className='rounded-t-[12px]' src={img} alt="" />
                <div className='p-[21px]'>
                    <h1 className='font-bold text-[16px] md:text-[20px] lg:text-[24px] text-left'>{blog_title}</h1>
                    <div className='my-[12px] h-[1px] bg-[#E9E9E9]'></div>
                    <div className='flex items-center justify-between text-[12px]'>
                        <button className='text-primary-600 font-semibold uppercase '>{category}</button>
                        <p className='text-[#6F757D]'>{date}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogCard;