const { DataTypes } = require('sequelize')
const db = require('../utils/database')
const Users = require('./user.model')

const Sales = db.define('sales', {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull: false,
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    description: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    price: {
        allowNull: false,
        type: DataTypes.NUMERIC,
    },
    user_id: {
        allowNull: false,
        type: DataTypes.UUID,
        field: "user_id",
        references: {
            model: Users,
            key: 'id'
        }
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        field: 'createdAt'
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        field: 'updatedAt'
    }
})

module.exports =
Sales
