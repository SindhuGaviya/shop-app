const express=require('express')
const router=express.Router()
// const booksController=require('../app/controller/booksController')
const productController=require('../app/controller/productController')
const usersController=require('../app/controller/UsersController')
const {authenticateUser}=require('../app/middlewares/authentication')

router.post('/users/register',usersController.register)
router.post('/users/login',usersController.login)
router.get('/users/account',authenticateUser,usersController.account)
router.delete('/users/logout',authenticateUser,usersController.logout)


// router.get('/bookmarks',booksController.list)
// router.get('/bookmarks/:id',booksController.show)
// router.post('/bookmarks',booksController.create)
// router.put('/bookmarks/:id',booksController.update)
// router.delete('/bookmarks/:id',booksController.destroy)
// router.get('/:hash',booksController.redirectUser)

router.get('/products',productController.list)
router.get('/products/:id',productController.show)
router.post('/products',productController.create)
router.put('/products/:id',productController.update)
router.delete('/products/:id',productController.destroy)


module.exports=router

