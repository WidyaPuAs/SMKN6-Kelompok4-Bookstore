import { Sequelize } from "sequelize";

const db = new Sequelize('bookstore2','root','',{
    host: 'localhost',
    dialect: 'mysql'
});

export default db;