const mongoose = require('mongoose')
const Blog = require('../models/blogModel')

// get all blogs
const getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find().sort({
            _id: -1
        })
        res.json(blogs)
    } catch (error) {
        res.json({
            "error": error.message
        })
    }
}

// get single blog
const getSingleBlog = async (req, res) => {
    const id = req.params.id

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.json({
            "error": "no such blog"
        })
    }

    try {
        const blog = await Blog.findOne({
            _id: id
        })

        if (!blog) {
            return res.json({
                "error": "no such blog"
            })
        }

        res.json(blog)
    } catch (error) {
        res.json({
            "error": error.message
        })
    }
}

// craete new blog
const createBlog = async (req, res) => {
    try {
        const blog = await Blog.create({
            ...req.body
        })
        res.json(blog)
    } catch (error) {
        res.json({
            "error": error.message
        })
    }
}

// delete blog
const deleteBlog = async (req, res) => {
    const id = req.params.id

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.json({
            "error": "no such blog"
        })
    }

    try {
        const blog = await Blog.findOneAndDelete({
            _id: id
        })

        if (!blog) {
            return res.json({
                "error": "no such blog"
            })
        }

        res.json(blog)
    } catch (error) {
        res.json({
            "error": error.message
        })
    }
}

// update blog
const updateBlog = async (req, res) => {
    const id = req.params.id

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.json({
            "error": "no such blog"
        })
    }

    try {
        const blog = await Blog.findOneAndUpdate({
            _id: id
        }, {
            ...req.body
        })

        if (!blog) {
            return res.json({
                "error": "no such blog"
            })
        }

        res.json(blog)
    } catch (error) {
        res.json({
            "error": error.message
        })
    }
}

module.exports = {
    getAllBlogs,
    getSingleBlog,
    createBlog,
    deleteBlog,
    updateBlog
}