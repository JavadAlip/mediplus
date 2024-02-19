
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
// Delete user account
export const deleteUserAccount = async (req, res) => {
    const userId = req.userId; // Assuming you are storing the user ID in the request object after authentication

    try {
        // Delete the user
        await User.findByIdAndDelete(userId);
        // Optionally, you might also want to delete related data such as bookings, appointments, etc.
        // Example: await Booking.deleteMany({ user: userId });

        res.status(200).json({ success: true, message: "User account deleted successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to delete user account", error: error.message });
    }
};


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
            return res.status(404).json({success:false, message:"Not found"})
        }
        const {password, ...rest} = user._doc
        res.status(200).json({success:true, message:"Profile info is getting", data:{...rest}})
    } catch (error) {
        res.status(500).json({success:false,message:"Something went wrong, cannot get"})
        
    }
}
export const getMyAppointments = async (req, res) => {
    try {
        // Retrieve appointments for the specific user and populate the 'doctor' field
        const appointments = await Booking.find({ user: req.userId }).populate('doctor');

        res.status(200).json({ success: true, message: 'Appointments are retrieved successfully', data: appointments });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Something went wrong, could not get appointments' });
    }
};

