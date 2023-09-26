import User from "../models/UserSchema.js";

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