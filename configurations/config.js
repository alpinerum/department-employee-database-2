const { truncate } = require('fs');
const Sequelize = require('sequelize');

const sequelize = new Sequelize('departments_database', 'root', '123456', {
    host: "127.0.0.1",
    port:3306,
    dialect: 'mysql'});

sequelize.authenticate().
    then(()=>{console.log('connection has been established successfully');})
    .catch((err)=>{console.log(err);});

module.exports = sequelize;