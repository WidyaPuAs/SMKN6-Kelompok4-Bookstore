import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Product = db.define('product',{
    judul_buku:{
        type: DataTypes.STRING
    },
    author:{
        type: DataTypes.STRING
    },
    sinopsis:{
        type: DataTypes.STRING
    },
    harga:{
        type: DataTypes.INTEGER
    },
    stok:{
        type: DataTypes.INTEGER
    },
    cover:{
        type: DataTypes.STRING
    }
}, {
    freezeTableName: true
});

export default Product;