import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../CSS/LoginForm.css';

export default function LoginMasu({ setUserName, setMemberType }) {
    const [values, setValues] = useState({ email: "", password: "" });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleInput = (event) => {
        const { name, value } = event.target;
        setValues(prev => ({ ...prev, [name]: value }));
    };

    const validateForm = () => {
        const newErrors = {};
        if (!values.email) newErrors.email = "กรุณากรอกอีเมล";
        if (!values.password) newErrors.password = "กรุณากรอกรหัสผ่าน";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!validateForm()) return; // หากมีข้อผิดพลาดให้ไม่ทำการส่งฟอร์ม

        try {
            const res = await axios.post('http://localhost:8081/login-masu', values);
            if (res.data.status === "Success") {
                // เก็บข้อมูลผู้ใช้ใน localStorage
                const { name, lastname, nickname, dob, gender, province, tel, email,biography,philosophy, memberType } = res.data;
                localStorage.setItem('name', name);
                localStorage.setItem('lastname', lastname);
                localStorage.setItem('nickname', nickname);
                localStorage.setItem('dob', dob);
                localStorage.setItem('gender', gender);
                localStorage.setItem('province', province);
                localStorage.setItem('tel', tel);
                localStorage.setItem('email', email);
                localStorage.setItem('biography', biography);
                localStorage.setItem('philosophy', philosophy);
                localStorage.setItem('memberType', memberType);

                // เรียกใช้งานฟังก์ชันที่ส่งมาเพื่อตั้งค่า
                setUserName(name);
                setMemberType(memberType);

                // นำทางไปยังหน้า PersonalInfo
                navigate("/personalInfo");
            } else {
                alert("ไม่มีข้อมูล");
            }
        } catch (err) {
            console.error(err);
            alert("เกิดข้อผิดพลาดในการเข้าสู่ระบบ");
        }
        window.location.reload();

    };

    return (
        <div className="body">
            <div className="container">
                <main className="register-page">
                    <div className="text-center">
                        <h3 style={{ fontWeight: 'bold' }}>เข้าสู่ระบบสำหรับแม่สื่อ</h3>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="register-box">
                                <form id="f-admin" className="needs-validation" onSubmit={handleSubmit} style={{ padding: '5px 30px' }}>
                                    <div className="row g-3 step1 active">
                                        <div className="col-12">
                                            <h5 style={{ marginBottom: '30px' }} className="tel-des">กรุณากรอกรายละเอียดเพื่อทำการเข้าสู่ระบบ</h5>
                                            <InputField
                                                type="email"
                                                name="email"
                                                placeholder="กรอก Email"
                                                value={values.email}
                                                onChange={handleInput}
                                                error={errors.email}
                                            />
                                            <InputField
                                                type="password"
                                                name="password"
                                                placeholder="กรอก password"
                                                value={values.password}
                                                onChange={handleInput}
                                                error={errors.password}
                                            />
                                        </div>
                                        <div className="col-12 center-button">
                                            <button className="btn next btn-lg">เข้าสู่ระบบ</button>
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

const InputField = ({ type, name, placeholder, value, onChange, error, autoComplete }) => (
    <div className="input-icons">
        <img className="icon" src="/project/masu/images/user_icon.png" alt="User Icon" />
        <input
            type={type}
            name={name}
            placeholder={placeholder}
            className="form-control form-outline-idol"
            value={value}
            onChange={onChange}
            required
            autoComplete={autoComplete} 
        />
        {error && <div className="mb-4 mt-1"><span className='text-danger'>{error}</span></div>}
    </div>
);