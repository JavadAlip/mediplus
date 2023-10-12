import User from "../models/UserSchema.js";
import Booking from "../models/BookingSchema.js";
import Doctor from "../models/DoctorSchema.js"

//Update user profile
export const updateUser = async(req,res)=>{
    const id = req.params.id

    try {
        const updateUser = await User.findByIdAndUpdate(id, {$set:req.body}, {new:true})
        res.status(200).json({success:true,message:"Successfully Updated", data:updateUser})
        
    } catch (error) {
        res.status(500).json({success:false,message:"Failed to Update", data:updateUser})
        
    }
}
//Delete user profile
export const deleteUser = async(req,res)=>{
    const id = req.params.id

    try {
        const deleteUser = await User.findByIdAndDelete(id, {$set:req.body}, {new:true})
        res.status(200).json({success:true,message:"Successfully deleted", data:deleteUser})
        
    } catch (error) {
        res.status(500).json({success:false,message:"Failed to delete"})
        
    }
}

//get a single user
export const getSingleUser = async(req,res)=>{
    const id = req.params.id

    try {
        const user = await User.findById(id).select("-password")
        res.status(200).json({success:true,message:"User found", data:user})
        
    } catch (error) {
        res.status(404).json({success:false,message:"No user found", data:updateUser})
        
    }
}
//get all user
export const getAllUser = async(req,res)=>{
    try {
        const users = await User.find({}).select('-password')
        res.status(200).json({success:true,message:"Users found", data:users})
        
    } catch (error) {
        res.status(404).json({success:false,message:"Not found"})
        
    }
}

export const getUserProfile = async(req,res)=>{
    const userId = req.userId

    try {
        const user =await User.findById(userId)

        if (!user) {
            return res.status(404).json({success:false, message:"User not found"})
        }
        const {password, ...rest} = user._doc
        res.status(200).json({success:true, message:"Profile info is getting", data:{...rest}})
    } catch (error) {
        res.status(500).json({success:false,message:"Something went wrong, cannot get"})
        
    }
}

export const getMyAppointments = async(req,res)=>{
    try {
        //step-1 : retrieve Appoinments from booking to specific user
        const bookings = await Booking.find({user:req.userId})

        //step-2 : extract doctor ids from appoinment booking
        const doctorIds = bookings.map(el=>el.doctor.id)

        //step-3 : retrieve doctors using doctor ids
        const doctors = await Doctor.find({_id: {$in:doctorIds}}).select('-password')

        res.status(200).json({success:true, message:'Appointments are getting', data:doctors})

   
    } catch (error) {
        res.status(500).json({success:false,message:"Something went wrong, cannot get"})
        
        
    }
  
}
