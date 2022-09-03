const express = require('express')

const {
    getAllUsers,
    getSingleUser,
    createUser,
    deleteUser,
    updateUser
} = require('../controllers/userControllers')

const router = express.Router()


router.get('/', getAllUsers)

router.get('/:id', getSingleUser)

router.post('/', createUser)

router.delete('/:id', deleteUser)

router.patch('/:id', updateUser)

module.exports = router