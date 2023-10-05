import React from 'react';
import headImg from '../../src/assets/images/doctor1.jpg'
import About from '../components/About/About';
import ServiceList from '../components/Services/ServicesList';
import DoctorList from '../components/Doctors/DoctorList';
import Testsmonial from '../components/Testimonial/Testimonial';

const Home = () => {
  return <>
    {/* hero section */}
    
      <section className='hero__section pt-[180px] 2xl:h-[800px]'>
        <div className='container'>
          <div className='flex flex-col lg:flex-row gap-[90px] items-center justify-between'>
            {/* hero content */}
            <div>
              <div className='lg:w-[570px] '>
                <h1 className='text-[36px] leading-[46px] text-primaryColor font-[700] md:text-[60px] md:leading-[70px]'>
                  Your Healthy life is Our First Priority.</h1>
                <p className='text_para font-[500] '>Welcome to MEDIPLUS, your compassionate medical care platform! Connect with trusted healthcare professionals, easily book appointments, and access personalized medical advice and resources. Your well-being is our priority, and we're here to support your healthcare journey every step of the way.</p>
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
    <section className='pt-[80px]'>
      <div className='container'>
        <div className='xl:w-[470px] mx-auto'>
          <h2 className='heading text-center'>Our medical services</h2>
          <p className='text__para mt-1 text-center text-textColor'>Comprehensive medical services ensuring health, wellness, and peace of mind</p>
        </div>
        <ServiceList/>
      </div>
    </section>
     {/* service section end*/}

     {/* our greate doctors start*/}
     <section className='pt-[40px]'>
      <div className=''>
     <div className='xl:w-[470px] mx-auto'>
          <h2 className='heading text-center'>Our great doctors</h2>
          <p className='text__para mt-2 text-center text-textColor'>Dedicated, skilled doctors provide exceptional care, improving lives with expertise</p>
        </div>
        <DoctorList/>
        </div>
     </section>
    {/* our greate doctors end*/}

    {/* testmonial start*/}
    <section className='pt-[20px]'>
      <div className="container">
      <div className='xl:w-[470px] mx-auto'>
          <h2 className='heading text-center'>What our patients say</h2>
          <p className='text__para mt-2 text-center text-textColor'>Patients commend our care: compassionate, life-changing, and highly recommended</p>
        </div>
      <Testsmonial/>
      </div>
    </section>
    {/* testmonial end*/}
    </>
}

export default Home