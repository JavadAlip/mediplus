import React from 'react';
// import {doctors} from '../../assets/data/doctor';
import DoctorCard from './DoctorCard'

import { BASE_URL } from '../../config';
import useFetchData from '../../Hooks/useFetchData';
import Error from '../../components/Error/Error'
import Loader from '../../components/Loading/Loading'
const DoctorList = () => {
  const {data:doctors, loading, error}=useFetchData(`${BASE_URL}/api/v1/doctors`)
    return (
      <>
      <div className='container'>
      {loading && <Loader/>}
      {error && <Error/>}
       { !loading && !error && 
        <div className=" text-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[0px] mt-[30px]
        ">{doctors && doctors.map((doctor) => <DoctorCard key={doctor._id} doctor={doctor}/>)}
        </div>
       }
       </div>
        </>
      )
}

export default DoctorList