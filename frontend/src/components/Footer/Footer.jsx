import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className='pb-16 pt-10' >
    <div className='container'>
      <div className='flex justify-between flex-col flex-wrap gap-[30px]' >
        <div>
        
       <p className='text-[16px] leading-7 font-[400] text-textColor text-center' >Copyright @2023 developed by JAVAD all right reserved.</p>
        </div>
      </div>
    </div>
    </footer>
  )
}

export default Footer