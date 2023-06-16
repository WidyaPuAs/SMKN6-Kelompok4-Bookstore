import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Kurir = db.define('kurir',{
    nama:{
        type: DataTypes.STRING
    },
    harga:{
        type: DataTypes.STRING
    }
}, {
    freezeTableName: true
});

export default Kurir;