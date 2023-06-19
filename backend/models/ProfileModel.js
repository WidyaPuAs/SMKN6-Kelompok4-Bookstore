import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Profile = db.define('profile',{
    username:{
        type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING
    },
    no_phone:{
        type: DataTypes.INTEGER
    },
    alamat:{
        type: DataTypes.STRING
    }
}, {
    freezeTableName: true
});

export default Profile;