import createUserModel from './User.js';
import pkg from 'sequelize';
const { Sequelize, Model, DataTypes } = pkg;


//TODO: MAKE THIS A SINGLETON 

export default async function createDatabaseConnection() {
    const sequelize = new Sequelize({
        dialect: process.env.DB_dialect,
        host: process.env.DB_host,
        username: process.env.DB_username,
        password: process.env.DB_password,
        database: process.env.DB_database,
        port: process.env.DB_port,
        logging: console.log,
    })
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        throw new Error('Unable to connect to the database:', error);
    }
  

    return "Ok"
}


// const User = createUserModel(sequelize) 
// const users = await User.findAll({})
// console.log(users)

// const user1 = await User.create({
//     first_name: 'John',
//     last_name: 'Doe',
//     age: 30,
//     active: true,
// })
// console.log(user1)