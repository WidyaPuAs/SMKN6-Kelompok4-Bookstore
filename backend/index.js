import express from "express";
import FileUpload from "express-fileupload";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import db from "./config/Database.js";
import router from "./routes/index.js";
import Users from "./models/UserModel.js";
import Product from "./models/ProductModel.js";
import ProductRoute from "./routes/ProductRoute.js";
dotenv.config();
const app = express();

try {
    await db.authenticate();
    console.log('Database Connected...');
    // await Users.sync();
    // await Product.sync();
} catch (error) {
    console.error(error);
}

app.use(cors({ credentials:true, origin:'http://localhost:3000' }));
app.use(FileUpload());
app.use(cookieParser());
app.use(express.json());
app.use(express.static("public"));
app.use(router);
app.use(ProductRoute);

app.listen(8000, ()=> console.log('Server running at port 8000'));