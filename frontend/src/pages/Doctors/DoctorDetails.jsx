import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import DocImg from '../../assets/images/doctor-img01.png';
import starIcon from '../../assets/images/Star.png';
import DoctorAbout from './DoctorAbout';
import Feedback from './Feedback';
import SidePanel from './SidePanel';
import { BASE_URL } from '../../config';
import useFetchData from '../../Hooks/useFetchData';
import Error from '../../components/Error/Error';
import Loader from '../../components/Loading/Loading';

const DoctorDetails = () => {
  const { id } = useParams();
  const { data: doctors, loading, error } = useFetchData(`${BASE_URL}/api/v1/doctors/${id}`);
  const [tab, setTab] = useState('about');

  if (loading) {
    return <Loader />;
  }

  if (error || !doctors) {
    return <Error />;
  }

  const {
    name,
    bio,
    specialization,
    ticketPrice,
    experiences,
    timeSlots,
    about,
    photo,
    averageRating,
    totalRating,
    reviews,
  } = doctors;

  return (
    <section className='pt-[160px]'>
      <div className='container'>
        <div className='max-w-[1170px] px-5 mx-auto'>
          <div className='grid md:grid-cols-3 gap-[50px]'>
            <div className='md:col-span-2'>
              <div className='flex items-center gap-5'>
                <figure className='max-w-[250px] max-h-[250px] '>
                  <img src={photo} alt='' className='w-full' style={{ borderRadius: '7%' }} />
                </figure>
                <div>
                  <span className='bg-[#ccf0f3] text-primaryColor py-1 px-6 lg:py-2 lg:px-6 lg text-[12px] leading-4 lg:text-[16px] lg leading-7 font-semibold rounded'>
                    {specialization}
                  </span>
                  <h3 className='text-primaryColor text-[22px] leading-9 mt-3 font-bold'>{name}</h3>
                  <div className='flex items-center gap-[6px]'></div>
                  <span className='flex items-center gap-[6px] text-[14px] leading-5 lg leading-7 font-semibold text-primaryColor'>
                    <img src={starIcon} alt='' style={{ height: '15px' }} />
                    {averageRating}
                    <span className='text-[14px] leading-6 lg:text-[14px] lg leading-7 font-[400] text-textColor'>({totalRating})</span>
                  </span>
                  <p className='text__para text-[14px] leading-5 md:text-[15px] mt-2 lg max-w-[390px]'>{bio}</p>
                </div>
              </div>

              <div className='mt-[50px] border-b border-solid border-[#0066ff34]'>
                <button
                  onClick={() => setTab('about')}
                  className={`${tab === 'about' && 'border-b border-solid border-primaryColor'}py-2 px-5 text-[16px] leading-7 text-primaryColor font-semibold`}>
                  About
                </button>
                <button
                  onClick={() => setTab('feedback')}
                  className={`${tab === 'feedback' && 'border-b border-solid border-primaryColor'}py-2 px-5 text-[16px] leading-7 text-primaryColor font-semibold`}>
                  Feedback
                </button>
              </div>

              <div className='mt-[50px]'>
                {tab === 'about' && <DoctorAbout name={name} about={about} experiences={experiences} />}
                {tab === 'feedback' && <Feedback reviews={reviews} totalRating={totalRating} />}
              </div>
            </div>
            <div>
              <SidePanel doctorId={doctors._id} ticketPrice={ticketPrice} timeSlots={timeSlots} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorDetails;
