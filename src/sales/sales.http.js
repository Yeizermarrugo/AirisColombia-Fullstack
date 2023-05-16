const salesController = require('./sales.controlles')
const responses = require('../utils/handleResponses')

const getAll = (req, res) => {
    salesController.getAllSales()
        .then(data => {
            responses.success({
                status: 200,
                data: data,
                message: 'Getting all sales',
                res
            })
        })
        .catch(error => {
            responses.error({
                status: 400,
                message: 'Error getting all sales',
                data: error,
                res
            })
            console.log(error);
        })
}

const getById = (req, res) => {
    const id = req.params.id
    salesController.getSalesByid(id)
        .then(data => {
            if (data) {
                responses.success({
                    status: 200,
                    data,
                    message: `Getting sales with id: ${id}`,
                    res
                })
            } else {
                responses.error({
                    status: 404,
                    message: `Sales with id: ${id} not found`,
                    res
                })
            }
        })
        .catch(error => {
            responses.error({
                status: 400,
                message: 'Error getting sales',
                data: error,
                res
            })
            console.log(error);
        })
}

const register = async (req, res) => {
    const user_id = req.user.id
    const data = req.body
    salesController.createSales(data, user_id)
        .then(data => {
            responses.success({
                status: 201,
                data,
                message: 'Sales created',
                res
            })
        })
        .catch(error => {
            responses.error({
                status: 400,
                message: 'Error creating sales',
                data: error,
                res
            })
            console.log(error);
        })

}

const edit = (req, res) => {
    const id = req.params.id
    const data = req.body
    if (!Object.keys(data).length) { // si no existen los key, entro al error
        return res.status(400).json({ message: 'Missing data' })
    } else if (
        !data.name ||
        !data.description ||
        !data.price
    ) {
        return res.status(400).json({
            message: 'All fields must be completed', fields: {
                name: 'string',
                descripcion: 'string',
                precio: 'Number'
            }
        })
    }else{

       const response =  salesController.editSales(id, data)
        return res.status(200).json({
            message: 'Service edited succesfully',
            service: data
        })
    }
}

const remove = (req, res) => {
    const id = req.params.id
    salesController.deleteSales(id)
        .then(data => {
            responses.success({
                status: 200,
                data,
                message: 'Sales deleted',
                res
            })
        })
        .catch(error => {
            responses.error({
                status: 400,
                message: 'Error deleting sales',
                data: error,
                res
            })
            console.log(error);
        })

}

module.exports = {
    getAll,
    getById,
    register,
    edit,
    remove
}