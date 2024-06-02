const Employee = require('./models/employee');
const Department = require('./models/department');
const express = require('express');
const app = express();
const departments_router = require('./routes/departments');
const sequelize = require('./configurations/config');

Department.hasMany(Employee,
    {foreignKey: {allowNull: false}, onDelete: 'CASCADE'});
Employee.belongsTo(Department);

sequelize.sync().then((result)=>{
    console.log(result);
}).catch((err)=>{console.log(err);});

//app.listen(3306, ()=>{console.log('listening to port 3000')});