import React from 'react'
import DocImg from'../../assets/images/doctor-img01.png'
import starIcon from '../../assets/images/star.png'

const DoctorDetails = () => {
  return (
  <section>
<div className='max-w-[1170px] px-5 mx-auto'>
  <div className='grid md:grid-cols-3 gap-[50px]'>

    <div className='md:col-span-2'>
      <div className='flex items-center gap-5'>
        <figure className='max-w-[250px] max-h-[250px] '>
          <img src={DocImg} alt="" className='w-full'style={{borderRadius:"7%" }} />
        </figure>
        <div>
          <span className='bg-[#ccf0f3] text-primaryColor py-1 px-6 lg:py-2 lg:px-6 lg
          text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded'>Surgeon</span>
          <h3 className='text-primaryColor text-[22px] leading-9 mt-3 font-bold '>javad ali</h3>
          <div className='flex items-center gap-[6px]'></div>
          <span className='flex items-center gap-[6px] text-[14px] leading-5 
          lg:leading-7 font-semibold text-primaryColor'>
            <img src={starIcon} alt="" style={{height:"15px"}} />4.8
            <span className='text-[14px] leading-6 lg:text-[14px] lg:leading-7 font-[400] 
          text-textColor'>(272)</span>
          </span>
          <p className='text__para text-[14px] leading-5 md:text-[15px] mt-2 lg:max-w-[390px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, suscipit praesentium error aut nam eligendi repellendus sed corporis blanditiis beatae quae, debitis tenetur magni pariatur non vero explicabo animi iusto.</p>
        </div>
      </div>
      <div className='mt-[50px] border-b border-solid border-[#0066ff34]'>
        <button className='py-2 px-5 text-[16px] leading-7 text-primaryColor font-semibold'>About</button>
        <button className='py-2 px-5 text-[16px] leading-7 text-primaryColor font-semibold'>Feedback</button>
      </div>

    </div>

  </div>
  
   </div>
  </section>
  )
}

export default DoctorDetails