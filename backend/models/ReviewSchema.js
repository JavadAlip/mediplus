// import mongoose from "mongoose";
// import Doctor from "../models/DoctorSchema.js";

// const reviewSchema = new mongoose.Schema(
//   {
//     doctor: {
//       type: mongoose.Types.ObjectId,
//       ref: "Doctor",
//     },
//     user: {
//       type: mongoose.Types.ObjectId,
//       ref: "User",
//     },
//     reviewText: {
//       type: String,
//       required: true,
//     },  
//     rating: {
//       type: Number,
//       required: true,
//       min: 0,
//       max: 5,
//       default: 0,
//     },
//   },
//   { timestamps: true }
// );

// reviewSchema.pre(/^find/, function(next){
//   this.populate({
//     path:"user",
//     select: "name photo",
//   });
//   next();
// });

// reviewSchema.statics.calcAverageRating = async function(doctorId){

//   const stats = await this.aggregate([{
//     $match:{doctor:doctorId}
//   },
//   {
//     $group:{
//       _id:"$doctor",
//       numOfRating:{$sum:1},
//       avgRating:{$avg:"$rating"}
//     }
//   }
// ]);

//   if(stats.length > 0) {
//     await Doctor.findByIdAndUpdate(doctorId,{
//       totalRating: stats[0].numOfRating,
//       averageRating: stats[0].avgRating,
//     });
//   } else {
//     await Doctor.findByIdAndUpdate(doctorId,{
//       totalRating: 0,
//       averageRating: 0,
//     });
//   }
// };

// reviewSchema.post('save', function(){
//   this.constructor.calcAverageRating(this.doctor);
// });

// export default mongoose.model("Review", reviewSchema);



import mongoose from "mongoose";
import Doctor from "../models/DoctorSchema.js";

const reviewSchema = new mongoose.Schema(
  {
    doctor: {
      type: mongoose.Types.ObjectId,
      ref: "Doctor",
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    reviewText: {
      type: String,
      required: true,
    },  
    rating: {
      type: Number,
      required: true,
      min: 0,
      max: 5,
      default: 0,
    },
  },
  { timestamps: true }
);

reviewSchema.pre(/^find/, function(next){
  this.populate({
    path:"user",
    select: "name photo",
  });
  next();
});

reviewSchema.statics.calcAverageRating = async function(doctorId){

  const stats = await this.aggregate([
    {
      $match: { doctor: doctorId }
    },
    {
      $group: {
        _id: "$doctor",
        numOfRating: { $sum: 1 },
        avgRating: { $avg: "$rating" }
      }
    }
  ]);

  let roundedAvgRating = 0;

  if(stats.length > 0) {
    // Round the average rating to one decimal place
    roundedAvgRating = parseFloat(stats[0].avgRating.toFixed(1));
  }

  await Doctor.findByIdAndUpdate(doctorId, {
    totalRating: stats.length > 0 ? stats[0].numOfRating : 0,
    averageRating: roundedAvgRating
  });
};

reviewSchema.post('save', function(){
  this.constructor.calcAverageRating(this.doctor);
});

export default mongoose.model("Review", reviewSchema);
