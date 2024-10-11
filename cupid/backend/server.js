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
});

// const db = mysql.createConnection({
//     host: "localhost",
//     user: "arm2024_masu",
//     password: "arm12345",
//     database: "arm2024_masu"
// });

const port = 8081;
app.listen(port, () => {
    console.log("Listening on port", port);
});

// สำหรับสมัครสมาชิก
app.post('/register', (req, res) => {
    const { name, lastname, email, tel, password, memberType } = req.body;

    // ตรวจสอบประเภทสมาชิกและเลือกตารางที่จะเก็บข้อมูล
    let sql = '';
    let values = [name, lastname, tel, email, password];

    switch (memberType) {
        case 'cus':
            sql = "INSERT INTO users_register (name, lastname, tel, email, password) VALUES (?, ?, ?, ?, ?)";
            break;
        case 'idol':
            sql = "INSERT INTO masus_register (name, lastname, tel, email, password) VALUES (?, ?, ?, ?, ?)";
            break;
        case 'establishment':
            sql = "INSERT INTO establishment_register (name, lastname, tel, email, password) VALUES (?, ?, ?, ?, ?)";
            break;
        default:
            return res.status(400).json({ message: "Invalid member type." });
    }

    db.query(sql, values, (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: "Error while creating user." });
        }
        return res.status(200).json({ message: "User registered successfully!" });
    });
});

// สำหรับเข้าสู่ระบบผู้ใช้
app.post('/login', (req, res) => {
    const sql = "SELECT * FROM users_register WHERE email = ? AND password = ?";
    const values = [req.body.email, req.body.password];

    db.query(sql, values, (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: "ERROR" });
        }

        if (data.length > 0) {
            const user = data[0];
            return res.status(200).json({ status: "Success", name: user.name, memberType: "cus" });
        } else {
            return res.status(400).json({ status: "FAIL" });
        }
    });
});

// สำหรับเข้าสู่ระบบแม่สื่อ
app.post('/login-masu', (req, res) => {
    const sql = "SELECT * FROM masus_register WHERE email = ? AND password = ?";
    const values = [req.body.email, req.body.password];

    db.query(sql, values, (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: "ERROR" });
        }

        if (data.length > 0) {
            const user = data[0];
            return res.status(200).json({
                status: "Success",
                name: user.name,
                lastname: user.lastname,
                nickname: user.nickname,
                dob: user.dob,
                gender: user.gender,
                province: user.province,
                tel: user.tel,
                email: user.email,
                biography: user.biography,
                philosophy: user.philosophy,
                memberType: "idol"
            });
        } else {
            return res.status(400).json({ status: "FAIL" });
        }
    });
});

// สำหรับเข้าสู่ระบบสถานประกอบการ
app.post('/login-esta', (req, res) => {
    const sql = "SELECT * FROM establishment_register WHERE email = ? AND password = ?";
    const values = [req.body.email, req.body.password];

    db.query(sql, values, (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: "ERROR" });
        }

        if (data.length > 0) {
            const user = data[0];
            return res.status(200).json({
                status: "Success",
                name: user.name,
                lastname: user.lastname,
                esta_type: user.esta_type,
                esta_name: user.esta_name,
                email: user.email,
                tel: user.tel,
                province: user.province,
                memberType: "idol"
            });
        } else {
            return res.status(400).json({ status: "FAIL" });
        }
    });
});

// ดึงข้อมูลโปรไฟล์แม่สื่อ
app.get('/profile/masu', (req, res) => {
    const { email } = req.query;

    const sql = "SELECT * FROM masus_register WHERE email = ?";

    db.query(sql, [email], (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: "Error retrieving profile data." });
        }

        if (data.length > 0) {
            return res.status(200).json(data[0]); // ส่งคืนข้อมูลผู้ใช้ทั้งหมด
        } else {
            return res.status(404).json({ message: "User not found." });
        }
    });
});

// ดึงข้อมูลโปรไฟล์สถานประกอบการ
app.get('/profile/esta', (req, res) => {
    const { email } = req.query;

    const sql = "SELECT * FROM establishment_register WHERE email = ?";

    db.query(sql, [email], (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: "Error retrieving profile data." });
        }

        if (data.length > 0) {
            return res.status(200).json(data[0]); // ส่งคืนข้อมูลผู้ใช้ทั้งหมด
        } else {
            return res.status(404).json({ message: "User not found." });
        }
    });
});

// อัปเดตข้อมูลแม่สื่อ
app.put('/profile/masu/:email', (req, res) => {
    const { email } = req.params; // ดึง email จาก URL
    const { name, lastname, nickname, dob, gender, province, tel, biography, philosophy } = req.body;

    // ตรวจสอบค่าที่ได้รับจาก request body
    console.log('Updating user with email:', email);
    console.log('Data received:', req.body);

    // สร้าง SQL query สำหรับอัปเดตข้อมูล
    const sql = "UPDATE masus_register SET name = ?, lastname = ?, nickname = ?, dob = ?, gender = ?, province = ?, tel = ?, biography = ?, philosophy = ? WHERE email = ?";
    const values = [name, lastname, nickname, dob, gender, province, tel, biography, philosophy, email];

    db.query(sql, values, (err, result) => {
        if (err) {
            console.error("Error executing query:", err);
            return res.status(500).json({ message: "Error updating user data." });
        }

        console.log('Query result:', result);

        if (result.affectedRows > 0) {
            return res.status(200).json({ message: "User data updated successfully." });
        } else {
            return res.status(404).json({ message: "User not found." });
        }
    });
});

// อัปเดตข้อมูลสถานประกอบการโดยใช้ email แทน userId
app.put('/profile/esta/:email', (req, res) => {
    const { email } = req.params; // ดึง email จาก URL
    const { name, lastname, esta_type, esta_name, province, tel } = req.body;

    // ตรวจสอบค่าที่ได้รับจาก request body
    console.log('Updating user with email:', email);
    console.log('Data received:', req.body);

    // สร้าง SQL query สำหรับอัปเดตข้อมูล
    const sql = "UPDATE establishment_register SET name = ?, lastname = ?, esta_type = ?, esta_name = ?, province = ?, tel = ? WHERE email = ?";
    const values = [name, lastname, esta_type, esta_name, province, tel, email];

    db.query(sql, values, (err, result) => {
        if (err) {
            console.error("Error executing query:", err);
            return res.status(500).json({ message: "Error updating user data." });
        }

        console.log('Query result:', result);

        if (result.affectedRows > 0) {
            return res.status(200).json({ message: "User data updated successfully." });
        } else {
            return res.status(404).json({ message: "User not found." });
        }
    });
});

