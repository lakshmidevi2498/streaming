import mongoose from 'mongoose'
const videoSchema = mongoose.Schema({
    title:{
        type:String, required:true
    },
    videoUrl:{
        type:String, required:true
    },
    ratings:{
        type:String, required:true 
    },
    ratingCount:{
        type:String, required:true
    },
    reviews:{
        type:String, required:true
    },
    hours:{
        type:String, required:true
    }
})
 export default mongoose.model('video',videoSchema)