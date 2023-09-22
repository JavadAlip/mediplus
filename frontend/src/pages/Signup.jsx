import React from 'react'
import signupImg from '../assets/images/doc.gif'

const Signup = () => {
  return <section className='px-5 xl:px-0'>
      <div className='max-w-[1170px] mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
          {/* img box */}
          <div className='hidden lg:block bg-greenColor rounded-l-lg'>
            <figure className='rounded-l-lg'>
              <img src={signupImg} alt="" />
            </figure>
          </div>
          {/* signup forum */}
          <div className='rounded-l-lg lg:pl-16 py-10'>
            <h3 className='text-primaryColor text-[22px] leading-7 font-bold'>Create an <span className='text-greenColor'>Account!</span></h3>
          </div>

        </div>
      </div>
    </section>
  
}

export default Signup;