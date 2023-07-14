import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Users from "./UserModel.js";

const { DataTypes } = Sequelize;

const Product = db.define('product',{
    uuid:{
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    judul_buku:{
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [3, 100]
        }
    },
    harga:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    userId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    }
}, {
    freezeTableName: true
});

Users.hasMany(Product);
Product.belongsTo(Users, {foreignKey: 'userId'});

export default Product;