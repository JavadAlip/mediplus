import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../config';
import { toast } from 'react-toastify';
import { authContext } from '../../context/authContext';

const AdminLogin = () => {
  const [formDataa, setFormDataa] = useState({
    name: "",
    password: "",
  });
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { dispatch } = useContext(authContext)
  const handleInputChange = (e) => {
    setFormDataa({ ...formDataa, [e.target.name]: e.target.value });
  };
  const submitHandler = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/api/v1/Auth/login`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDataa),
      });

      const result = await res.json();
      if (!res.ok) {
        throw new Error(result.message);
      }
      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: {
          user: result.data,
        }
      })
      console.log(result, 'login data')
      setLoading(false)
      toast.success(result.message)
      navigate('/adminHome')
    } catch (error) {
      toast.error(error.message)
      setLoading(false)
    }
  }
  return (
    <section className=' px-5 lg:px-0 pt-[160px]'>
      <div className=' w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10 hero__section'>
        <h3 className='text-primaryColor text-[22px] leading-7 font-bold mb-10'>Admin <span
          className='text-greenColor'> Login!</span></h3>
        <form className='py-4 md:py-0' onSubmit={submitHandler}>
          <div className='mb-5'>
            <input
              type='text'
              placeholder='name'
              name='name'
              value={formDataa.name}
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
              value={formDataa.password}
              onChange={handleInputChange}
              className='w-full  py-3 border-b border-solid border-primaryColor focus:outline-none
              focus:border-b-textColor text-[16px] leading-7 text-textColor placeholder:text-textColor rounded-md cursor-pointer'
            />
          </div>
          <div className='mt-7'>
            <button type='submit' className='btn mt-2 w-full bg-[#ccf0f3] text-primaryColor text-[18px] px-4 py-3
            leading-[30px] rounded-lg'>{loading ? <HashLoader size={25} color='#fff' /> : 'Login'}</button>
          </div>
        </form>
      </div>
    </section>
  );
}
export default AdminLogin