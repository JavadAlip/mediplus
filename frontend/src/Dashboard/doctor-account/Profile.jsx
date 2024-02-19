import React, { useEffect, useState } from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import uploadImageCloudinary from './../../utils/uploadCloudinary'

import { BASE_URL, token } from './../../config'
import { toast } from 'react-toastify'
const Profile = ({ doctorData }) => {
    const [FormData, setFormdata] = useState({
        name: "",
        email: "",
        phone: "",
        bio: "",
        gender: "",
        Specialization: "",
        ticketPrice: 0,
        experiences: [],
        timeSlots: [],
        about: "",
        photo: null,
        password: "",
    })
    useEffect(() => {
        setFormdata({
            name: doctorData?.name,
            email: doctorData?.email,
            phone: doctorData?.phone,
            bio: doctorData?.bio,
            gender: doctorData?.gender,
            specialization: doctorData?.specialization,
            ticketPrice: doctorData?.ticketPrice,
            experiences: doctorData?.experiences,
            timeSlots: doctorData?.timeSlots,
            about: doctorData?.about,
            photo: doctorData?.photo,
        })
    }, [doctorData])


    const handleInputChange = e => {
        setFormdata({ ...FormData, [e.target.name]: e.target.value })

    }
    const handleFileInputChange = async event => {
        const file = event.target.files[0]
        const data = await uploadImageCloudinary(file)
        console.log(data);
        setFormdata({ ...FormData, photo: data?.url })
    }
    const updateProfileHandler = async e => {
        e.preventDefault();

        try {
            const res = await fetch(`${BASE_URL}/api/v1/doctors/${doctorData._id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(FormData)
            })

            const result = await res.json()
            if (!res.ok) {
                throw Error(result.message)
            }
            toast.success(result.message)
        } catch (err) {
            toast.error(err.message)
        }
    }

    // //function for  adding experiece in reusable
    // const addItem=(key, item)=>{
    //     setFormdata(prevFormData=>({...prevFormData,[key]:[...prevFormData[key],item]}))
    // }

    // // reusable input change funtion
    const handleReusableInputChangeFunc=(key, index, event)=>{
    const {name, value}=event.target
    setFormdata(prevFormData=>{
        const updateItems =[...prevFormData[key]]
        updateItems[index][name]=value
        return{
            ...prevFormData,
            [key]:updateItems,
        }
    })
    }

    // //reusable funtion for deleting item 
    const deleteItem=(key,index)=>{
        setFormdata(prevFormData=>({...prevFormData,[key]:prevFormData[key].filter((_,i)=>i===index)}))
    }



    // function for adding experience in reusable
    const addItem = (key, item) => {
        setFormdata(prevFormData => ({
            ...prevFormData,
            [key]: Array.isArray(prevFormData[key]) ? [...prevFormData[key], item] : [item]
        }));
    };

    // reusable input change function
    // const handleReusableInputChangeFunc = (key, index, event) => {
    //     const { name, value } = event.target;
    //     setFormdata(prevFormData => {
    //         const updateItems = [...prevFormData[key]];
    //         updateItems[index][name] = value;
    //         return {
    //             ...prevFormData,
    //             [key]: updateItems
    //         };
    //     });
    // };

    // // reusable function for deleting item
    // const deleteItem = (key, index) => {
    //     setFormdata(prevFormData => {
    //         const updatedArray = Array.isArray(prevFormData[key]) ? [...prevFormData[key]] : [];
    //         updatedArray.splice(index, 1);
    //         return { ...prevFormData, [key]: updatedArray };
    //     });
    // };



    //add
    const addExperience = e => {
        e.preventDefault()
        addItem("experiences", {
            startingDate: "", endingDate: "", position: "senior", hospital: "mims"
        })
    }
    // change
    const handleExperienceChange = (event, index) => {
        handleReusableInputChangeFunc("experiences", index, event)
    }
    //delete
    const deleteExperience = (e, index) => {
        e.preventDefault()
        deleteItem("experiences", index)
    }


    //add
    const addTimeSlot = e => {
        e.preventDefault()

        addItem("timeSlots", {
            day: "Saturday", startingTime: "11:00", endingTime: "03:30"
        })
    }
    // change
    const handleTimeSlotChange = (event, index) => {
        handleReusableInputChangeFunc("timeSlots", index, event)
    }
    //delete
    const deleteTimeSlot = (e, index) => {
        e.preventDefault()
        deleteItem("timeSlots", index)
    }

    return (
        <div>
            <h2 className='text-greenColor font-bold text-[24px] leading-9 mb-10'> Profile Information :</h2>
            <form>
                <div className='mb-5'>
                    <p className='form__label'>Name:</p>
                    <input type="text" name='name' value={FormData.name} onChange={handleInputChange}
                        placeholder='Full Name' className='form__input' />
                </div>
                <div className='mb-5'>
                    <p className='form__label'>Email:</p>
                    <input type="text" name='email' value={FormData.email} onChange={handleInputChange}
                        placeholder='E-mail' className='form__input' />
                </div>
                <div className='mb-5'>
                    <p className='form__label'>Phone:</p>
                    <input type="number" name='phone' value={FormData.phone} onChange={handleInputChange}
                        placeholder='Phone' className='form__input' />
                </div>
                <div className='mb-5'>
                    <p className='form__label'>Bio:</p>
                    <input type="text" name='bio' value={FormData.bio} onChange={handleInputChange}
                        placeholder='Bio' className='form__input'
                        maxLength={100} />
                </div>
                <div className='mb-5'>
                    <div className='grid grid-cols-3 gap-4 mb-[30px]'>
                        <div>
                            <p className='form__label'>Gender</p>
                            <select name="gender" value={FormData.gender} onChange={handleInputChange}
                                className='form__input py-3 '>
                                <option value="">Select</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div>
                            <p className='form__label'>Specialization</p>
                            <select name="specialization" value={FormData.specialization} onChange={handleInputChange}
                                className='form__input py-3 '>
                                <option value="">Select</option>
                                <option value="Surgeon">Surgeon</option>
                                <option value="Neurologist">Neurologist</option>
                                <option value="Oncologist">Oncologist</option>
                                <option value="Psychiatrist">Psychiatrist</option>
                                <option value="Vascular-Surgeon">Vascular-surgeon</option>
                                <option value="Obstetrician">Obstetrician</option>
                                <option value="Dermatologist">Dermatologist</option>
                            </select>
                        </div>
                        <div>
                            <p className='form__label'>Ticket Price</p>
                            <input type="number" placeholder='150' name='ticketPrice' value={FormData.ticketPrice}
                                className='form__input' onChange={handleInputChange} />
                        </div>
                    </div>
                </div>

                {/* experiece */}
                <br />
                <div className='mb-5'>
                    <p className='form__label text-greenColor'>Experience:</p>
                    {FormData.experiences?.map((item, index) => <div key={index}>
                        <div>
                            <div className='grid grid-cols-2 gap-5'>
                                <div>
                                    <p className='form__label'>Starting Date*</p>
                                    <input type="date" name='startingDate' value={item.startingDate} className='form__input'
                                        onChange={e => handleExperienceChange(e, index)} />
                                </div>
                                <div>
                                    <p className='form__label'>Ending Date*</p>
                                    <input type="date" name='endingDate' value={item.endingDate} className='form__input'
                                        onChange={e => handleExperienceChange(e, index)} />
                                </div>

                                <div>
                                    <p className='form__label'>Position*</p>
                                    <input type="text" name='position' value={item.position} className='form__input'
                                        onChange={e => handleExperienceChange(e, index)} />
                                </div>
                                <div>
                                    <p className='form__label'>Hospital*</p>
                                    <input type="text" name='hospital' value={item.hospital} className='form__input'
                                        onChange={e => handleExperienceChange(e, index)} />
                                </div>
                            </div>
                        </div>
                        <div className='grid grid-cols-2 gap-5 mt-5'></div>
                        <button onClick={e => deleteExperience(e, index)} className='bg-red-600 p-2 rounded-full text-white  cursor-pointer text-[18px] mt-2 mb-[30px]'
                        ><AiOutlineDelete /></button>
                    </div>
                    )}
                    <button onClick={addExperience} className='bg-[#ccf0f3] font-semibold py-2 px-5 rounded-lg text-primaryColor cursor-pointer'>Add Experience</button>
                </div>


                {/* /timeSlots */}
                <br/>
                <div className='mb-5'>
                    <p className='form__label text-greenColor'>Time Slots:</p>
                    {FormData.timeSlots?.map((item, index) => <div key={index}>
                        <div>
                            <div className='grid grid-cols-2 md:grid-cols-4 mb-[30px] gap-5'>
                                <div>
                                    <p className='form__label'>Day*</p>
                                    <select name="day" value={item.day} className='form__input py-3' id=""
                                        onChange={e => handleTimeSlotChange(e, index)}>
                                        <option value="">Select</option>
                                        <option value="saturday">Saturday</option>
                                        <option value="monday">Monday</option>
                                        <option value="tuesday">Tuesday</option>
                                        <option value="wednesday">Wednesday</option>
                                        <option value="thursday">Thursday</option>
                                        <option value="friday">Friday</option>
                                    </select>
                                </div>
                                <div>
                                    <p className='form__label'>Starting Time*</p>
                                    <input type="time" name='startingTime' value={item.startingTime} className='form__input'
                                        onChange={e => handleTimeSlotChange(e, index)} />
                                </div>
                                <div>
                                    <p className='form__label'>Ending Time*</p>
                                    <input type="time" name='endingTime' value={item.endingTime} className='form__input'
                                        onChange={e => handleTimeSlotChange(e, index)} />
                                </div>
                                <div onClick={e => deleteTimeSlot(e, index)} className='flex items-center'>
                                    <button className='bg-red-600 p-2 rounded-full text-white  cursor-pointer text-[18px] mt-2'
                                    ><AiOutlineDelete /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    )}
                    <button onClick={addTimeSlot} className='bg-[#ccf0f3] font-semibold py-2 px-5 rounded-lg text-primaryColor cursor-pointer'>Add TimeSlot</button>
                </div>

                {/* about section */}
                <br />
                <p className='form__label text-greenColor'>About:</p>
                <textarea name="about" rows="10" value={FormData.about} placeholder='Write about you ...'
                    onChange={handleInputChange} className='form__input text-[14px]'></textarea>
                {/* <div className='mb-5 flex items-center gap-3'></div> */}
                <div className="mb-5 flex items-center gap-3">
                    {FormData.photo && (
                        <figure className="w-[60px] h-[60px] rounded-full border border-solid border-primaryColor flex items-center justify-center">
                            <img src={FormData.photo} alt="" className="w-full rounded-full" />
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

                <div className='mt-7'>
                    <button type='submit' onClick={updateProfileHandler} className='bg-[#ccf0f3] btn text-primaryColor text-[18px] leading-[30px] w-full py-3 px-4 font-semibold rounded-lg'>Update Profile</button>
                </div>
            </form>
        </div>
    )
}

export default Profile