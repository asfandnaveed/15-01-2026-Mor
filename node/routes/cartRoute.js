
import express from 'express';
import { AddToCart } from '../controller/cartController.js';

const routes = express.Router();

routes.post('/addtocart', AddToCart);

export default routes;
