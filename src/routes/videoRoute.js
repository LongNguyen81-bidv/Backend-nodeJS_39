// quản lý API
import express from 'express';
import {
    getVideo,
    createVideo,
    getVideoType,
    getVideoWithType,
    getVideoPage
} from '../controllers/videoController.js';
const videoRoute = express.Router();

videoRoute.get('/get-video', getVideo);

videoRoute.post('/create-video', createVideo);

// API get video type
videoRoute.get("/get-video-type", getVideoType);

// API get video with type
videoRoute.get("/get-video-with-type/:typeId", getVideoWithType);

// API get video page
videoRoute.get("/get-video-page/:page", getVideoPage);

export default videoRoute;