import React, { useState } from 'react'
import signupImg from '../assets/images/doc.gif'
import avatar from '../assets/images/avatar-icon.png'
import { Link } from 'react-router-dom'

// const [selectedFile,setSelectedFile]=useState(null)
// const [previewUrl,setPreviewUrl]=useState(null)
const Signup = () => {
  const [formData, setFormData] = useState({
    name:"",
    email: "",
    password: "",
    photo:"selectedFile",
    gender:"",
    role:"patient",

  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileInputChange =async(event)=>{
    const file=event.target.files[0]
    console.log(file)
  }
  const submitHandler = async event=>{
    event.PreventDefault()

  }

  return <section className='hero__section px-5 xl:px-0 pt-[160px]'>
      <div className='max-w-[1170px] mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
          {/* img box */}
          <div className='hidden lg:block bg-white rounded-l-lg'>
            <figure className='rounded-l-lg mt-14'>
              <img src={signupImg} alt="" />
            </figure>
          </div>
          {/* signup forum */}
          <div className='rounded-l-lg lg:pl-16 py-10'>
            <h3 className='text-primaryColor text-[22px] leading-7 font-bold'>Create an <span 
            className='text-greenColor'>Account!</span></h3>

            <form onSubmit={submitHandler}>
            <div className='mb-5'>
            <input
              type='text'
              placeholder='Username'
              name='name'
              value={formData.name}
              onChange={handleInputChange}
              className='w-full py-3 border-b border-solid border-primaryColor focus:outline-none
              focus:border-b-textColor text-[16px] leading-7 text-textColor placeholder:text-textColor rounded-md cursor-pointer'
            />
          </div>
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
              name='email'
              value={formData.password}
              onChange={handleInputChange}
              className='w-full py-3 border-b border-solid border-primaryColor focus:outline-none
              focus:border-b-textColor text-[16px] leading-7 text-textColor placeholder:text-textColor rounded-md cursor-pointer'
            />
          </div>
          <div className='mb-5 flex items-center justify-between'>
            <label className='text-primaryColor font-bold text-[16px] leading-7'>
              Are you a:
              <select name='role'
               value={formData.role}
               onChange={handleInputChange}
               className='text-textColor font-semibold text-[15px] leading-7 px-4 py-3
              focus:outline-none'>
                <option value="patient">Patient</option>
                <option value="doctor">Doctor</option>
              </select>
            </label>

            <label  className='text-primaryColor font-bold text-[16px] leading-7'>
              Gender:
              <select name='gender'
              value={formData.gender}
              onChange={handleInputChange}
              className='text-textColor font-semibold text-[15px] leading-7 px-4 py-3
              focus:outline-none'>
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </label>
          </div>
          <div className='mb-5 flex items-center gap-3'>
            <figure className='w-[60px] h-[60px] rounded-full border
            border-solid border-primaryColor flex items-center justify-center'>
              <img src={avatar} alt="" className='w-full rounded-full'/>
            </figure>

            <div className='relative w-[130px] h-[50px]'>
              <input type='file' name='photo' id='customFile' onChange={handleFileInputChange} accept='.jpg, .png,'
              className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer'/>
              <label htmlFor='customFile' className='absolute top-0 left-0 w-full h-full
              flex items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden
              btn mt-0 text-primaryColor font-semibold rounded-lg truncate cursor-pointer'>Upload Photo</label>
            </div>

          </div>
          <div className='mt-7'>
            <button type='submit' className='btn mt-2 w-full bg-[#ccf0f3] text-primaryColor text-[18px] px-4 py-3
            leading-[30px] rounded-lg'>Sign Up</button>
          </div>
          <p className='mt-5 text-textColor text-center'>Already have an account? 
          <Link to='/login' className="text-primaryColor font-medium ml-1">Login</Link></p>   


            </form>
          </div>

        </div>
      </div>
    </section>
  
}

export default Signup;