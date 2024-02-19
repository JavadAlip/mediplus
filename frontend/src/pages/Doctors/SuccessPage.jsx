import React from 'react'
import {Link} from 'react-router-dom'
const SuccessPage = () => {
  return (
    <section className='pt-[160px] h-screen'>
    <div className='bg-gray-100 '>
        <div className='bg-white p-6 md:mx-auto'>
            <div className='text-center'>
                <h3 className='md:text-2xl text-base text-primaryColor font-bold text-center'>
                Payment Confirmed✅
                </h3>
                <br />
                <div className='text-greenColor font-semibold'>
                <p >Have a great day!😊</p>
                </div>
            
                <div className='py-10 text-center'>
                    <Link
                    to="/home"
                    className="px-6 btn rounded-lg font-bold py-3 "
                    > Back to Home</Link>
                </div>

            </div>
        </div>

    </div>
    </section>
  )
}

export default SuccessPage