const express = require('express');
const router = express.Router();
const {BlogController} = require('../Controller');
const {upload_blog} = require('../MiddleWare/FileUpload');

router.post('/',upload_blog.single('myField'),BlogController.addBlog);
router.get('/',BlogController.getBlog);
router.put('/:blogid',upload_blog.single('myField'),BlogController.updateBlog);
router.delete('/:blogid',BlogController.deleteBlog);


module.exports = router
