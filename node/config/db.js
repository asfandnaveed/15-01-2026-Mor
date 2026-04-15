import mysql from 'mysql2';

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "corvit_15_02_2026"
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