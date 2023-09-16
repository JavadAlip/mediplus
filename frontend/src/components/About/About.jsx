import React from 'react';
import  aboutImg from '../../assets/images/smile-doctor.png';
import { Link } from 'react-router-dom';


const About = () => {
  return <section>
    <div className="container">
        <div className='flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row'>
            {/* about image */}
            <div className='relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1'>
                <img src={aboutImg} alt="" style={{borderRadius:'10%',width:"530px"}} />
                <div></div>
            </div>
            {/* about content */}
            <div className='w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2'>
                <h2 className='heading'>Proud to be a one of the nations best.</h2>
                <p className='text_para'> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
                </p>
                
                <Link to='/'> <button className='btn' >Learn More</button></Link>
            </div>
        </div>
    </div>
  </section>
}

export default About