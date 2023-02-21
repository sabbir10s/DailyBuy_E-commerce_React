import React from 'react';
import '../../../styles/invoice.css'
const InvoiceBanner = () => {
    return (
        <>
           
           <div className='container mt-[80px] lg:mt-0'>
                <div className='bg-primary-500 rounded-[10px] text-white text-[14px] lg:text-[18px]'>
                    <div className='banner-bg'>
                    <div className='flex flex-col md:flex-row justify-between p-[14px] md:p-[30px] lg:p-[71px] gap-[26px]'>
                        <div>
                            <h1 className='uppercase font-semibold text-[16px] md:text-[24px]'>Invoice</h1>
                            <p><span className='text-white/70 font-normal'>Invoice No:</span> 254 45487 54</p>
                            <p><span className='text-white/70 font-normal'>Issued Date</span> 11 Jan 2023</p>
                            <p><span className='text-white/70 font-normal'>Due Date:</span> 15 Jan 2023</p>
                        </div>
                        <div className='max-w-[200px]'>
                            <h1 className='uppercase font-semibold text-[16px] md:text-[24px]'>billing to</h1>
                             <p>Ismail Hussain Kasba, Brahmanbaria, Bangladesh</p>
                        </div>

                    </div>
                    </div>
                </div>
           </div>
        </>
    );
};

export default InvoiceBanner;