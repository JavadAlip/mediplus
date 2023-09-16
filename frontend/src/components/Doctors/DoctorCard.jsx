import starIcon from '../../assets/images/star.png';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
const DoctorCard = ({doctor}) => {
    const {name,avgRating,specialty,totalPatients,hospital,photo,totalRating}=doctor


    return (
      <div className="p-3 lg:p-10">
        <div >
            <img src={photo} alt="" />
        </div>
        <h2 className="text-[18px]  leading-[30px] lg:text-[26px] lg:leading-9 text-primaryColor font-[700] mt-3
        lg:mt-5 " style={{textAlign:'left'}}>{name}
        </h2>
        <div className="mt-2 lg:mt-4 flex items-center justify-between">
            <span className='bg-[#ccf0f3] text-primaryColor py-1 px-2 lg:py-2 lg:px-6 text-[18px]
            leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded'>{specialty}</span>
            <div className='flex item-center gap-[6px]'>
                <span className='flex item-center gap-[6px] text-[14px] leading-6 lg:text-[16px] lg:leading-7
                font-semibold text-primaryColor'><img src={starIcon} alt="" style={{height:23}}/>{avgRating}</span>
            </div>
        </div>
      </div>
    )
  }
  
  export default DoctorCard