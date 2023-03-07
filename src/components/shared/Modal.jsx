import React, { useState } from 'react';
import SignIn from '../../pages/SignIn';
import SignUp from '../../pages/SignUp';
import TermsCondition from '../../pages/TermsCondition';

const Modal = ({visible, onClose}) => {
    const [path, setPath] = useState('signIn')
  if (!visible) 
    return null
  return (
    <div
      className='z-50 fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center'>
      <div className='relative'>
        <div className='bg-white rounded-[10px]'>
          <div className='flex justify-end absolute top-2 right-2'>
            <button className='bg-black text-white w-8 h-8 rounded-full' onClick={onClose}>X</button>
          </div>
          {
            path === "signIn" && <SignIn setPath={setPath}/>
          }
          {
            path ==='signUp' && <SignUp setPath={setPath} />
          }
          {
            path ==='terms' && <TermsCondition setPath={setPath} />
          }
        </div>
      </div>
    </div>
  );
};

export default Modal;