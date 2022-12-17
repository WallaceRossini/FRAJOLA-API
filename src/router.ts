import { Router } from 'express'
import multer from 'multer'
import path from 'node:path'
import { CategoryController } from './controllers/CategoryController'
import { ProductController } from './controllers/ProductController'

const router = Router()

const categoryCtrl = new CategoryController()
const productCtrl = new ProductController()

const upload = multer({
  storage: multer.diskStorage({
    destination(req,file,callback){
      callback(null,path.resolve(__dirname,'..','uploads'))
    },
    filename(req,file,callback){
      callback(null,`${Date.now()}-${file.originalname}`)
    }
  })
})

// LIST PRODUCTS
router.get('/products',productCtrl.index)
// CREATE PRODUCT
router.post('/products',upload.single('image'),productCtrl.create)

// GET PRODUCTS BY CATEGORY
router.get('/categories/:categoryId/products',categoryCtrl.listProductsByCategory)

// LIST CATEGORIES
router.get('/categories',categoryCtrl.index)
// CREATE CATEGORY
router.post('/categories',categoryCtrl.create)

export { router }
