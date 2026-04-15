
import db from '../config/db.js';

export const userLogin = (req, res) => {


    const { email, pass } = req.body;

    const sql = "SELECT * FROM users WHERE email=?";

    db.query(sql, [email], (err, result) => {

        if (err) {
            return res.json({
                status: false,
                message: "Unable to login user !"
            });
        }

        if (result.length == 0) {
            return res.json({
                status: false,
                message: "User is not registered!"
            });
        }

        const user = result[0];

        if (user.password != pass) {
            return res.json({
                status: false,
                message: "Invalid Email/Password !"
            });
        }

        res.json({
            status: true,
            message: "login Success !",
            user: user
        });

    });
}

export const userRegister = (req, res) => {
    const { firstname, lastname, username, email, password, address, phonenumber, postalcode } = req.body;

    // Validate required fields
    if (!firstname || !lastname || !username || !email || !password) {
        return res.status(400).json({
            status: false,
            message: "Missing required fields!"
        });
    }

    const checkSql = "SELECT * FROM users WHERE email = ? OR username = ?";
    db.query(checkSql, [email, username], (err, result) => {
        if (err) {
            return res.status(500).json({ 
                status: false, 
                message: "Database check error!", 
                error: err.message 
            });
        }

        if (result.length > 0) {
            return res.status(409).json({ 
                status: false, 
                message: "Email or username already registered!" 
            });
        }

        const insertSql = `
            INSERT INTO users (
                firstname, lastname, username, email, password, address, phonenumber, postalcode, created_at
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, NOW())
        `;
        
        const values = [
            firstname, 
            lastname, 
            username, 
            email, 
            password, 
            address || null, 
            phonenumber || null, 
            postalcode || null
        ];

        db.query(insertSql, values, (insertErr, insertResult) => {
            if (insertErr) {
                return res.status(500).json({ 
                    status: false, 
                    message: "Failed to register user !",
                    error: insertErr.message
                });
            }

            return res.status(201).json({
                status: true,
                message: "User registered successfully!",
                userId: insertResult.insertId
            });
        });
    });
}