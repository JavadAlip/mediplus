import Review from '../models/ReviewSchema.js';
import Doctor from '../models/DoctorSchema.js';

// get all reviews
export const getAllReviews = async (req, res)=>{
    try {
        const reviews = await Review.find({});
        res.status(200).json({success: true, message:"Successful", data: reviews});

    }
    catch (error){
        res.status(404).json({success: false, message:"Not found"});
    }
}

