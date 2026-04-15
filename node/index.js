// const express = require('express');
import express from 'express';
import db from './config/db.js';
import cors from 'cors'
import productRoute from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import cartRoute from './routes/cartRoute.js';
const app = express();

app.use(cors());
app.use('/uploads', express.static('uploads'));
app.use(express.json());




app.use('/api/products',productRoute);
app.use('/api/user',userRoutes );
app.use('/api/cart',cartRoute);









// localhost:3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log('Project is Running !!');
});