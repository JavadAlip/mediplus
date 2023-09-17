import React from 'react';
import SwiperCore, { Pagination } from 'swiper'; // Import 'Pagination' with a capital "P"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css'; // Correct import for Swiper CSS
import 'swiper/swiper-bundle.min.css'; // Correct import for Swiper Pagination CSS
import patientAvatar from '../../assets/images/patient-avatar.png';
import { HiStar } from 'react-icons/hi';

// Use SwiperCore to enable the 'Pagination' module
SwiperCore.use([Pagination]);

const Testimonial = () => {
    return (
        <div className='mt-[30px] lg:mt-[55px]'>
            <Swiper modules={[Pagination]} spaceBetween={30} slidesPerView={1} pagination={{ clickable: true }}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
            >
                <SwiperSlide>
                    <div className='py-[30px] px-5 rounded-3'>
                        <div className='flex items-center gap-[13px]'>
                            <img src={patientAvatar} alt="" />
                            <div>
                                <h4 className='text-[18px] leading-[30px] font-semibold text-primaryColor'>
                                    Javad Ali</h4>
                                <div className='flex items-center gap-[2px]'>
                                    <HiStar className='text-greenColor w-[18px] h-5'/>
                                    <HiStar className='text-greenColor w-[18px] h-5'/>
                                    <HiStar className='text-greenColor w-[18px] h-5'/>
                                    <HiStar className='text-greenColor w-[18px] h-5'/>
                                    <HiStar className='text-greenColor w-[18px] h-5'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
           
        </div>
    );
}

export default Testimonial;
