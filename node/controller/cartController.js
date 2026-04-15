import db from '../config/db.js';

export const AddToCart = (req, res) => {
    const { userId, productId, quantity } = req.body;
    const sql = 'INSERT INTO cart (user_id, product_id, quantity, created_at) VALUE(?,?,?, NOW())';


    try {
        db.query(sql, [userId, productId, quantity], (err, result) => {
            if (err) {
                return res.json({
                    status: false,
                    message: "Unable to add to cart !"
                });
            }
            return res.status(201).json({
                status: true,
                message: "Product added to card succefully!",
                // userId: insertResult.insertId
            });
        });
    } catch (e) {
        return res.json({
            status: false,
            message: "Server Error!"
        });
    }


}
