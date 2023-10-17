import Home from '../pages/Home';
import Services from '../pages/Services';
import Login from '../pages/Login';
import Contact from '../pages/Contact';
import Signup from '../pages/Signup';
import Doctors from '../pages/Doctors/Doctors';
import Chat from '../pages/Chat';
import DoctorDetails from '../pages/Doctors/DoctorDetails';
import { Routes, Route } from 'react-router-dom';

import MyAccount from '../Dashboard/user-account/MyAccount'
import DashBoard from '../Dashboard/doctor-account/DashBoard';
import ProtectRoute from './ProtectRoute';

import AdminLogin from '../pages/Admin/AdminLogin';

const Routers = () => {
  return (
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/doctors' element={<Doctors/>}/>
    <Route path='/doctors/:id' element={<DoctorDetails/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Signup/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/services' element={<Services/>}/> 
    <Route path='/users/profile/me' element={<ProtectRoute allowedRoles={['patient']}> <MyAccount/></ProtectRoute>}/>
    <Route path='/doctors/profile/me' element={<ProtectRoute allowedRoles={['doctor']}> <DashBoard/></ProtectRoute> }/>
    <Route path='/chat' element={<Chat/>}/>
    <Route path='/adminLogin' element={<AdminLogin/>}/>
  </Routes>
  );
}
export default Routers;