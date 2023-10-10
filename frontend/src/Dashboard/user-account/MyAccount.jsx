import React from "react";
import { useContext , useState } from "react";
import { authContext } from './../../context/authContext'
import userImg from '../../assets/images/doctor1.jpg'

import MyBooking from "./MyBooking";
import Profile from "./Profile";

const MyAccount = () => {
  const { dispatch } = useContext(authContext);
  const [tab,setTab] = useState('bookings')

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' })
  }
  return <>
    <section className="pt-[160px]">
      <div className="max-w-[1170px] px-5 mx-auto">
        <div className="grid md:grid-cols-3 gap-10px">
          <div className="pb-[50px] px-[30px] rounded-md">
            <div className="flex items-center justify-center">
              <figure className="w-[100px] h-[100px] rounded-full border-2  border-solid border-primaryColor">
                <img src={userImg} alt="" className="w-full h-full rounded-full" />
              </figure>
            </div>
            <div className="text-center mt-4">
              <h3 className="text-[18px] leading-[30px] text-primaryColor font-bold">Javad Ali</h3>
              <p className="text-textColor leading-6 text-[15px] font-medium">example@gmail.com</p>
              <p className="text-textColor leading-6 text-[15px] font-medium">Blood Type: <span className="ml-2 text-primaryColor text-[22px] leading-8">0+</span> </p>
            </div>
            <div className="mt-[50px] md:mt-[100px] ">
              <button onClick={handleLogout} className="w-full bg-primaryColor text-greenColor p-3 text-[16px] leading-7 rounded-md">Logout</button>
              <button className="w-full bg-greenColor text-primaryColor p-3 mt-4 text-[16px] leading-7 rounded-md">Delete Account</button>
            </div>
          </div>
          <div className="md:col-span2 md:px-[20px] ">
            <div>
              <button onClick={()=> setTab('bookings')} className={` ${tab=='bookings' && 'bg-primaryColor text-white text-normal'} p-2 mr-5 px-5 rounded-md text-primaryColor font-semibold text-[16px]
               leading-7 border border-solid border-primaryColor`}>My Bookings</button>
              <button onClick={()=> setTab('settings')} className={` ${tab=='settings' && 'bg-primaryColor text-white'} p-2 mr-5 px-5 rounded-md text-primaryColor font-semibold text-[16px]
              leading-7 border border-solid border-primaryColor`}>Profile Settings</button>
            </div>

            {tab == 'bookings' && <MyBooking/>}
            {tab == 'settings' && <Profile/>}
          </div>
        </div>
      </div>

    </section>
  </>
}
export default MyAccount