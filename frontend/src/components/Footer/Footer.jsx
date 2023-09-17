import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/mediplus1.png';

const Footer = () => {
  return (
    <footer className='pb-16 pt-10'>
    <div className='container'>
      <div className='flex justify-between flex-col md:flex-row flex-wrap gap-[30px]'>
        <div>
        <img src={logo} alt="" style={{ width: '110px', height: '32px' }} />
       <p className='text-[16px] leading-7 font-[400] text-textColor'  >Copyright @2023 developed by JAVAD all right reserved.</p>
        </div>
      </div>
    </div>
    </footer>
  )
}

export default Footer