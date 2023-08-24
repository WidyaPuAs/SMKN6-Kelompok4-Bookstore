import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Product = db.define('product',{
    name: DataTypes.STRING,
    author: DataTypes.STRING,
    image: DataTypes.STRING,
    url: DataTypes.STRING,
    harga: DataTypes.STRING
},{
    freezeTableName: true
});

export default Product;

(async()=>{
    await db.sync();
})();