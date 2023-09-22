import React from 'react'
import signupImg from "../assets/images/signup.gif"

const Signup = () => {
  return (
    <section className='px-5 xl:px-0'>
      <div className='max-w-[1170px] mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
          {/* img box */}
          <div className='hidden lg:block bg-primaryColor rounded-l-lg'>
            <figure className='rounded-l-lg'>
              <img src={signupImg} alt="" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Signup;