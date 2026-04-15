import db from '../config/db.js'

// Get All products Api
export const GetAllProducts = (req, res)=>{


    const sql = "SELECT * FROM products";

    db.query(sql, (err, result) => {

        if (err) {
            res.json({
                status: false,
                message: "Unable to Fetch Products !"
            });

        } else {
            res.json({
                status: true,
                message: "Products Data !",
                products: result
            });
        }

    });

};


//Product Detail Api

export const GetProductDetail = (req , res)=>{

    const productId = req.params.id;

    const sql = "SELECT * FROM products WHERE id=?";

    db.query(sql, [productId], (err, result) => {

        if (err) {
            res.json({
                status: false,
                message: "Unable to Fetch Product Detail !"
            });

        } else {
            res.json({
                status: true,
                message: "Products Detail !",
                product: result[0]
            });
        }
    });
}