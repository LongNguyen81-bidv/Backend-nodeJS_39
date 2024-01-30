
// import Video from '../models/video.js';

import initModels from "../models/init-models.js";
import sequelize from "../models/connect.js";
import { Op } from 'sequelize'
import { responseAPI } from "../config/response.js";

const model = initModels(sequelize);

let getVideo = async (req, res) => {
    let data = await model.video.findAll({
        // include: ["type", "user"]
        // where: {
        //     video_id: 4,
        //     // video_name: {
        //     //     [Op.like]: '%gaming%'
        //     // }
        // }
    });
    // res.send(data);
    responseAPI(res, 200, data, "success");
}

let createVideo = (req, res) => {
    res.send("creat video");
}

let getVideoType = async (req, res) => {
    let data = await model.video_type.findAll();
    responseAPI(res, 200, data, "success");
}

let getVideoWithType = async (req, res) => {
    let { typeId } = req.params;

    let data = await model.video.findAll({

        // include: ["type", "user"],
        where: {
            type_id: typeId
        }

    });
    responseAPI(res, 200, data, "success");
}

let getVideoPage = async (req, res) => {
    let { page } = req.params;
    let pageSize = 3;

    let countVideo = await model.video.count();
    let totalPage = Math.ceil(countVideo / pageSize);

    let index = (page - 1) * pageSize;

    let data = await model.video.findAll({
        offset: index,
        limit: pageSize
    });
    responseAPI(res, 200, { content: data, totalPage }, "success");
}

export {
    getVideo,
    createVideo,
    getVideoType,
    getVideoWithType,
    getVideoPage
}