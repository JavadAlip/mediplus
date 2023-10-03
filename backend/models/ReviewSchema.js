import mongoose from "mongoose";

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
})

reviewSchema.statics.calcAverageRating = async function(doctorId){

//point on current review
  const stats = await this.aggregate([{
    $match:{doctor:doctorId}
  },
  {
    $group:{
      _id:"$doctor",
      numOfRating:{$sum:1},
      avgRating:{$avg:"$rating"}
    }
  }
])
console.log(stats);

}
reviewSchema.post('save', function(){
  this.constructor.calcAverageRating(this.doctor)
})

export default mongoose.model("Review", reviewSchema);