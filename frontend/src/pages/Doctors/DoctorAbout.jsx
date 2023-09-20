import React from "react";
import { formateDate } from "../../utils/formateDate";
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
                            <span className="text-greenColor text-[15px] leading-6 font-semibold">{formateDate('09-12-2014')} - {formateDate('09-12-2016')}</span>
                            <p className="text-[16px] leading-6 text-textColor">PHD in Surgeon</p>
                            <p className="text-[14px] leading-5 font-medium text-textColor">MIMS Hospital, Kottakkal.</p>
                        </div>
                        
                    </li>
                    <li className="flex flex-col sm:justify-between md:gap-5 mb-[30px]">
                        <div>
                            <span className="text-greenColor text-[15px] leading-6 font-semibold">{formateDate('11-04-2011')} - {formateDate('05-05-2013')}</span>
                            <p className="text-[16px] leading-6 text-textColor">PHD in Surgeon</p>
                            <p className="text-[14px] leading-5 font-medium text-textColor">MIMS Hospital, Kottakkal.</p>
                        </div>
                        
                    </li>
                </ul>
                
            </div>

            <div className="mt--1">
            <h3 className="text-[20px] leading-[30px] text-primaryColor font-semibold">Experience</h3>
            <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
                <li className="p-3 rounded bg-[#ccf0f3]">
                    <span className="text-primaryColor text-[16px] leading-6 font-semibold">
                    {formateDate('11-04-2011')} - {formateDate('05-05-2013')}
                    </span>
                    <p className="text-[16px] leading-6 text-textColor">Sr. Surgeon</p>
                    <p className="text-[14px] leading-5 font-medium text-textColor">MIMS Hospital, Kottakkal.</p>
                </li>
                <li className="p-3 rounded bg-[#ccf0f3]">
                    <span className="text-primaryColor text-[16px] leading-6 font-semibold">
                    {formateDate('11-04-2011')} - {formateDate('05-05-2013')}
                    </span>
                    <p className="text-[16px] leading-6 text-textColor">Sr. Surgeon</p>
                    <p className="text-[14px] leading-5 font-medium text-textColor">MIMS Hospital, Kottakkal.</p>
                </li>
            </ul>
            </div>
            
        </div>
    )
}
export default DoctorAbout