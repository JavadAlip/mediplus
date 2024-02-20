import Admin from "../models/AdminSchema.js"

export const getAdmin = async (req,res)=>{
    const  id = req.params.id

    try {
        const admin = await Admin.findById(id)
        res.status(200).json({success:true, message:"Admin found", data:admin})
        
    } catch (error) {
        res.status(404).json({success:false, message:"No Admin found"})
        
    }
}