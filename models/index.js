import pkg from 'sequelize';
const { Sequelize, Model, DataTypes } = pkg;

export default async function createDatabaseConnection() {
    const sequelize = new Sequelize({
        dialect: process.env.dialect,
        host: process.env.host,
        username: process.env.username,
        password: process.env.password,
        database: process.env.database,
        port: process.env.port,
        logging: console.log,
    })
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
    return "Ok"
}