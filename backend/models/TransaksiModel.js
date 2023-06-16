import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Transaksi = db.define('transaksi',{
    username:{
        type: DataTypes.STRING
    },
    user_id:{
        type: DataTypes.STRING
    },
    harga:{
        type: DataTypes.INTEGER
    },
    harga:{
        type: DataTypes.STRING
    }
}, {
    freezeTableName: true
});

export default Transaksi;