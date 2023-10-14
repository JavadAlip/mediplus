import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';  
import {BASE_URL} from '../config';
import { toast } from 'react-toastify';
import {authContext} from '../context/authContext.jsx'
import HashLoader from 'react-spinners/HashLoader';


const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [passwordError, setPasswordError] = useState('');

  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const {dispatch} = useContext(authContext)

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // login connection start
  const submitHandler = async (event) => {
    event.preventDefault(); // Fix the typo here
    setPasswordError('');
    setLoading(true);
    
    const validatePassword = (password) => {
      // Password should contain at least 8 characters, including at least one uppercase letter, one lowercase letter, and one number.
      const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
      return passwordRegex.test(password);
    };

    if (!validatePassword(formData.password)) {
      setPasswordError('Please enter correct password!');
      setLoading(false);
      return;
    }

    try {
      const res = await fetch(`${BASE_URL}/api/v1/Auth/login`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (!res.ok) {
        throw new Error(result.message);
      }

      dispatch({
        type:'LOGIN_SUCCESS',
        payload:{
          user:result.data,
          token:result.token,
          role:result.role
        }
      })
      console.log(result, 'login data');

      setLoading(false);
      toast.success(result.message);
      navigate('/home');
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  };

  return (
    <section className=' px-5 lg:px-0 pt-[160px]'>
      <div className=' w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10 hero__section'>
        <h3 className='text-primaryColor text-[22px] leading-7 font-bold mb-10'>Please <span
          className='text-greenColor'> Login!</span></h3>
        <form className='py-4 md:py-0' onSubmit={submitHandler}>
          <div className='mb-5'>
            <input
              type='email'
              placeholder='Email'
              name='email'
              value={formData.email}
              onChange={handleInputChange}
              className='w-full py-3 border-b border-solid border-primaryColor focus:outline-none
              focus:border-b-textColor text-[16px] leading-7 text-textColor placeholder:text-textColor rounded-md cursor-pointer'
            />
          </div>
          <div className='mb-5'>
            <input
              type='password'
              placeholder='Password'
              name='password'
              value={formData.password}
              onChange={handleInputChange}
              className='w-full  py-3 border-b border-solid border-primaryColor focus:outline-none
              focus:border-b-textColor text-[16px] leading-7 text-textColor placeholder:text-textColor rounded-md cursor-pointer'
            />
             <p className="text-red-500">{passwordError}</p>
          </div>
          

          <div className='mt-7'>
            <button type='submit' className='btn mt-2 w-full bg-[#ccf0f3] text-primaryColor text-[18px] px-4 py-3
            leading-[30px] rounded-lg'>{ loading ? <HashLoader size={25} color='#fff'/> : 'Login'}</button>
          </div>
          <p className='mt-5 text-textColor text-center'>Don't have an account? 
          <Link to='/register ' className="text-primaryColor font-medium ml-1">Signup</Link></p>          
        </form>
      </div>
    </section>
  );
};

export default Login;
