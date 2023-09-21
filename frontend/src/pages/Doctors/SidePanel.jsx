import React from "react";
const SidePanel=()=>{
    return(
        <div className="shadow-panelShadow p-3 lg:p-5 rounded-md">
            <div className="flex items-center justify-between">
                <p className="text__para mt-0 front-semibold">Ticket Price</p>
                <span className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-primaryColor font-bold ">₹500</span>
            </div>
            <div className="mt-[30px]">
                <p className="text__para mt-0 font-semibold text-primaryColor">Available Time Slots:</p>
                <ul className="mt-3">
                    <li className="flex items-center justify-between mb-2">
                        <p className="text-[15px]">Sunday</p>
                        <p className="text-[15px] leading-6 text-textColor font-semibold">
                            4:00 PM - 9:30 PM
                        </p>
                    </li>
                    <li className="flex items-center justify-between mb-2">
                        <p className="text-[15px]">Thuesday</p>
                        <p className="text-[15px] leading-6 text-textColor font-semibold">
                            4:00 PM - 9:30 PM
                        </p>
                    </li>
                    <li className="flex items-center justify-between mb-2">
                        <p className="text-[15px]">Wednesday</p>
                        <p className="text-[15px] leading-6 text-textColor font-semibold">
                            4:00 PM - 9:30 PM
                        </p>
                    </li>
                </ul>
            </div>
            <button className="btn px-2 w-full rounded-md">Book Appoinment</button>
        </div>
    )

}
export default SidePanel