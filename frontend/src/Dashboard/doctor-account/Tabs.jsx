// import React from 'react';
// import {BiMenu} from 'react-icons/bi'

// const Tabs = ({Tabs,set}) => {
//   return  (
//     <section className=' px-5 lg:px-0 pt-[100px]'>
//   <div>
//     <span className='lg:hidden'><BiMenu className='w-6 h-6 cursor-pointer'/></span>
//     <div className='hidden lg:flex flex-col p-[30px] bg-white shadow-panelShadow items-center h-max rounded-lg'>
//      <button className='w -full btn mt-0 rounded-md '>Overview </button>
//     </div>
//   </div>
//   </section>
//   )
// }

// export default Tabs



// import {React, useContext} from 'react';
// import { BiMenu } from 'react-icons/bi';
// import { authContext } from '../../context/authContext';
// import { useNavigate } from 'react-router-dom';

// const Tabs = ({ tab, setTab }) => {
//   const {dispatch}=useContext(authContext)
//   const navigate = useNavigate()

//   const handleLogout=()=>{
//     dispatch({type:'LOGOUT'})
//     navigate('/')
//   }


//   return (
//     <section className='px-5 lg:px-0 pt-[100px]'>
//       <div>
//         <span className='lg:hidden'>
//           <BiMenu className='w-6 h-6 cursor-pointer'/>
//         </span>
//         <div className='hidden lg:flex flex-col p-[30px] bg-white shadow-panelShadow items-center h-max rounded-lg'>
//           <button className='w-full btn mt-0 rounded-md mb-2  ' onClick={() => setTab('overview')}>
//             Overview
//           </button>
//           <button className='w-full btn mt-0 rounded-md mb-2' onClick={() => setTab('appoinment')}>
//             Appoinments
//           </button>
//           <button className='w-full btn mt-0 rounded-md' onClick={() => setTab('settings')}>
//             Profile
//           </button>
//           <div className="mt-[8px] w-full">
//               <button onClick={handleLogout} className=" btn w-full  p-3 text-[16px] leading-7 rounded-md">Logout</button>
//               <button className="btn w-full p-3 mt-4 text-[16px] leading-7 rounded-md">Delete Account</button>
//             </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Tabs;




// Tabs.jsx
import React, { useContext,useState } from 'react';
import { BiMenu } from 'react-icons/bi';
import { authContext } from '../../context/authContext';
import { useNavigate } from 'react-router-dom';
import { toast,ToastContainer } from "react-toastify";
import { BASE_URL } from '../../config';

const Tabs = ({ tab, setTab }) => {
  const [loading, setLoading] = useState(false);
  const { dispatch } = useContext(authContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
    navigate('/');
  };


  
  const handleDeleteAccount = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${BASE_URL}/api/v1/doctors/delete-account`, {
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
    <section className='px-5 pt-[100px]'>
      <ToastContainer/>
      <div>
        <div className='flex flex-col p-[30px] bg-white shadow-panelShadow items-center h-max rounded-lg'>
          <button className='w-full btn mt-0 rounded-md mb-2' onClick={() => setTab('overview')}>
            Overview
          </button>
          <button className='w-full btn mt-0 rounded-md mb-2' onClick={() => setTab('appointments')}>
            Appointments
          </button>
          <button className='w-full btn mt-0 rounded-md' onClick={() => setTab('settings')}>
            Profile
          </button>
          <div className="mt-[8px] w-full">
            <button onClick={handleLogout} className="btn w-full p-3 text-[16px] leading-7 rounded-md">Logout</button>
            <button onClick={handleDeleteAccount} className="btn w-full p-3 mt-4 text-[16px] leading-7 rounded-md">Delete Account</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tabs;
