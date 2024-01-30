// Các bước setup source BE
// B1: yarn init (enter...)=> tạo package.json
// yarn add express => install express
// yarn add nodemon => run watching => auto restart server
// setup yarn start => package.json

// Thêm vào file package.json
// "type": "module",
//  "scripts": {
//     "start": "nodemon index.js"
//     "dev": "nodemon index.js"
//  },
// run terminal => yarn dev hoặc yarn start

// ES module => import express from 'express';
import express from 'express';

// terminal => yarn add cors
import cors from 'cors';

const app = express();

app.use(express.json()); // chuyển đổi text body sang json


// Cho phép FE truy cập vào API của BE, được quy định qua domain
// app.use(cors({
//     origin: ['http://localhost:3000','http://google.com'],
// })) // cho phép localhost:3000 và google.com truy cập vào API

app.use(cors()) // Cho phép tất cả

// khởi tạo server BE với port 8080
app.listen(8080);

// Tạo API
// GET => /demo
app.post('/demo/:id/:hoTen', (req, res) => {

    // C1: gửi bằng URL
    //  + L1: gửi bằng query string
    // let { id, hoTen } = req.query;


    //  + L2: gửi bằng query params
    // let { id, hoTen, } = req.params;

    // C2: gửi bằng body (json)
    // {"id": 1, "hoTen": "abc"}
    let { id, hoTen, email } = req.body;

    // gửi dữ liệu cho frontEnd
    // statusCode: 200-500
    res.status(201).send({ id, hoTen, email }); // gửi tất cả dữ liệu trừ number
}); // rest parameters

// quy tắt đặt tên...
// tất cả datatype lấy từ url đều là string
// cài thư viện mysql => yarn add mysql2
// import mysql from 'mysql2';

// let connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'HoanglonG81@',
//     port: '3308',
//     database: 'db_yutube'
// });

import rootRoute from './routes/rootRoute.js';
app.use(rootRoute)

// MVC R
// ORM Sequelize

