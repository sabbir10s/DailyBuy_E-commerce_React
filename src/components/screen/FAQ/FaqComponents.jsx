import React from 'react';
import FaqForm from './FaqForm';
import Questions from './Questions';
// import profile from '../../assets/icon/Profile.png' import wallet from
// '../../assets/icon/wallet.png' import refund from
// '../../assets/icon/refund.png' import { MdOutlineNavigateNext } from
// 'react-icons/md';

const FaqComponents = () => {
    return (
        <div className="container mt-[100px]  lg:mt-[50px]">
            <div className=''>
                <div className='flex flex-col items-center justify-center text-center'>
                    <h1 className='text-[#383838] text-xl md:text-3xl lg:text-4xl font-bold'>How can help you?</h1>
                    <div className=' w-full md:w-[500px]'>
                        <p className='text-[#626463] text-sm md:text-lg mt-[8px]'>A wonderful serenity
                            has taken possession of my entire soul, like these sweet mornings.</p>
                    </div>
                </div>

                <div className='flex justify-center'>
                    <div className=" w-full md:w-[472px] relative mt-[35px] mb-[50px]">
                        <input
                            placeholder="I'm looking for..."
                            type="text"
                            className="py-3 px-5 border border-gray-200/80 w-[86%] focus:outline-primary-600 rounded-l-md bg-gray-50"/>
                        <button
                            className="bg-primary-600 text-white p-3 w-[14%] h-full rounded-r-md absolute top-0 right-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6 inline-block">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div
                className="md:bg-gray-50 rounded-[5px] md:py-10 md:px-8 mb-10 ">
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                    <Questions/>
                    <FaqForm/>
                </div>
            </div>
            {/* <div className='flex flex-col lg:flex-row items-center justify-around gap-5 lg:gap-10'>
                <div className='border-[1px] border-[#E9E9E9] rounded-[10px] w-full lg:w-[417px] card p-[10px] md:p-[24px]'>
                    <div className='bg-[#E6F6F3] w-10 h-10 rounded-full flex justify-center items-center'>
                        <img src={profile} alt="" />
                    </div>
                    <h1 className='text-[#383838] text-xl font-bold mt-[16px] mb-[8px]'>Account</h1>
                    <div className='flex items-start gap-1 text-sm text-[#626463]'>
                    <span className='mt-1'><MdOutlineNavigateNext/></span>
                    <p>wonderful serenity has taken possession ?</p>
                    </div>
                    <div className='flex items-start gap-1 text-sm text-[#626463] mt-[8px]'>
                    <span className='mt-1'><MdOutlineNavigateNext/></span>
                    <p>wonderful serenity has taken possession ?</p>
                    </div>
                    <div className='flex items-start gap-1 text-sm text-[#626463] mt-[8px]'>
                    <span className='mt-1'><MdOutlineNavigateNext/></span>
                    <p>wonderful serenity has taken possession ?</p>
                    </div>
                    <div className='flex items-start gap-1 text-sm text-[#626463] mt-[8px]'>
                    <span className='mt-1'><MdOutlineNavigateNext/></span>
                    <p>wonderful serenity has taken the possession by the pasion?</p>
                    </div>
               <button className='text-primary-600 text-sm font-semibold mt-[32px]'>Show All</button>
                </div>
                <div className='border-[1px] border-[#E9E9E9] rounded-[10px] w-full lg:w-[417px] card p-[10px] md:p-[24px]'>
                    <div className='bg-[#E6F6F3] w-10 h-10 rounded-full flex justify-center items-center'>
                        <img src={wallet} alt="" />
                    </div>
                    <h1 className='text-[#383838] text-xl font-bold mt-[16px] mb-[8px]'>Payment</h1>
                    <div className='flex items-start gap-1 text-sm text-[#626463]'>
                    <span className='mt-1'><MdOutlineNavigateNext/></span>
                    <p>wonderful serenity has taken possession ?</p>
                    </div>
                    <div className='flex items-start gap-1 text-sm text-[#626463] mt-[8px]'>
                    <span className='mt-1'><MdOutlineNavigateNext/></span>
                    <p>wonderful serenity has taken possession ?</p>
                    </div>
                    <div className='flex items-start gap-1 text-sm text-[#626463] mt-[8px]'>
                    <span className='mt-1'><MdOutlineNavigateNext/></span>
                    <p>wonderful serenity has taken possession ?</p>
                    </div>
                    <div className='flex items-start gap-1 text-sm text-[#626463] mt-[8px]'>
                    <span className='mt-1'><MdOutlineNavigateNext/></span>
                    <p>wonderful serenity has taken the possession by the pasion?</p>
                    </div>
               <button className='text-primary-600 text-sm font-semibold mt-[32px]'>Show All</button>
                </div>
                <div className='border-[1px] border-[#E9E9E9] rounded-[10px] w-full lg:w-[417px] card p-[10px] md:p-[24px]'>
                    <div className='bg-[#E6F6F3] w-10 h-10 rounded-full flex justify-center items-center'>
                        <img src={refund} alt="" />
                    </div>
                    <h1 className='text-[#383838] text-xl font-bold mt-[16px] mb-[8px]'>Refund</h1>
                    <div className='flex items-start gap-1 text-sm text-[#626463]'>
                    <span className='mt-1'><MdOutlineNavigateNext/></span>
                    <p>wonderful serenity has taken possession ?</p>
                    </div>
                    <div className='flex items-start gap-1 text-sm text-[#626463] mt-[8px]'>
                    <span className='mt-1'><MdOutlineNavigateNext/></span>
                    <p>wonderful serenity has taken possession ?</p>
                    </div>
                    <div className='flex items-start gap-1 text-sm text-[#626463] mt-[8px]'>
                    <span className='mt-1'><MdOutlineNavigateNext/></span>
                    <p>wonderful serenity has taken possession ?</p>
                    </div>
                    <div className='flex items-start gap-1 text-sm text-[#626463] mt-[8px]'>
                    <span className='mt-1'><MdOutlineNavigateNext/></span>
                    <p>wonderful serenity has taken the possession by the pasion?</p>
                    </div>
               <button className='text-primary-600 text-sm font-semibold mt-[32px]'>Show All</button>
                </div>

            </div> */}
        </div>
    );
};

export default FaqComponents;