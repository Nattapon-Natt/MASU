import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import '../CSS/Register.css';
import Validation from './RegisterValidation';

const Register = () => {
    const [values, setValues] = useState({
        name: "",
        lastname: "",
        tel: "",
        email: "",
        password: "",
        memberType: "none",
    });

    const [errors, setErrors] = useState({});
    const navigate = useNavigate(); 

    const handleTelChange = (event) => {
        const newTel = event.target.value;

        // ตรวจสอบเงื่อนไขเบอร์โทรทันที
        let telError = "";
        if (!/^\d*$/.test(newTel)) {
            telError = "กรุณากรอกเฉพาะตัวเลขเท่านั้น";
        } else if (newTel.length != 10) {
            telError = "เบอร์โทรศัพท์ต้องมี 10 ตัว";
        } else if (newTel[0] !== '0') {
            telError = "เบอร์โทรศัพท์ต้องขึ้นต้นด้วย 0";
        } else if (!/^0(6|8|9)/.test(newTel)) {
            telError = "เบอร์โทรศัพท์ต้องขึ้นต้นด้วย 06, 08 หรือ 09 เท่านั้น";
        }

        setValues(prev => ({ ...prev, tel: newTel }));
        setErrors(prev => ({ ...prev, tel: telError }));
    };

    const handleTelKeyPress = (event) => {
        // ตรวจสอบว่ามีการกดตัวอักษรหรือไม่
        if (!/^\d$/.test(event.key) && event.key !== 'Backspace') {
            event.preventDefault(); // ห้ามพิมพ์ตัวอักษร
            setErrors(prev => ({ ...prev, tel: "กรุณากรอกเฉพาะตัวเลขเท่านั้น" })); // แสดงข้อความเตือน
        } else {
            const newTel = event.target.value + event.key;

            // ตรวจสอบว่าเลขตัวแรกไม่ใช่ 0 หรือเลขสองตัวแรกไม่ใช่ 06, 08 หรือ 09
            if (newTel.length === 1 && newTel !== '0') {
                event.preventDefault(); // ห้ามพิมพ์ถ้าไม่ใช่ 0
                setErrors(prev => ({ ...prev, tel: "เบอร์โทรศัพท์ต้องขึ้นต้นด้วย 0" }));
            } else if (newTel.length === 2 && !/^0(6|8|9)/.test(newTel)) {
                event.preventDefault(); // ห้ามพิมพ์ถ้าเลขสองตัวแรกไม่ใช่ 06, 08 หรือ 09
                setErrors(prev => ({ ...prev, tel: "เบอร์โทรศัพท์ต้องขึ้นต้นด้วย 06, 08 หรือ 09 เท่านั้น" }));
            } else if (newTel.length > 10) {
                event.preventDefault(); // ห้ามพิมพ์ถ้าเบอร์โทรศัพท์มีมากกว่า 10 ตัว
                setErrors(prev => ({ ...prev, tel: "เบอร์โทรศัพท์ต้องมีไม่เกิน 10 ตัวอักษร" }));
            } else {
                setErrors(prev => ({ ...prev, tel: "" })); // เคลียร์ข้อความเตือนเมื่อกรอกตัวเลขถูกต้อง
            }
        }
    };

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
    };

    const handleSelectChange = (event) => {
        setValues(prev => ({ ...prev, memberType: event.target.value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));

        if (!errors.name && !errors.email && !errors.password && !errors.tel) {
            axios.post('http://localhost:8081/register', values)
            // axios.post('https://thaiworkation.com/project/masu/register', values)
                .then(res => {
                    console.log(res);
                    navigate('/login'); 
                })
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
                                                {/* <img className="icon" src="/project/masu/images/user_icon.png" alt="User Icon" /> */}
                                                <img className="icon" src="/assets/pic/user_icon.png" alt="User Icon" />
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
                                                {/* <img className="icon" src="/project/masu/images/user_icon.png" alt="User Icon" /> */}
                                                <img className="icon" src="/assets/pic/user_icon.png" alt="User Icon" />
                                                <input
                                                    type="text"
                                                    onChange={handleInput}
                                                    name='lastname'
                                                    className="form-control form-outline-idol"
                                                    id="lastname"
                                                    placeholder="กรอก นามสกุล"
                                                />
                                            </div>
                                            <div className="mb-4 mt-1">
                                                {errors.lastname && <span className='text-danger'> {errors.lastname} </span>}
                                            </div>

                                            <div className="input-icons">
                                                {/* <img className="icon" src="/project/masu/images/user_icon.png" alt="User Icon" /> */}
                                                <img className="icon" src="/assets/pic/user_icon.png" alt="User Icon" />
                                                <input
                                                    type="text"
                                                    onChange={handleTelChange}
                                                    onKeyPress={handleTelKeyPress} // เพิ่มการตรวจสอบการกดปุ่ม
                                                    name='tel'
                                                    value={values.tel}
                                                    className="form-control form-outline-idol"
                                                    id="tel"
                                                    placeholder="กรอก เบอร์โทรศัพท์"
                                                />
                                            </div>
                                            <div className="mb-4 mt-1">
                                                {errors.tel && <span className='text-danger'> {errors.tel} </span>}
                                            </div>

                                            <div className="input-icons">
                                                {/* <img className="icon" src="/project/masu/images/user_icon.png" alt="User Icon" /> */}
                                                <img className="icon" src="/assets/pic/user_icon.png" alt="User Icon" />
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
                                                {/* <img className="icon" src="/project/masu/images/user_icon.png" alt="User Icon" /> */}
                                                <img className="icon" src="/assets/pic/user_icon.png" alt="User Icon" />
                                                <input
                                                    type="password"
                                                    onChange={handleInput}
                                                    name='password'
                                                    className="form-control form-outline-idol"
                                                    id="password"
                                                    placeholder="กรอกรหัสผ่านอย่างน้อย 8 ตัว"
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
                                                value={values.memberType}
                                                onChange={handleSelectChange}
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
