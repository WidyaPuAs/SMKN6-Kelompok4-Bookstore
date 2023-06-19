import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import db from './config/Database.js';
import router from './routes/index.js';
dotenv.config();

import Users from './models/UserModel.js';
import Product from './models/ProductModel.js';
import Profile from './models/ProfileModel.js';

const app = express();

try {
    await db.authenticate();
    console.log('Database Connected (＞﹏＜)');
    await Users.sync();
    // await Product.sync();
} catch (error) {
    console.error(error);
}

app.use(cors({ credentials: true, origin:'http://localhost:3000' }));
app.use(cookieParser());
app.use(express.json());
app.use(router);

app.listen(8000, () => {
    console.log("Running Backend Server");
})
