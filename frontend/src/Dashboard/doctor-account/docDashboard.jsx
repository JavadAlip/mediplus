// import React, { useState } from 'react';
// import Loader from '../../components/Loading/Loading';
// import Error from '../../components/Error/Error';
// import useGetProfile from '../../Hooks/useFetchData';
// import { BASE_URL } from '../../config';
// import Tabs from './Tabs';
// import starIcon from '../../assets/images/star.png';
// import DoctorAbout from '../../pages/Doctors/DoctorAbout';
// import Profile from './Profile';
// import Appoiments from './Appoiments';


// const DocDashboard = () => {
//   const { data, loading, error } = useGetProfile(`${BASE_URL}/api/v1/doctors/profile/me`);
//   const [tab, setTab] = useState('overview');

//   return (
//     <section className="pt-[160px]">
//       <div className='max-w-[1170px] px-5 mx-auto'>
//         {loading && !error && <Loader />}
//         {error && !loading && <Error />}
//         {!loading && !error && (
//           <div className='grid lg:grid-cols-3 gap-[30px] lg:gap-[50px]'>
//             <Tabs tab={tab} setTab={setTab}/>
//             <div className="lg:col-span-2">
//               {data.isApproved === 'pending' && (
//                 <div className='flex p-4 text-yellow-600 bg-yellow-50 rounded-lg'>
//                   <div className='ml-3 text-sm'>
//                     To get approval complete your profile. We will review manually and approve within 2 days
//                   </div>
//                 </div>
//               )}

//               <div className='mt-8'>
//                 {tab === 'overview' && (
//                   <div>
//                     <div className='flex items-center'>
//                       <figure className='max-w-[200px]  max-h-[200px] mr-8'>
//                         <img src={data?.photo} alt="" className='w-full rounded-lg' />
//                       </figure>
//                       <div>
//                         <span className='bg-[#ccf0f3] text-primaryColor py-1 px-4 lg:py-2 lg:px-6 rounded-lg text-[12px] leading-4 lg:text-[16px] lg:leading-6 font-semibold'>
//                           {data.specialization}
//                         </span>
//                         <h3 className='text-[20px] leading-9 font-bold text-primaryColor mt-3'>{data.name}</h3>
//                         <div className='flex items-center gap-2'> 
//                           <span className='flex items-center gap-2 text-primaryColor text-[14px] leading-5 lg:text-[16px] lg:leading-6 font-semibold'>
//                             <img src={starIcon} alt="" />{data.averageRating}
//                           </span>
//                           <span className=' text-textColor text-[12px] leading-5 gap-1  lg:text-[12px] lg:leading-6 font-semibold'>({data.totalRating})</span>
//                         </div>
//                         <h1 className='text_para font-[10px] lg:max-w-[390px] leading-6'>{data?.bio}</h1>
//                       </div>
//                     </div>
//                     <DoctorAbout 
//                       name={data.name} 
//                       about={data.about} 
//                       experiences={data.experiences}
//                     />
//                   </div>
//                 )}
                    
//                 {tab === 'appoinment' && <Appoiments appointments={data.appointments}/>}
//                 {tab === 'settings' && <Profile doctorData={data} />}
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default DocDashboard;


import React, { useState } from 'react';
import Loader from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';
import useGetProfile from '../../Hooks/useFetchData';
import { BASE_URL } from '../../config';
import Tabs from './Tabs';
import starIcon from '../../assets/images/Star.png';
import DoctorAbout from '../../pages/Doctors/DoctorAbout';
import Profile from './Profile';
import Appointments from './Appoiments';

const DocDashboard = () => {
  const { data, loading, error } = useGetProfile(`${BASE_URL}/api/v1/doctors/profile/me`);
  const [tab, setTab] = useState('overview');

  return (
    <section className="pt-[160px]">
      <div className='max-w-[1170px] px-5 mx-auto overflow-x-auto'>
        {loading && !error && <Loader />}
        {error && !loading && <Error />}
        {!loading && !error && (
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6'>
            <Tabs tab={tab} setTab={setTab}/>
            <div className="lg:col-span-2">
              {data.isApproved === 'pending' && (
                <div className='flex p-4 text-yellow-600 bg-yellow-50 rounded-lg'>
                  <div className='ml-3 text-sm'>
                    To get approval complete your profile. We will review manually.
                  </div>
                </div>
              )}

              <div className='mt-8'>
                {tab === 'overview' && (
                  <div>
                    <div className='flex flex-col lg:flex-row items-center'>
                      <figure className='max-w-[200px] max-h-[200px] lg:mr-8'>
                        <img src={data?.photo} alt="" className='w-full rounded-lg' />
                      </figure>
                      <div>
                        <span className='bg-[#ccf0f3] text-primaryColor py-1 px-4 lg:py-2 lg:px-6 rounded-lg text-[12px] leading-4 lg:text-[16px] lg:leading-6 font-semibold'>
                          {data.specialization}
                        </span>
                        <h3 className='text-[20px] leading-9 font-bold text-primaryColor mt-3'>{data.name}</h3>
                        <div className='flex items-center gap-2'> 
                          <span className='flex items-center gap-2 text-primaryColor text-[14px] leading-5 lg:text-[16px] lg:leading-6 font-semibold'>
                            <img src={starIcon} alt="" />{data.averageRating}
                          </span>
                          <span className=' text-textColor text-[12px] leading-5 gap-1 lg:text-[12px] lg:leading-6 font-semibold'>({data.totalRating})</span>
                        </div>
                        <p className='text_para font-[10px] lg:max-w-[390px] leading-6'>{data?.bio}</p>
                      </div>
                    </div>
                    <DoctorAbout 
                      name={data.name} 
                      about={data.about} 
                      experiences={data.experiences}
                    />
                  </div>
                )}
                    
                {tab === 'appointments' && <Appointments appointments={data.appointments}/>}
                {tab === 'settings' && <Profile doctorData={data} />}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default DocDashboard;
