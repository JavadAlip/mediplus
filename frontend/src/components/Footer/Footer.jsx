import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className='pb-10 pt-5' >
      <div className='container'>
        <div className='flex justify-between flex-col flex-wrap gap-[30px]' >
          <div>
            <p className='text-[16px] leading-7 font-[400] text-textColor text-center'>
              © 2023 Designed by <a href="https://github.com/JavadAlip" target="_blank" rel="noopener noreferrer">JAVAD</a> All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer