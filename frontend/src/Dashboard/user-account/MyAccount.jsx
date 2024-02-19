// import React from "react";
// import { useContext, useState } from "react";
// import { authContext } from './../../context/authContext'
// import userImg from '../../assets/images/doctor1.jpg'

// import MyBooking from "./MyBooking";
// import Profile from "./Profile";
// import useGetProfile from '../../Hooks/useFetchData';
// import { BASE_URL } from '../../config'

// import Loading from "../../components/Loading/Loading";
// import Error from "../../components/Error/Error";

// const MyAccount = () => {
//   const { dispatch } = useContext(authContext);
//   const [tab, setTab] = useState('bookings')

//   const { data: userData, loading, error } = useGetProfile(`${BASE_URL}/api/v1/users/profile/me`)
//   // console.log(userData, 'userdata')

//   const handleLogout = () => {
//     dispatch({ type: 'LOGOUT' })
//   }
//   return <>
//     <section className="pt-[160px]">
//       <div className="max-w-[1170px] px-5 mx-auto">
//         {loading && !error && <Loading />}
//         {error && !loading && <Error errMessage={error} />}
//         {!loading && !error && <div className="grid md:grid-cols-3 gap-10px">
//           <div className="pb-[50px] px-[30px] rounded-md">
//             <div className="flex items-center justify-center">
//               <figure className="w-[100px] h-[100px] rounded-full border-2  border-solid border-primaryColor">
//                 <img src={userData.photo} alt="" className="w-full h-full rounded-full" />
//               </figure>
//             </div>
//             <div className="text-center mt-4">
//               <h3 className="text-[16px] leading-[35px] text-primaryColor font-bold">{userData.name}</h3>
//               <p className="text-textColor leading-6 text-[15px] font-medium">{userData.email}</p>
//               <p className="text-textColor leading-6 text-[15px] font-medium">Blood group:<span className="ml-2 text-textColor text-[16px] leading-8">{userData.bloodType}</span> </p>
//             </div>
//             <div className="mt-[10px] md:mt-[8px] ">
//               <button onClick={handleLogout} className=" btn w-full  p-3 text-[16px] leading-7 rounded-md">Logout</button>
//               <button className="btn w-full p-3 mt-4 text-[16px] leading-7 rounded-md">Delete Account</button>
//             </div>
//           </div>
//           <div className="md:col-span2 md:px-[20px] max-w-[1170px] px-5 mx-auto">
//             <div>
//               <button onClick={() => setTab('bookings')} className={` ${tab == 'bookings' && 'bg-primaryColor text-white text-normal'} p-2 mr-5 px-5 rounded-md text-primaryColor font-semibold text-[16px]
//                leading-7 border border-solid border-primaryColor`}>My Bookings</button>
//               <button onClick={() => setTab('settings')} className={` ${tab == 'settings' && 'bg-primaryColor text-white'} p-2 mr-5 px-5 rounded-md text-primaryColor font-semibold text-[16px]
//               mt-[15px] leading-7 border border-solid border-primaryColor`}>Profile Settings</button>
//             </div>

//             {tab == 'bookings' && <MyBooking />}
//             {tab == 'settings' && <Profile user={userData} />}
//           </div>
//         </div>}
//       </div>

//     </section>
//   </>
// }
// export default MyAccount


import React, { useContext, useState } from "react";
import { authContext } from './../../context/authContext';
import useGetProfile from '../../Hooks/useFetchData';
import { BASE_URL } from '../../config';
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";

import MyBooking from "./MyBooking";
import Profile from "./Profile";
import { toast, ToastContainer } from "react-toastify";


const MyAccount = () => {
  const { dispatch } = useContext(authContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { data: userData } = useGetProfile(`${BASE_URL}/api/v1/users/profile/me`);
  const [tab, setTab] = useState('bookings')

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  const handleDeleteAccount = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${BASE_URL}/api/v1/users/delete-account`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Failed to delete account');
      }
      dispatch({ type: 'LOGOUT' });
      toast.success("Account deleted successfully!")
    } catch (error) {
      setError(error.message || 'Failed to delete account');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="pt-[160px]">
      <div className="max-w-[1170px] px-5 mx-auto">
        <ToastContainer />
        {loading && !error && <Loading />}
        {error && !loading && <Error errMessage={error} />}
        {!loading && !error && <div className="grid md:grid-cols-3 gap-10px">
          <div className="pb-[50px] px-[30px] rounded-md">
            {userData && (
              <div className="flex items-center justify-center">
                <figure className="w-[100px] h-[100px] rounded-full border-2  border-solid border-primaryColor">
                  <img src={userData.photo} alt="" className="w-full h-full rounded-full" />
                </figure>
              </div>
            )}
{userData && (
            <div className="text-center mt-4">
              <h3 className="text-[16px] leading-[35px] text-primaryColor font-bold">{userData.name}</h3>
              <p className="text-textColor leading-6 text-[15px] font-medium">{userData.email}</p>
              <p className="text-textColor leading-6 text-[15px] font-medium">Blood group:<span className="ml-2 text-textColor text-[16px] leading-8">{userData.bloodType}</span> </p>
            </div>
            )}
            <div className="mt-[10px] md:mt-[8px] ">
              <button onClick={handleLogout} className=" btn w-full  p-3 text-[16px] leading-7 rounded-md">Logout</button>
              <button onClick={handleDeleteAccount} className="btn w-full p-3 mt-4 text-[16px] leading-7 rounded-md">Delete Account</button>
            </div>
          </div>
          <div className="md:col-span2 md:px-[20px] max-w-[1170px] px-5 mx-auto">
            <div>
              <button onClick={() => setTab('bookings')} className={` ${tab == 'bookings' && 'bg-primaryColor text-white text-normal'} p-2 mr-5 px-5 rounded-md text-primaryColor font-semibold text-[16px]
               leading-7 border border-solid border-primaryColor`}>My Bookings</button>
              <button onClick={() => setTab('settings')} className={` ${tab == 'settings' && 'bg-primaryColor text-white'} p-2 mr-5 px-5 rounded-md text-primaryColor font-semibold text-[16px]
              mt-[15px] leading-7 border border-solid border-primaryColor`}>Profile Settings</button>
            </div>

            {tab == 'bookings' && <MyBooking />}
            {tab == 'settings' && <Profile user={userData} />}
          </div>
        </div>}
      </div>

    </section>
  );
};

export default MyAccount;
