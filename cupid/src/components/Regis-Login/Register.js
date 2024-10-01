import React, { useState } from 'react';
import axios from 'axios';
import '../CSS/Register.css';
import Validation from './RegisterValidation';

const Register = () => {
    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        memberType: "none", // เพิ่ม state สำหรับประเภทสมาชิก
    });

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
    };

    const handleSelectChange = (event) => {
        setValues(prev => ({ ...prev, memberType: event.target.value })); // อัปเดตค่า memberType
    };

    const [errors, setErrors] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));

        if (errors.name ==="" && errors.email ==="" && errors.password ==="") {
            axios.post('http://localhost:8081/register', values)
                .then(res => console.log(res))
                .catch(err => console.log(err));
        }
    };

    return (
        <div>
            <div className="container">
                <main className="register-page">
                    <div className="text-center">
                        <h3 style={{ fontWeight: 'bold' }}>สมัครสมาชิก</h3>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="register-box">
                                <form style={{ padding: '5px 30px' }} id="f-admin" className="needs-validation" noValidate onSubmit={handleSubmit}>
                                    <div className="row g-3 step1 active">
                                        <div className="col-12">
                                            <h5 style={{ marginBottom: '30px' }} className="tel-des">กรุณากรอกรายละเอียดเพื่อทำการสมัครสมาชิก</h5>
                                            <div className="input-icons">
                                                <img className="icon" src="/project/masu/images/user_icon.png" alt="User Icon" />
                                                <input
                                                    type="text"
                                                    onChange={handleInput}
                                                    name='name'
                                                    className="form-control form-outline-idol"
                                                    id="name"
                                                    placeholder="กรอก ชื่อ"
                                                />
                                            </div>
                                            <div className="mb-4 mt-1">
                                                {errors.name && <span className='text-danger'> {errors.name} </span>}
                                            </div>

                                            <div className="input-icons">
                                                <img className="icon" src="/project/masu/images/user_icon.png" alt="User Icon" />
                                                <input
                                                    type="email"
                                                    onChange={handleInput}
                                                    name='email'
                                                    className="form-control form-outline-idol"
                                                    id="email"
                                                    placeholder="กรอก Email"
                                                />
                                            </div>
                                            <div className="mb-4 mt-1">
                                                {errors.email && <span className='text-danger  pb-3'> {errors.email} </span>}
                                            </div>

                                            <div className="input-icons">
                                                <img className="icon" src="/project/masu/images/user_icon.png" alt="User Icon" />
                                                <input
                                                    type="password"
                                                    onChange={handleInput}
                                                    name='password'
                                                    className="form-control form-outline-idol"
                                                    id="password"
                                                    placeholder="กรอก password ตัวพิมพ์เล็ก-พิมพ์ใหญ่ และตัวเลข"
                                                />
                                            </div>
                                            <div className="mb-4 mt-1">
                                                {errors.password && <span className='text-danger mb-3'> {errors.password} </span>}
                                            </div>
                                        </div>

                                        <div className="col-sm-12">
                                            <select
                                                className="form-select form-outline-idol"
                                                name="memberType"
                                                value={values.memberType} // กำหนดค่า value
                                                onChange={handleSelectChange} // เรียกใช้ฟังก์ชันเมื่อมีการเปลี่ยนแปลง
                                            >
                                                <option value="none" disabled>เลือกประเภทสมาชิก</option>
                                                <option value="cus">สมัครเพื่อติดต่อกับแม่สื่อ</option>
                                                <option value="idol">สมัครเพื่อลงเป็นแม่สื่อ</option>
                                                <option value="establishment">สมัครเพื่อลงเป็นสถานประกอบการ</option>
                                            </select>
                                        </div>
                                        <div className="col-12 center-button">
                                            <button className="btn next btn-lg">
                                                สมัครสมาชิก
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
};

export default Register;
