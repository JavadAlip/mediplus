import React from 'react';
import headImg from '../../src/assets/images/doctor1.jpg'
import About from '../components/About/About';
import ServiceList from '../components/Services/ServicesList';
import DoctorList from '../components/Doctors/DoctorList';
import Testsmonial from '../components/Testimonial/Testimonial';

const Home = () => {
  return <>
    {/* hero section */}
    
      <section className='hero__section pt-[60px]2xl:h-[800px]'>
        <div className='container'>
          <div className='flex flex-col lg:flex-row gap-[90px] items-center justify-between'>
            {/* hero content */}
            <div>
              <div className='lg:w-[570px]'>
                <h1 className='text-[36px] leading-[46px] text-primaryColor font-[700] md:text-[60px] md:leading-[70px]'>Your Healthy life is Our First Priority.</h1>
                <p className='text_para font-[500] '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <button className='btn'>Request an Appoinment</button>
              </div>
            </div>
            {/* hero images */}
            <div className='flex gap-[30px] justify-end'>
              <div>
                <img src={headImg} alt="" style={{ borderRadius: '5%', }} />
              </div>
            </div>
          </div>
        </div>
      </section>
    <About/>
    {/* service section start*/}
    <section>
      <div className='container'>
        <div className='xl:w-[470px] mx-auto'>
          <h2 className='heading text-center'>Our medical services</h2>
          <p className='text__para mt-1 text-center text-textColor'>world-class care for everyone. Our health System offers unmatched,
            expert health care.</p>
        </div>
        <ServiceList/>
      </div>
    </section>
     {/* service section end*/}

     {/* our greate doctors start*/}
     <section>
     <div className='xl:w-[470px] mx-auto'>
          <h2 className='heading text-center'>Our great doctors</h2>
          <p className='text__para mt-2 text-center text-textColor'>world-class care for everyone. Our health System offers unmatched,
            expert health care.</p>
        </div>
        <DoctorList/>
     </section>
    {/* our greate doctors end*/}

    {/* testmonial start*/}
    <section>
      <div className="container">
      <div className='xl:w-[470px] mx-auto'>
          <h2 className='heading text-center'>What our patients say</h2>
          <p className='text__para mt-2 text-center text-textColor'>world-class care for everyone. Our health System offers unmatched,
            expert health care</p>
        </div>
      <Testsmonial/>
      </div>
    </section>
    {/* testmonial end*/}

    </>
}

export default Home