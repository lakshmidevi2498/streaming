 import content from '../model/contentModel.js'
 export const contentPostController = async (req,res) =>{
try {
    const {course, title, creator, description,rate, discount, percentage, bestSeller,rating,learner,demoUrl, demoImage,totalHours,star} = req.body;
    // if(!course || !title || !creator || !description || !rate || !discount || !percentage || !rating || !learner || !demoUrl || !demoImage || totalHours || star){
    //     res.status(400).json({message:"All fields are required"})
    // }
    const newContent = await new content({
        course, title, creator, description,rate, discount, percentage, bestSeller,rating,learner,demoUrl, demoImage,totalHours,star
    })
    await newContent.save()
    res.status(200).json({message:"content added successfully",newContent})
    
} catch (error) {
    console.log("error",error)
    res.status(500).json({message:"Internal server error"})
}
 }

 export const contentGetController = async (req,res) => {
  try {
    const courseContent = await content.find()
    res.status(200).json({courseContent})
    console.log("courseContent",courseContent)
      } catch (error) {
    console.log("error",error)
    res.status(500).json({message:"Internal server error"})
  }

 } 