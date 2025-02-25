import mongoose from 'mongoose'

const contentSchema = new mongoose.Schema({
    course:{
        type:String, required:true
    },
title:{
    type:String, required:true
},
creator:{
    type:String, required:true
},
description:{
    type:String, required:true
},
rate:{
    type:String, required:true
},
discount:{
    type:String, required:true
},
percentage:{
    type:String, required:true
},
bestSeller:{
    type:String
},
rating:{
    type:String, required:true
},
learner:{
    type:String, required:true
},
demoUrl:{
    type:String, required:true
},
demoImage:{
    type:String, required:true
},
totalHours:{
    type:String, required:true
},
star:{
    type:String, required:true
}
})

export default mongoose.model('content',contentSchema)