
import initModels from "../models/init-models.js";
import sequelize from "../models/connect.js";
import { Op } from 'sequelize'
import { responseAPI } from "../config/response.js";

const model = initModels(sequelize);


const login = async (req, res) => {
    // find data email, password
    let { email, password } = req.body;
    let checkEmail = await model.users.findOne({
        where: {
            email: email

        }
    });

    if (checkEmail) {
        // check password
        if (checkEmail.pass_word == password) {
            responseAPI(res, 200, "token", "success");
        } else {
            responseAPI(res, 400, "", "Password is incorrect");
        }
    } else {
        responseAPI(res, 400, "", "Email is incorrect");

    }
}

const signUp = async (req, res) => {

    try {
        let { fullName, email, password } = req.body;

        let newUser = {
            full_name: fullName,
            email: email,
            pass_word: password,
            avatar: "",
            face_app_id: "",
            role: "USER"
        }
        // email không trùng
        let checkEmail = await model.users.findOne({
            where: {
                email: email
            }
        });
        if (checkEmail) {
            responseAPI(res, 400, "", "Email already exists");
            return;
        }

        await model.users.create(newUser);

        responseAPI(res, 200, "", "success");

    } catch {
        responseAPI(res, 500, "", "error");
    }
}

export {
    login,
    signUp
};