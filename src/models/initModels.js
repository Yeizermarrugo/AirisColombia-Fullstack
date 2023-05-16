const Users = require('./user.model')
const Sales = require('./sale.model')


const initModel = () => {

    //?Users <- Sales
    Users.hasMany(Sales)
    Sales.belongsTo(Users)
}

module.exports = initModel;