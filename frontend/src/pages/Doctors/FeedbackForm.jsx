import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
const FeedbackForm = () => {
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)
    return <form action="">
        <div>
            <h3 className="text-primaryColor text-[16px]  leading-6 font-semibold mb-4">
                How would you rate the overall experience?
            </h3>
            <div>
                {[...Array(5).keys()].map((_, index) => {
                    index += 1
                    return <button key={index} type="button"
                        className={`${index < ((rating && hover) || hover)
                            ? 'text-primaryColor'
                            : 'text-gray-400'
                            } bg-transparent border-none outline-none text-[22px] cursor-pointer  `}
                        onClick={() => setRating(index)} onMouseEnter={() => setHover(index)} onMouseLeave={() => setHover(rating)}
                        onDoubleClick={() => { setHover(0); setRating(0) }}
                    >
                        <span><AiFillStar /></span></button>
                })}
            </div>
        </div>
        <div className="mt-[30px]">
        <h3 className="text-primaryColor text-[16px]  leading-6 font-semibold mb-4">
                Share your feedback or suggestions
            </h3>

        </div>
    </form>
}
export default FeedbackForm;