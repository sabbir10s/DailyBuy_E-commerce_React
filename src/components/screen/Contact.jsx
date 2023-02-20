import React from 'react';
import MenuBar from '../shared/MenuBar';
import map from '../../assets/contact/map.png'
import '../../styles/contact.css'

const Contact = () => {
    return (
        <>
            <MenuBar/>
            <div className='mb-8 mt-[80px] lg:mt-[52px] flex flex-col gap-[25px] md:gap-[40px] lg:gap-[56px]'>
               <div className='map w-full'>
                  <img className='w-full' src={map} alt="" />
               </div>

               <div className='container grid lg:grid-cols-3 items-end'>

                    <div className='flex flex-col gap-[44px] order-2 lg:order-1 mt-[28px] lg:mt-0'>
                        <div>
                            <h2 className='mb-[8px] font-bold text-[24px]'><span className='text-primary-500'>E</span>mail</h2>
                            <p className='text-[18px]'>yourmail@mail.com</p>
                        </div>
                        <div>
                            <h2 className='mb-[8px] font-bold text-[24px]'><span className='text-primary-500'>P</span>hone</h2>
                            <p className='text-[18px]'>+123 1234 1234</p>
                            <p className='text-[18px]'>+123 1234 1234</p>
                        </div>
                        <div>
                            <h2 className='mb-[8px] font-bold text-[24px]'><span className='text-primary-500'>A</span>ddress</h2>
                            <p className='text-[18px] max-w-[250px]'>3612 University Hill Road Sadorus, IL 61872</p>
                        </div>
                        <div>
                            <h2 className='mb-[8px] font-bold text-[24px]'><span className='text-primary-500'>H</span>our Of Opening</h2>
                            <p className='text-[18px]'>Mon - Fri: 08:00 - 20:00 </p>
                            <p className='text-[18px]'>Mon - Fri: 08:00 - 20:00  </p>
                        </div>
                    </div>

                    <div className='w-full lg:col-span-2 order-1 lg:order-2'>
                        <div className='text-center'>
                            <h1 className='text-[#383838] text-[20px] md:text-[25px] lg:text-[32px] font-bold'>Feel free contract with us</h1>
                            <p className='text-[#626463] text-[12px] md:text-[16px] max-w-[400px] mx-auto mt-[8px]'>A wonderful serenity has taken possession of my entire soul, like these sweet mornings.</p>
                        </div>
                            <form className='flex flex-col gap-[20px] mt-[32px]' action="">
                                <div className='flex flex-col lg:flex-row items-center gap-[32px]'>
                                    <input className='border-[1px] border-[#919EAB]/30 focus:outline-primary-600 rounded-[8px] py-[16px] px-[14px] w-full' type="text" name="fullName" id="fullName" placeholder='Full name' />
                                    <input className='border-[1px] border-[#919EAB]/30 focus:outline-primary-600 rounded-[8px] py-[16px] px-[14px] w-full' type="email" name="email" id="email" placeholder='Email address' />
                                </div>
                                <div className='flex flex-col lg:flex-row items-center gap-[32px]'>
                                    <input className='border-[1px] border-[#919EAB]/30 focus:outline-primary-600 rounded-[8px] py-[16px] px-[14px] w-full' type="text" name="subject" id="subject" placeholder='Subject' />
                                    <input className='border-[1px] border-[#919EAB]/30 focus:outline-primary-600 rounded-[8px] py-[16px] px-[14px] w-full' type="number" name="phone" id="phone" placeholder='Phone' />
                                </div>
                                <div className=''>
                                    <textarea className='border-[1px] border-[#919EAB]/30 focus:outline-primary-600 rounded-[8px] py-[16px] px-[14px] w-full' name="message" id="message" cols="30" rows="9" placeholder='Message'></textarea>
                                </div>
                                <button className=' bg-primary-600 text-white text-lg w-full py-[13px] rounded-[5px]'>Submit Now</button>
                            </form>
                        </div>
                    </div>
            </div>
        </>
    );
};

export default Contact;