import React from 'react';
import MenuBar from '../shared/MenuBar';
import map from '../../assets/contact/map.png'
import '../../styles/contact.css'

const Contact = () => {
    return (
        <>
            <MenuBar/>
            <div className='container mb-8 mt-[80px] lg:mt-[52px] flex flex-col gap-[25px] md:gap-[40px] lg:gap-[56px]'>
               <div className='flex justify-center'>
                    <div className='flex flex-col items-center justify-center text-center'>
                        <h1 className='text-[#383838] text-xl md:text-3xl lg:text-5xl font-bold'>We’d love to hear from you</h1>
                        <div className=' w-full md:w-[600px]'>
                        <p className='text-[#626463] text-sm md:text-lg mt-[8px]'>A wonderful serenity has taken possession of my entire soul, like these sweet mornings.</p>
                        </div>
                    </div>

               </div>
               <div className='flex justify-center'>
                  <img className='lg:w-[700px]' src={map} alt="" />
               </div>

               <div className='flex flex-col md:flex-row items-center justify-around gap-5 lg:gap-10'>
                    <div className='border-[1px] border-[#E9E9E9] rounded-[10px] w-full md:w-[300px] lg:w-[400px] h-[150px] lg:h-[200px] card flex flex-col items-center justify-center '>
                        <h2 className='font-bold text-2xl mb-[8px]'><span className='text-primary-500'>E</span>mail</h2>
                        <p>yourmail@mail.com</p>
                    </div>
                    <div className='border-[1px] border-[#E9E9E9] rounded-[10px] w-full md:w-[300px] lg:w-[400px] h-[150px] lg:h-[200px] card flex flex-col items-center justify-center '>
                        <h2 className='font-bold text-2xl mb-[8px]'><span className='text-primary-500'>P</span>hone</h2>
                        <p>+123 1234 1234</p>
                    </div>
                    <div className='border-[1px] border-[#E9E9E9] rounded-[10px] w-full md:w-[300px] lg:w-[400px] h-[150px] lg:h-[200px] card flex flex-col items-center justify-center '>
                        <h2 className='font-bold text-2xl mb-[8px]'><span className='text-primary-500'>A</span>ddress</h2>
                        <p>3612 University Hill Road Sadorus, IL 61872</p>
                    </div>
               </div>

               <div className='text-center w-full lg:w-[766px] mx-auto'>
                    <h1 className='text-[#383838] text-xl md:2xl lg:text-3xl font-bold'>Feel free contract with us</h1>
                    <p className='text-[#626463] text-sm md:text-lg mt-[8px]'>A wonderful serenity has taken possession of my entire soul, like these sweet mornings.</p>

                    <form className='mt-[36px] flex flex-col gap-[20px]' action="">
                        <div className='flex flex-col lg:flex-row items-center gap-[32px]'>
                            <input className='border-[1px] border-[#919EAB]/30 focus:outline-primary-600 rounded-[8px] py-[16px] px-[14px] w-full' type="text" name="fullName" id="fullName" placeholder='Full name' />
                            <input className='border-[1px] border-[#919EAB]/30 focus:outline-primary-600 rounded-[8px] py-[16px] px-[14px] w-full' type="email" name="email" id="email" placeholder='Email address' />
                        </div>
                        <div className='flex flex-col lg:flex-row items-center gap-[32px]'>
                            <input className='border-[1px] border-[#919EAB]/30 focus:outline-primary-600 rounded-[8px] py-[16px] px-[14px] w-full' type="text" name="subject" id="subject" placeholder='Subject' />
                            <input className='border-[1px] border-[#919EAB]/30 focus:outline-primary-600 rounded-[8px] py-[16px] px-[14px] w-full' type="number" name="phone" id="phone" placeholder='Phone' />
                        </div>
                        <div className=''>
                            <textarea className='border-[1px] border-[#919EAB]/30 focus:outline-primary-600 rounded-[8px] py-[16px] px-[14px] w-full' name="message" id="message" cols="30" rows="6" placeholder='Message'></textarea>
                        </div>
                        <button className=' bg-primary-600 text-white text-lg w-full py-[13px] rounded-[5px]'>Submit Now</button>
                    </form>
               </div>
            </div>
        </>
    );
};

export default Contact;