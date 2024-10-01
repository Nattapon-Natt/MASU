const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "masu"
})

const port = 8081;
app.listen(port, () => {
    console.log("Listening");
})

app.post('/register', (req, res) => {
    console.log(req.body);
    const sql = "INSERT INTO users_register (`name`, `email`, `password`) VALUES (?, ?, ?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.password
    ];

    db.query(sql, values, (err, data) => {
        if (err) {
            // console.error(err); 
            return res.json("Error while creating user.");
        }
        return res.json(data);
    });
});

app.post('/login', (req, res) => {
    const sql = "SELECT * FROM users_register WHERE `email` = ? AND `password` = ?";
    const values = [req.body.email, req.body.password];  // กำหนดค่า values ที่ถูกต้อง

    db.query(sql, values, (err, data) => {
        if (err) {
            console.error(err);  // log ข้อผิดพลาด
            return res.json("ERROR");
        }

        if (data.length > 0) {
            const user = data[0];  // ดึงข้อมูลผู้ใช้จากฐานข้อมูล
            return res.json({ status: "Success", name: user.name });  // ส่งชื่อผู้ใช้กลับไป
        } else {
            return res.json("FAIL");
        }
    });
});