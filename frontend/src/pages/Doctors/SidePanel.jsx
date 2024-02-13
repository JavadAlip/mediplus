// import React from "react";
// const SidePanel=({doctorsId, ticketPrice, timeSlots})=>{
//     return(
//         <div className="shadow-panelShadow p-3 lg:p-5 rounded-md">
//             <div className="flex items-center justify-between">
//                 <p className="text__para mt-0 front-semibold">Ticket Price</p>
//                 <span className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-primaryColor font-bold ">₹{ticketPrice}</span>
//             </div>
//             <div className="mt-[30px]">
//                 <p className="text__para mt-0 font-semibold text-primaryColor">Available Time Slots:</p>
//                 <ul className="mt-3">
//                     {timeSlots?.map((item, index)=>{
//                          <li key={index} className="flex items-center justify-between mb-2">
//                          <p className="text-[15px]">{item.day}</p>
//                          <p className="text-[15px] leading-6 text-textColor font-semibold">
//                             {item.startingTime} - {item.endingTime}
//                          </p>
//                      </li>
//                     })}
                   
//                 </ul>
//             </div>
//             <button className="btn px-2 w-full rounded-md">Book Appoinment</button>
//         </div>
//     )

// }
// export default SidePanel


import React from "react";
import convertTime from "../../utils/timeConvert";

const SidePanel = ({ doctorsId, ticketPrice, timeSlots }) => {
  return (
    <div className="shadow-panelShadow p-3 lg:p-5 rounded-md">
      <div className="flex items-center justify-between">
        <p className="text__para mt-0 front-semibold">Ticket Price</p>
        <span className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-primaryColor font-bold ">
          ₹ {ticketPrice}
        </span>
      </div>
      <div className="mt-[30px]">
        <p className="text__para mt-0 font-semibold text-primaryColor">
          Available Time Slots:
        </p>
        <ul className="mt-3">
          {timeSlots?.map((item, index) => {
            return (
              <li key={index} className="flex items-center justify-between mb-2">
                <p className="text-[15px]">{item.day.charAt(0).toUpperCase() + item.day.slice(1)}</p>
                <p className="text-[15px] leading-6 text-textColor font-semibold">
                  {convertTime(item.startingTime)} -  {convertTime(item.endingTime)}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
      <button className="btn px-2 w-full rounded-md">Book Appointment</button>
    </div>
  );
};

export default SidePanel;
