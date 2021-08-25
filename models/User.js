import {Sequelize} from 'sequelize';
export default function createUserModel(sequelize) {
    return sequelize.define('user', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        last_name: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        age: {
            type: Sequelize.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        active: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: true
        },
        createdAt: {
            field: 'created_at',
            type: Sequelize.DATE,
        },
        updatedAt: {
            field: 'updated_at',
            type: Sequelize.DATE,
        }
    }, {
        timestamps: true
    })
}

// CREATE TABLE users (
//     id  SERIAL PRIMARY KEY,
//     first_name varchar(255),
//     last_name varchar(255),
//     age int, 	
//     active BOOLEAN NOT NULL DEFAULT true,
//     created_at date,
//     updated_at date
//  );
 