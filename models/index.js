import pkg from 'sequelize';
const { Sequelize, Model, DataTypes } = pkg;

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
        console.error('Unable to connect to the database:', error);
    }
    return "Ok"
}