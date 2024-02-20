// import starIcon from '../../assets/images/star.png';
// import { Link } from 'react-router-dom';
// import { BsArrowRight } from 'react-icons/bs';
// const DoctorCard = ({ doctor }) => {
//     const { name, avgRating, specialization, experiences, totalPatients, hospital, photo, totalRating } = doctor

//     return (
//         <div className="p-3 lg:p-10 mt-2">
//             <div >
//                 <img src={photo} alt="" style={{ borderRadius: "7%" }} />
//             </div>
//             <h2 className="text-[18px]  leading-[30px] lg:text-[26px] lg:leading-9 text-primaryColor font-[700] mt-3
//         lg:mt-5 " style={{ textAlign: 'left' }}>{name}
//             </h2>
//             <div className="mt-2 lg:mt-4 flex items-center justify-between">
//                 <span className='bg-[#ccf0f3] text-primaryColor py-1 px-2 lg:py-2 lg:px-6 text-[18px]
//             leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded'>{specialization}</span>
//                 <div className='flex item-center gap-[6px]'>
//                     <span className='flex item-center gap-[5px] text-[14px] leading-6 lg:text-[16px] lg:leading-7
//                 font-semibold text-primaryColor'><img src={starIcon} alt="" style={{ height: 21 }} />{avgRating}</span>

//                     <span className='text-[14px] leading-6 lg:text-[16px] lg:leading-7
//                 font-[400] text-textColor'>({totalRating})</span>
//                 </div>
//             </div>

//             <div className='mt-[18px] lg:mt-5 flex item-center justify-between'>
//                 <div>
//                     {/* <h3 className='text-[16px] leading-7 lg:text-[18px] 
//                 lg:leading-[30px] font-semibold text-primaryColor'  style={{ textAlign: 'left' }}>+{totalPatients} patients
//                 </h3> */}
//                     <p className='text-[14px] leading-6 font-[400] text-textColor'>At {experiences && experiences[0]?.hospital}</p>
//                 </div>
//                 <Link
//                     to={`/doctors/${doctor._id}`}
//                     className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E]  
//         flex items-center justify-center text-white group bg-primaryColor hover:bg-greenColor hover:border-none'
//                 >
//                     <BsArrowRight className=" group-hover:text-white w-6 h-5" />
//                 </Link>

//             </div>
//         </div>
//     )
// }

// export default DoctorCard


import starIcon from '../../assets/images/Star.png';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import { authContext } from '../../context/authContext'; // Import the AuthContext
import { useContext } from 'react';
import { toast } from 'react-toastify';

const DoctorCard = ({ doctor }) => {
    const { name, avgRating, specialization, experiences, photo, totalRating } = doctor;
    const { user } = useContext(authContext); // Get the user from AuthContext

    const handleDoctorClick = () => {
        if (user) {
            // If logged in, navigate to the doctor details page
            return null; // This will allow the Link component to handle navigation
        } else {
            // If not logged in, show error message or redirect to login page
            toast.error("Can't enter without login!");
        }
    };

    return (
        <div className="p-3 lg:p-10 mt-2">
            <div>
                <img src={photo} alt="" style={{ borderRadius: "7%" }} />
            </div>
            <h2 className="text-[18px]  leading-[30px] lg:text-[26px] lg:leading-9 text-primaryColor font-[700] mt-3 lg:mt-5 " style={{ textAlign: 'left' }}>{name}</h2>
            <div className="mt-2 lg:mt-4 flex items-center justify-between">
                <span className='bg-[#ccf0f3] text-primaryColor py-1 px-2 lg:py-2 lg:px-6 text-[18px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded'>{specialization}</span>
                <div className='flex item-center gap-[6px]'>
                    <span className='flex item-center gap-[5px] text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-semibold text-primaryColor'><img src={starIcon} alt="" style={{ height: 21 }} />{avgRating}</span>
                    <span className='text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-[400] text-textColor'>({totalRating})</span>
                </div>
            </div>
            <div className='mt-[18px] lg:mt-5 flex item-center justify-between'>
                <div>
                    <p className='text-[14px] leading-6 font-[400] text-textColor'>At {experiences && experiences[0]?.hospital}</p>
                </div>
                <Link
                    to={user ? `/doctors/${doctor._id}` : '/login'}
                    className={`w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E]  
        flex items-center justify-center text-white group bg-primaryColor hover:bg-greenColor hover:border-none ${user && 'cursor-pointer'}`}
                    onClick={handleDoctorClick}
                >
                    <BsArrowRight className=" group-hover:text-white w-6 h-5" />
                </Link>
            </div>
        </div>
    )
}

export default DoctorCard;




