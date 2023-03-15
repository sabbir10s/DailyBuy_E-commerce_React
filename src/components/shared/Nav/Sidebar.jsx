import React from 'react';

const Sidebar = ({visible, onClose}) => {
    if (!visible) 
        return null
    return (
        <div 
            className='z-50 fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-start'>
            <div className='relative w-2/3'>
                <div className='bg-white w-full h-screen'>
                    <div className='flex justify-end absolute top-2 right-2'>
                        <button
                            className='bg-gray-200 text-gray-800 w-8 h-8 rounded-full text-sm'
                            onClick={onClose}>X</button>
                    </div>
                    <p>Hello from sidebar
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;