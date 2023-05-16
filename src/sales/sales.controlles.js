const uuid = require('uuid');
const Sales = require('../models/sale.model')
const Users = require('../models/user.model')

const getAllSales = async () =>{
    const data = await Sales.findAll({
        include: [{
            model: Users,
            attributes:{
                exclude: ['password', "updatedAt" ]
            }
        }],
        attributes: {
            exclude: ['user_id', 'userId',"createdAt", "updatedAt" ]
        }
    })
    return data
}

const getSalesByid = async (id) =>{
    const data = await Sales.findOne({
        where: {
            id: id
            },
            attributes: {
                exclude: ["createdAt", "updatedAt"]
            }
    })
    return data
}

const createSales = async (data, user_id) => {
    const newSales = await Sales.create({
        id: uuid.v4(),
        name: data.name,
        description: data.description,
        price: data.price,
        user_id: user_id
    })
    return newSales
}

const editSales = async (id, data) => {
    const response = await Sales.update(data,{
        where: {id: id}
    })
    return response
}

const deleteSales = async (id) => {
    const data = await Sales.destroy({
        where: {
            id: id
            }
    })
    return data
}

module.exports = {
    getAllSales,
    getSalesByid,
    createSales,
    editSales,
    deleteSales
}