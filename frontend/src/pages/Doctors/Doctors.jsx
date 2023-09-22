import React from 'react'
import {doctors} from '../../assets/data/doctor'
import DoctorCard from'../../components/Doctors/DoctorCard'
import Testsmonial from '../../components/Testimonial/Testimonial'

const Doctors = () => {
  return <>
  <section className='bg-[#20297D] pt-[160px]'>
    <div className='container text-center'>
      <h2 className='heading text-[#fff]'>Find a Doctor</h2>
      <div className='max-w-[450px] mt-[30px] max-h-[44px] mx-auto bg-[#fff] rounded-md flex items-center justify-between '>
        <input type="search"
        className='py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor'
        placeholder='search doctor' />
        <button className='btn bg-textColor mt-0 rounded-[0px] rounded-r-md'>Search</button>
      </div>
    </div>
  </section>

  <section>
    <div className='container'>
    <div className=" text-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5">
      {doctors.map((doctor)=><DoctorCard key={doctor.id} doctor={doctor}/>)}</div>
    </div>
  </section>

  <section>
      <div className="container">
      <div className='xl:w-[470px] mx-auto'>
          <h2 className='heading text-center'>What our patients say</h2>
          <p className='text__para text-center text-textColor'>world-class care for everyone. Our health System offers unmatched,
            expert health care</p>
        </div>
      <Testsmonial/>
      </div>
    </section>
  
  </>
    
  
}

export default Doctors