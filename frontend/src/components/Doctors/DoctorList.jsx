import React from 'react';
import {doctors} from '../../assets/data/doctor';
import DoctorCard from './DoctorCard'

const DoctorList = () => {
    return ( <div className='container'>
        <div className=" text-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[0px] mt-[30px]
        ">{doctors.map((doctor)=><DoctorCard key={doctor.id} doctor={doctor}/>)}</div>
        </div>
      )
}

export default DoctorList