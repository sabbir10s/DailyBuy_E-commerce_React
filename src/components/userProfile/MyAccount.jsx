import React, { useState } from 'react';
import {FiEdit} from 'react-icons/fi';
const MyAccount = () => {
    const [active, setActive] =  useState(false)
    const data = {
        firstName: "sabbir",
        lastName: "ahmed",
        email: "sabbirahmed@gmail.com",
        mobile: "0186******",
        address: "Kashimpur, Faridpur, Dhaka, Bangladesh",
        state: "Dhaka",
        city: "Faridpur",
    }
    const {firstName, lastName} = data
    return (
        <div className='container'>
            <div className='border rounded-[10px] mt-[26px]'>
                <div className='px-5 pt-5 pb-3 flex items-center justify-between border-b'>
                    <p className='font-semibold'>Account Information</p>
                    <button onClick={()=>setActive(true)} className='flex items-center gap-1 text-[#999999]'><FiEdit/>
                        <span>Edit</span>
                    </button>
                </div>
                <form className='p-5'>
                    <div className='flex items-center gap-[90px]'>
                        <div>
                            <label className='block text-gray-400' htmlFor="firstName">First Name</label>
                            {
                                !active && <p className='font-semibold mt-[5px]'>{firstName}</p>
                            }
                            {
                                active && <input
                                className=' font-semibold mt-[5px] border p-2 rounded-[5px]'
                                type="text"
                                id='firstName'
                                autofocus="autofocus"
                                value={firstName}/>
                            }
                        </div>
                        <div>
                            <label className='block text-gray-400' htmlFor="lastName">Last Name</label>
                            {
                                !active && <p className='font-semibold mt-[5px]'>{lastName}</p>
                            }
                            {
                                active && <input
                                className=' font-semibold mt-[5px] border p-2 rounded-[5px]'
                                type="text"
                                id='lastName'
                                value={lastName}/>
                            }
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MyAccount;