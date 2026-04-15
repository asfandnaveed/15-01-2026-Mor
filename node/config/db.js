import mysql from 'mysql2';
import 'dotenv/config';

const db = mysql.createConnection({
    host: process.env.DBHOST,
    user: process.env.DBUSER,
    password: process.env.DBPASSWORD,
    database: process.env.DBNAME,
});


db.connect((err) => {

    if (err) {
        console.log("Connection Error !");
    } else {
        console.log("Connection Success !");
    }
});


// module.exports = db;
export default db;