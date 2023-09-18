import React from 'react'
import DocImg from'../../assets/images/doctor-img01.png'

const DoctorDetails = () => {
  return (
  <section>
<div className='max-w-[1170px] px-5 mx-auto'>
  <div className='grid md:grid-cols-3 gap-[50px]'>

    <div className='md:col-span-2'>
      <div className='flex items-center gap-5'>
        <figure className='max-w-[200px] max-h-[200px]'>
          <img src={DocImg} alt="" className='w-full' />
        </figure>
      </div>

    </div>

  </div>
  
   </div>
  </section>
  )
}

export default DoctorDetails