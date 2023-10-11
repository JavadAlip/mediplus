import {useEffect, useState} from 'react'
import {  useNavigate } from 'react-router-dom';
import uploadImageToCloudinary from '../../utils/uploadCloudinary';
import { BASE_URL } from '../../config';
import { toast } from 'react-toastify';
import HashLoader from 'react-spinners/HashLoader';
import { token } from '../../config';



const Profile = ({user}) => {
  const [previewUrl, setPreviewUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    photo: 'null', // Initialize as an empty string
    gender: '',
    bloodType:'',
  });

  const navigate = useNavigate();
  useEffect(()=>{
    setFormData({name:user.name, email:user.email, photo:user.photo, gender:user.gender, bloodType:user.bloodType })

  },[user])

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileInputChange = async (event) => {
    const file = event.target.files[0];
    const data = await uploadImageToCloudinary(file);
    // setPreviewUrl(data.url);
    setFormData({ ...formData, photo: data.url }); // Update formData.photo directly
  };

  const submitHandler = async (event) => {
    event.preventDefault(); // Fix the typo here

    setLoading(true);

    try {
      const res = await fetch(`${BASE_URL}/users/${user._id}`, {
        method: 'put',
        headers: {
          'Content-Type': 'application/json',
          authorization:`Bearer ${token}`
        },
        body: JSON.stringify(formData),
      });

      const { message } = await res.json();
      if (!res.ok) {
        throw new Error(message);
      }

      setLoading(false);
      toast.success(message);
      navigate('/users/profile/me');
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  };
  return (
    <div className='mt-10'>
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
                <div className="mb-5">
                  <input
                    type="text"
                    placeholder="Blood Type"
                    name="bloodType"
                    value={formData.bloodType}
                    onChange={handleInputChange}
                    className="w-full py-3 border-b border-solid border-primaryColor focus:outline-none focus:border-b-textColor text-[16px] leading-7 text-textColor placeholder:text-textColor rounded-md cursor-pointer"
                  />
                </div>
                <div className="mb-5 flex items-center justify-between">
                 

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
                  {formData.photo && (
                    <figure className="w-[60px] h-[60px] rounded-full border border-solid border-primaryColor flex items-center justify-center">
                      <img src={formData.photo} alt="" className="w-full rounded-full" />
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
                      Upload photo
                    </label>
                  </div>
                </div>
                <div className="mt-7">
                  <button
                    disabled={loading}
                    type="submit"
                    className="btn mt-2 w-full bg-[#ccf0f3] text-primaryColor text-[18px] px-4 py-3 leading-[30px] rounded-lg"
                  >
                    {loading ? <HashLoader size={25} color="#ffffff" /> : 'Update'}
                  </button>
                </div>
              </form>
    </div>
  )
}

export default Profile