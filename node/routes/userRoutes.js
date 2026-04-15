import express from 'express';
import { userLogin, userRegister } from '../controller/userController.js';

const routes = express.Router();


routes.post('/login' , userLogin);
routes.post('/register', userRegister);

export default routes;