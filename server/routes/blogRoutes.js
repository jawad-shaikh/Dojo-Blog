const express = require('express')

const {
    getAllBlogs,
    getSingleBlog,
    createBlog,
    deleteBlog,
    updateBlog
} = require('../controllers/blogControllers')

const router = express.Router()


router.get('/', getAllBlogs)

router.get('/:id', getSingleBlog)

router.post('/', createBlog)

router.delete('/:id', deleteBlog)

router.patch('/:id', updateBlog)

module.exports = router