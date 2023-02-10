import mongoose from 'mongoose';

const VideoSchema = new mongoose.Schema({
    Title: {
        type: String,
        required:true
    },
    Description: {
        type: String,
        required:true
    },
    Thumbnail: {
        type: String,
        required:true
    },
    Videourl: {
        type: String,
        required:true
    },
},
);

const video = mongoose.model('video', VideoSchema);

export default video;