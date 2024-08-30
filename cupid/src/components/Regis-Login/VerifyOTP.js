import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import '/Register.css';

const VerifyOTP = ({ tel, onSuccess }) => {
    const [otp, setOtp] = useState('');

    const handleToStep3 = async () => {
        try {
            const response = await axios.post('/register/verifyotp', { otp });
            if (response.data.status === 'success') {
                Swal.fire('Success', 'ยืนยันเบอร์โทรเรียบร้อย', 'success');
                onSuccess(); // ไปที่ขั้นตอนถัดไป
            } else {
                Swal.fire('Error', response.data.msg, 'error');
            }
        } catch (error) {
            console.error(error);
            Swal.fire('Error', 'OTP Error', 'error');
        }
    };

    return (
        <div>
            {/* ฟอร์มกรอกรหัส OTP */}

            <div className="register-box">
                <form id="f-admin" className="needs-validation" noValidate>
                    {step === 2 && (
                        <div className="row g-3 step2">
                            <div className="col-12">
                                <label id="otp-no">รหัสอ้างอิง :</label>
                                <div className="input-icons">
                                    <img className="icon" src="/path/to/OTP.png" alt="OTP Icon" />
                                    <input
                                        type="text"
                                        className="form-control form-outline-idol"
                                        placeholder="OTP (รหัสยืนยันตัวตน)"
                                        value={otp}
                                        onChange={(e) => setOtp(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="col-12 center-button">
                                <button className="btn btn-idol round btn-lg" onClick={handleToStep3}>
                                    ยืนยัน
                                </button>
                            </div>
                        </div>
                    )}
                    <button onClick={handleToStep3}>Verify OTP</button>
                </form>
            </div>
        </div>
    );
};

export default VerifyOTP;
