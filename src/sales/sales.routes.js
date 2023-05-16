const router = require('express').Router()
const sales = require('./sales.http')
const passporJwt = require('../middleware/auth.middleware')

router.get('/', sales.getAll)
router.post('/', passporJwt, sales.register)

router.get('/:id', passporJwt, sales.getById)
router.patch('/:id', passporJwt, sales.edit)
router.delete('/:id', passporJwt, sales.remove)

module.exports = {router}