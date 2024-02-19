import React from 'react'
import useFetchData from '../../Hooks/useFetchData'
import { BASE_URL } from '../../config'
import DoctorCard from './../../components/Doctors/DoctorCard.jsx'
import Loading from '../../components/Loading/Loading'
import Error from '../../components/Error/Error'

const MyBooking = () => {
  const { data: appointments, loading, error } = useFetchData(`${BASE_URL}/api/v1/users/appointments/my-appointments`)

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <Error errMessage={error} />
  }

  if (!appointments || appointments.length === 0) {
    return <h2 className='mt-5 text-center text-primaryColor text-[20px] leading-7 font-semibold'>You did not book yet!</h2>
  }
 console.log("checking aane",appointments);
  return (
    
    <div className='grid grid-cols-1 lg:grid-cols-2'>
      {appointments.map(doctor => (
        <DoctorCard doctor={doctor} key={doctor._id}/>
      ))}
    </div>
    
  )
}

export default MyBooking
