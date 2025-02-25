import video from '../model/videoModel.js'
export const videoPostController = async(req,res) => {
    const {title,videoUrl ,ratings,ratingCount,reviews,hours} = req.body
    console.log("req.body",title,videoUrl ,ratings,ratingCount,reviews,hours)
    try {
        if(!title || !videoUrl || !ratings || !ratingCount || !reviews || !hours){
            res.status(400).json({message:"all fields are required"})
        }

        const newVideo = await new video({title,videoUrl ,ratings,ratingCount,reviews,hours})
        await newVideo.save()
        res.status(200).json({message:"Video Stored in DB successfully"})

        
    } catch (error) {
      console.log("error",error)
      res.status(500).json({message:"Internal server error"})  
    }
}

export const videoGetController = async(req,res) => {
    try {
        const videoData = await video.find()
        res.status(200).json({videoData})
        
    } catch (error) {
       console.log("error",error) 
       res.status(500).json({message:"Internal server error"})
    }

}