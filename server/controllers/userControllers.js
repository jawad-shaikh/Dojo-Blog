const mongoose = require('mongoose')
const User = require('../models/userModel')

// get all users
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find().sort({
            _id: -1
        })
        res.json(users)
    } catch (error) {
        res.json({
            "error": error.message
        })
    }
}

// get single user
const getSingleUser = async (req, res) => {
    const id = req.params.id

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.json({
            "error": "no such user"
        })
    }

    try {
        const user = await User.findOne({
            _id: id
        })

        if (!user) {
            return res.json({
                "error": "no such user"
            })
        }

        res.json(user)
    } catch (error) {
        res.json({
            "error": error.message
        })
    }
}

// craete new user
const createUser = async (req, res) => {
    try {
        const user = await User.create({
            ...req.body
        })
        res.json(user)
    } catch (error) {
        res.json({
            "error": error.message
        })
    }
}

// delete user
const deleteUser = async (req, res) => {
    const id = req.params.id

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.json({
            "error": "no such user"
        })
    }

    try {
        const user = await User.findOneAndDelete({
            _id: id
        })

        if (!user) {
            return res.json({
                "error": "no such user"
            })
        }

        res.json(user)
    } catch (error) {
        res.json({
            "error": error.message
        })
    }
}

// update user
const updateUser = async (req, res) => {
    const id = req.params.id

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.json({
            "error": "no such user"
        })
    }

    try {
        const user = await User.findOneAndUpdate({
            _id: id
        }, {
            ...req.body
        })

        if (!user) {
            return res.json({
                "error": "no such user"
            })
        }

        res.json(user)
    } catch (error) {
        res.json({
            "error": error.message
        })
    }
}

module.exports = {
    getAllUsers,
    getSingleUser,
    createUser,
    deleteUser,
    updateUser
}