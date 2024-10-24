import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../CSS/LoginForm.css';

export default function LoginForm({ setUserName }) {
    const [values, setValues] = useState({ email: "", password: "" });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            const res = await axios.post('http://localhost:8081/login', values);
            if (res.data.status === "Success") {
                // เก็บชื่อผู้ใช้และประเภทสมาชิกใน localStorage
                localStorage.setItem('name', res.data.name);
                localStorage.setItem('memberType', res.data.memberType); // เก็บ memberType หากมี
                setUserName(res.data.name); // อัปเดตชื่อผู้ใช้ที่นี่
                navigate("/"); // ไปยังหน้าหลัก
            } else {
                alert("ไม่มีข้อมูล"); // แจ้งเตือนเมื่อไม่มีข้อมูลตรงกัน
            }
        } catch (err) {
            console.error(err);
            alert("เกิดข้อผิดพลาดในการเข้าสู่ระบบ"); // แจ้งเตือนหากเกิดข้อผิดพลาด
        }
    };

    return (
        <div className="body">
            <div className="container">
                <main className="register-page">
                    <div className="text-center">
                        <h3 style={{ fontWeight: 'bold' }}>เข้าสู่ระบบสำหรับผู้ใช้ทั่วไป</h3>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="register-box">
                                <form style={{ padding: '5px 30px' }} id="f-admin" className="needs-validation" onSubmit={handleSubmit}>
                                    <div className="row g-3 step1 active">
                                        <div className="col-12">
                                            <h5 style={{ marginBottom: '30px' }} className="tel-des">กรุณากรอกรายละเอียดเพื่อทำการเข้าสู่ระบบ</h5>
                                            <div className="input-icons">
                                                <img className="icon" src="/project/masu/images/user_icon.png" alt="User Icon" />
                                                <input
                                                    type="email"
                                                    onChange={handleInput}
                                                    name='email'
                                                    className="form-control form-outline-idol"
                                                    id="email"
                                                    placeholder="กรอก Email"
                                                    required
                                                />
                                            </div>
                                            <div className="mb-4 mt-1">
                                                {errors.email && <span className='text-danger pb-3'> {errors.email} </span>}
                                            </div>

                                            <div className="input-icons">
                                                <img className="icon" src="/project/masu/images/user_icon.png" alt="User Icon" />
                                                <input
                                                    type="password"
                                                    onChange={handleInput}
                                                    name='password'
                                                    className="form-control form-outline-idol"
                                                    id="password"
                                                    placeholder="กรอก password"
                                                    required
                                                />
                                            </div>
                                            <div className="mb-4 mt-1">
                                                {errors.password && <span className='text-danger mb-3'> {errors.password} </span>}
                                            </div>
                                        </div>

                                        <div className="col-12 center-button">
                                            <button className="btn next btn-lg">
                                                เข้าสู่ระบบ
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}