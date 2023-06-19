import { Sequelize } from "sequelize";

const db = new Sequelize('bookstore','root','',{
    host: 'localhost',
    dialect: 'mysql'
});

export default db;