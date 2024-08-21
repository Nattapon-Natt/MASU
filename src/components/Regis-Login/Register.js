import React, { useState } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import '../CSS/Register.css';

const Register = () => {
    const [step, setStep] = useState(1);
    const [tel, setTel] = useState('');
    const [otp, setOtp] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [lineId, setLineId] = useState('');
    const [acceptTerm, setAcceptTerm] = useState(false);
    const [regisUrl, setRegisUrl] = useState('none');

    // useEffect(() => {
    //     window.grecaptcha.ready(() => {
    //       window.grecaptcha.execute(window.reCAPTCHA_site_key, { action: 'submit' })
    //         .then(token => {
    //           // Store the token for later use
    //           console.log('reCAPTCHA token:', token);
    //         });
    //     });
    //   }, []);


    const validateTel = (tel) => {
        // เพิ่มลอจิกการตรวจสอบหมายเลขโทรศัพท์
        return tel.length === 10; // ตัวอย่างการตรวจสอบ
    };

    const handleTelChange = (e) => {
        const inputValue = e.target.value;
        const numericInput = inputValue.replace(/[^0-9]/g, ''); // ลบตัวอักษรออก

        // ตรวจสอบเลขตัวแรก
        if (numericInput.length === 1 && numericInput !== "0") {
            // ถ้าเลขตัวแรกไม่ใช่ 0 ให้ setTel เป็นค่าเดิม (ไม่ให้พิมพ์)
            setTel(tel);
            return; // หยุดการทำงานของฟังก์ชัน 
        }

        // ตรวจสอบเลขสองตัวแรก
        if (numericInput.length >= 2) {
            const firstTwoDigits = numericInput.substring(0, 2);
            if (!["08", "09", "06"].includes(firstTwoDigits)) {
                // ถ้าเลขสองตัวแรกไม่ถูกต้อง แสดงข้อความเตือน
                alert("กรุณากรอกเลขสองตัวแรกเป็น 08, 09 หรือ 06");
                setTel(tel); // ตั้งค่า tel เป็นค่าเดิม (ไม่ให้พิมพ์)
                return; // หยุดการทำงานของฟังก์ชัน 
            }
        }

        if (validateTel(numericInput)) {
            // ถ้า input มี 10 ตัวแล้ว ให้ setTel เป็นค่า input
            setTel(numericInput);
        } else if (numericInput.length < 10) {
            // ถ้า input น้อยกว่า 10 ตัว ให้ setTel เป็นค่า input
            setTel(numericInput);
        } else {
            // ถ้า input เกิน 10 ตัว ให้ setTel เป็นค่าเดิม
            // ไม่ให้พิมพ์เพิ่ม
            setTel(tel);
        }
    };


    const handleToStep2 = async () => {
        if (regisUrl === 'none') {
            Swal.fire({
                icon: 'error',
                title: 'กรุณาเลือกประเภทสมาชิก',
            });
            return;
        }
        if (!validateTel(tel)) {
            Swal.fire({
                icon: 'error',
                title: 'กรุณาไส่เบอร์โทรให้ถูกต้อง',
            });
            return;
        }

        try {
            const { data } = await axios.post('/register/reqotp', { tel, type: regisUrl });
            if (data.status === 'success') {
                Swal.fire({
                    icon: 'success',
                    title: 'ส่งข้อความเรียบร้อยแล้ว',
                    text: data.msg,
                }).then(() => {
                    setStep(2);
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'OTP Error',
                    text: data.msg,
                });
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'OTP Error',
                text: error.message,
            });
        }
    };

    const handleToStep3 = async () => {
        try {
            const { data } = await axios.post('/register/verifyotp', { otp });
            if (data.status === 'success') {
                Swal.fire({
                    icon: 'success',
                    title: 'ยืนยันเบอร์โทรเรียบร้อย',
                    text: data.msg,
                }).then(() => {
                    setStep(3);
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'OTP Error',
                    text: data.msg,
                });
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'OTP Error',
                text: error.message,
            });
        }
    };

    const handleRegister = async () => {
        if (!acceptTerm) {
            Swal.fire({
                icon: 'error',
                title: 'กรุณายอมรับข้อกำหนดการใช้บริการ',
            });
            return;
        }

        try {
            const { data } = await axios.post(`/register/${regisUrl === 'cus' ? 'action' : 'idol'}`, {
                tel, username, password, password2, firstname, lastname, lineId,
            });

            if (data.status === 'success') {
                Swal.fire({
                    icon: 'success',
                    title: 'สมัครสมาชิกสำเร็จ',
                    text: data.msg,
                }).then(() => {
                    // Handle successful registration
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'การสมัครสมาชิกขัดข้อง',
                    text: data.msg,
                });
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'การสมัครสมาชิกขัดข้อง',
                text: error.message,
            });
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
                                <form style={{ padding: '5px 30px' }} id="f-admin" className="needs-validation" noValidate>
                                    {step === 1 && (
                                        <div className="row g-3 step1 active">
                                            <div className="col-12">
                                                <h5 style={{ marginBottom: '30px' }} className="tel-des">กรุณากรอกเบอร์มือถือ จำนวน 10 หลัก เพื่อยืนยัน OTP</h5>
                                                <div className="input-icons">
                                                    <img className="icon" src="assets/pic/user_icon.png" alt="User Icon" />
                                                    <input
                                                        type="text"
                                                        className="form-control form-outline-idol"
                                                        value={tel}
                                                        onChange={handleTelChange}
                                                        placeholder="  เบอร์โทรศัพท์ 10 หลัก"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-sm-12">
                                                <select
                                                    className="form-select form-outline-idol"
                                                    value={regisUrl}
                                                    onChange={(e) => setRegisUrl(e.target.value)}
                                                >
                                                    <option value="none" selected>เลือกประเภทสมาชิก</option>
                                                    <option value="cus">สมัครเพื่อหาคู่</option>
                                                    <option value="idol">สมัครเพื่อลงเป็นแม่สื่อ</option>
                                                    <option value="idol">สมัครเพื่อลงเป็นสถานประกอบการ</option>
                                                </select>
                                            </div>
                                            <div className="col-12 center-button">
                                                <button className="btn next btn-lg" onClick={handleToStep2}>
                                                    ดำเนินการต่อ
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                    {step === 2 && (
                                        <div className="row g-3 step2">
                                            <div className="col-12">
                                                <label id="otp-no">รหัสอ้างอิง :</label>
                                                <div className="input-icons">
                                                    <img className="icon" src="/img/OTP.png" alt="OTP Icon" />
                                                    <input
                                                        type="text"
                                                        className="form-control form-outline-idol"
                                                        value={otp}
                                                        onChange={(e) => setOtp(e.target.value)}
                                                        placeholder="รหัส OTP ที่ได้รับ"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-12 center-button">
                                                <button className="btn btn-idol round btn-lg" onClick={handleToStep3}>
                                                    ดำเนินการต่อ
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                    {step === 3 && (
                                        <div className="row g-3 step3">
                                            <div className="col-12">
                                                <div className="text-center">
                                                    <label className="text-label">กรอกข้อมูลส่วนตัว</label>
                                                </div>
                                                <div className="input-icons">
                                                    <img className="icon" src="/img/ID-Gray.png" alt="ID Icon" />
                                                    <input
                                                        type="text"
                                                        className="form-control form-outline-idol"
                                                        value={username}
                                                        onChange={(e) => setUsername(e.target.value)}
                                                        placeholder="ชื่อผู้ใช้"
                                                    />
                                                </div>
                                                <div className="input-icons">
                                                    <img className="icon" src="/img/Lock-Gray.png" alt="Lock Icon" />
                                                    <input
                                                        type="password"
                                                        className="form-control form-outline-idol"
                                                        value={password}
                                                        onChange={(e) => setPassword(e.target.value)}
                                                        placeholder="รหัสผ่าน"
                                                    />
                                                </div>
                                                <div className="input-icons">
                                                    <img className="icon" src="/img/Lock-Gray.png" alt="Lock Icon" />
                                                    <input
                                                        type="password"
                                                        className="form-control form-outline-idol"
                                                        value={password2}
                                                        onChange={(e) => setPassword2(e.target.value)}
                                                        placeholder="ยืนยันรหัสผ่าน"
                                                    />
                                                </div>
                                                <div className="input-icons">
                                                    <img className="icon" src="/img/User-Gray.png" alt="User Icon" />
                                                    <input
                                                        type="text"
                                                        className="form-control form-outline-idol"
                                                        value={firstname}
                                                        onChange={(e) => setFirstname(e.target.value)}
                                                        placeholder="ชื่อจริง"
                                                    />
                                                </div>
                                                <div className="input-icons">
                                                    <img className="icon" src="/img/User-Gray.png" alt="User Icon" />
                                                    <input
                                                        type="text"
                                                        className="form-control form-outline-idol"
                                                        value={lastname}
                                                        onChange={(e) => setLastname(e.target.value)}
                                                        placeholder="นามสกุล"
                                                    />
                                                </div>
                                                <div className="input-icons">
                                                    <img className="icon" src="/img/Line-Gray.png" alt="Line Icon" />
                                                    <input
                                                        type="text"
                                                        className="form-control form-outline-idol"
                                                        value={lineId}
                                                        onChange={(e) => setLineId(e.target.value)}
                                                        placeholder="LINE ID"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-12 text-center">
                                                <input
                                                    type="checkbox"
                                                    checked={acceptTerm}
                                                    onChange={() => setAcceptTerm(!acceptTerm)}
                                                />
                                                <label>
                                                    ฉันยอมรับ <a href="/term-of-use" target="_blank" rel="noopener noreferrer">ข้อกำหนดการใช้บริการ</a>
                                                </label>
                                            </div>
                                            <div className="col-12 center-button">
                                                <button className="btn btn-idol round btn-lg" onClick={handleRegister}>
                                                    สมัครสมาชิก
                                                </button>
                                            </div>
                                        </div>
                                    )}
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