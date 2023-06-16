import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Pesanan = db.define('pesanan',{
    nama:{
        type: DataTypes.STRING
    },
    product:{
        type: DataTypes.STRING
    },
    total:{
        type: DataTypes.INTEGER
    }
}, {
    freezeTableName: true
});

export default Pesanan;