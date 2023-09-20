import React from "react";
const DoctorAbout=()=>{
    return(
        <div>
            <div>
                <h3 className="text-[20px] leading-[30px] text-primaryColor font-semibold flex items-center gap-2">
                    About of
                    <span className="text-greenColor font-bold text-[24px] leading-9">
                        Javad Ali
                    </span>
                </h3>
                <p className="text__para text-textColor">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur perspiciatis, adipisci quasi deleniti quibusdam, itaque iste quo doloremque quas consequatur reiciendis ratione ab? Illum blanditiis aliquam et sequi velit in.</p>
            </div>
            <div className="mt-12">
                <h3 className="text-[20px] leading-[30px] text-primaryColor font-semibold">Education</h3>
                <ul className="pt-4 md:p-5">
                    <li className="flex flex-col sm:justify-between md:gap-5 mb-[30px]">
                        <div>
                            <span className="text-textColor text-[15px] leading-6 font-semibold">23 june,2008</span>
                            <p className="text-[16px] leading">PHD in Surgeon</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default DoctorAbout