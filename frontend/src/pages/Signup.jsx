import React, { useState } from 'react';
import signupImg from '../assets/images/doc.gif';
import { Link, useNavigate } from 'react-router-dom';
import uploadImageToCloudinary from '../utils/uploadCloudinary';
import { BASE_URL } from '../config';
import { toast } from 'react-toastify';
import HashLoader from 'react-spinners/HashLoader';

const Signup = () => {
  const [previewUrl, setPreviewUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    photo: '', // Initialize as an empty string
    gender: '',
    role: 'patient',
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileInputChange = async (event) => {
    const file = event.target.files[0];
    const data = await uploadImageToCloudinary(file);
    setPreviewUrl(data.url);
    setFormData({ ...formData, photo: data.url }); // Update formData.photo directly
  };

  const submitHandler = async (event) => {
    event.preventDefault(); // Fix the typo here

    setLoading(true);

    try {
      const res = await fetch(`${BASE_URL}/api/v1/Auth/register`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const { message } = await res.json();
      if (!res.ok) {
        throw new Error(message);
      }

      setLoading(false);
      toast.success(message);
      navigate('/login');
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  };

  return (
    <section className="px-5 xl:px-0 pt-[160px]">
      <div className="container">
        <div className="max-w-[1170px] mx-auto hero__section">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* img box */}
            <div className="hidden lg:block bg-white rounded-l-lg">
              <figure className="rounded-l-lg mt-14">
                <img src={signupImg} alt="" />
              </figure>
            </div>
            {/* signup forum */}
            <div className="rounded-l-lg lg:pl-16 py-10">
              <h3 className="text-primaryColor text-[22px] leading-7 font-bold">
                Create an <span className="text-greenColor">Account!</span>
              </h3>

              <form onSubmit={submitHandler}>
                <div className="mb-5">
                  <input
                    type="text"
                    placeholder="Username"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full py-3 border-b border-solid border-primaryColor focus:outline-none focus:border-b-textColor text-[16px] leading-7 text-textColor placeholder:text-textColor rounded-md cursor-pointer"
                  />
                </div>
                <div className="mb-5">
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full py-3 border-b border-solid border-primaryColor focus:outline-none focus:border-b-textColor text-[16px] leading-7 text-textColor placeholder:text-textColor rounded-md cursor-pointer"
                  />
                </div>
                <div className="mb-5">
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full py-3 border-b border-solid border-primaryColor focus:outline-none focus:border-b-textColor text-[16px] leading-7 text-textColor placeholder:text-textColor rounded-md cursor-pointer"
                  />
                </div>
                <div className="mb-5 flex items-center justify-between">
                  <label className="text-primaryColor font-bold text-[16px] leading-7">
                    Are you a:
                    <select
                      name="role"
                      value={formData.role}
                      onChange={handleInputChange}
                      className="text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none"
                    >
                      <option value="patient">Patient</option>
                      <option value="doctor">Doctor</option>
                    </select>
                  </label>

                  <label className="text-primaryColor font-bold text-[16px] leading-7">
                    Gender:
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                      className="text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none"
                    >
                      <option value="">Select</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </label>
                </div>
                <div className="mb-5 flex items-center gap-3">
                  {previewUrl && (
                    <figure className="w-[60px] h-[60px] rounded-full border border-solid border-primaryColor flex items-center justify-center">
                      <img src={previewUrl} alt="" className="w-full rounded-full" />
                    </figure>
                  )}

                  <div className="relative w-[130px] h-[50px]">
                    <input
                      type="file"
                      name="photo"
                      id="customFile"
                      onChange={handleFileInputChange}
                      accept=".jpg, .png"
                      className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <label
                      htmlFor="customFile"
                      className="absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden btn mt-0 text-primaryColor font-semibold rounded-lg truncate cursor-pointer"
                    >
                      Upload Photo
                    </label>
                  </div>
                </div>
                <div className="mt-7">
                  <button
                    disabled={loading}
                    type="submit"
                    className="btn mt-2 w-full bg-[#ccf0f3] text-primaryColor text-[18px] px-4 py-3 leading-[30px] rounded-lg"
                  >
                    {loading ? <HashLoader size={35} color="#ffffff" /> : 'Sign Up'}
                  </button>
                </div>
                <p className="mt-5 text-textColor text-center">
                  Already have an account?{' '}
                  <Link to="/login" className="text-primaryColor font-medium ml-1">
                    Login
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
