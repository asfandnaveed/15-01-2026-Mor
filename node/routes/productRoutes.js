import express from 'express'
import { GetAllProducts, GetProductDetail } from '../controller/productController.js';


const routes = express.Router();

// /api/products

routes.get('/' , GetAllProducts);
routes.get('/:id' , GetProductDetail );


export default routes;