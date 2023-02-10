import express from 'express';
import video from '../modal/Video_modal.js';
const route = express.Router();

route.post("/", async (request, response) => {
    const newVideos = new video(request.body); 
    try{
        
    await newVideos.save();
    response.status(200).json("Video has been saved successfully");
    }
    catch(error){
        response.status(500).json(error);
    }

}
);

route.get('/getvideos', async (request, response) => {
    try {
        const videos = await video.find({});
        response.status(200).json(videos);
    } catch (error) {
        response.status(500).json(error);
    }

}) 

export default route;