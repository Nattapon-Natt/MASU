import React, { useState } from 'react';
import '../CSS/User.css';

const User = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        nickname: '',
        phoneNumber: '',
        email: '',
        gender: '',
        birthdate: '',
    });

    const [phoneError, setPhoneError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'phoneNumber') {
            // เช็คเฉพาะตัวเลข
            const numericValue = value.replace(/[^0-9]/g, '');

            if (numericValue.length > 10) {
                setPhoneError('เบอร์โทรศัพท์ไม่สามารถเกิน 10 ตัว');
                setFormData({
                    ...formData,
                    [name]: numericValue.slice(0, 10), // ตัดเฉพาะ 10 ตัวแรก
                });
            } else if (!/^0[689]/.test(numericValue) && numericValue.length > 0) {
                setPhoneError('หมายเลขโทรศัพท์ต้องเริ่มต้นด้วย 06, 08 หรือ 09');
                setFormData({
                    ...formData,
                    [name]: numericValue, // แสดงตัวเลขที่กรอกได้ แต่ไม่เพิ่มข้อมูลเข้าไป
                });
            } else {
                setPhoneError('');
                setFormData({
                    ...formData,
                    [name]: numericValue,
                });
            }
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (phoneError) {
            alert('กรุณากรอกข้อมูลให้ถูกต้อง');
        } else {
            console.log(formData);
        }
    };

    return (
        <div className="container">
            <div className="text-center">
                <h1 className="head-third">ข้อมูลส่วนตัว</h1>
                <form onSubmit={handleSubmit} className="row g-4">
                    <div className="col-12 col-md-6">
                        <div className="idol-input-box">
                            <label htmlFor="firstName">ชื่อ:</label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="idol-input-box">
                            <label htmlFor="lastName">นามสกุล:</label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="idol-input-box">
                            <label htmlFor="nickname">ชื่อเล่น:</label>
                            <input
                                type="text"
                                id="nickname"
                                name="nickname"
                                value={formData.nickname}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="idol-input-box">
                            <label htmlFor="phoneNumber">เบอร์โทรศัพท์:</label>
                            <input
                                type="text"
                                id="phoneNumber"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                maxLength="10"
                            />
                            {phoneError && <span className="error">{phoneError}</span>}
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="idol-input-box">
                            <label htmlFor="email">อีเมล:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="idol-input-box">
                            <label htmlFor="gender" className="form-label">เพศ:</label>
                            <select
                                className="form-select"
                                id="gender"
                                name="gender"
                                value={formData.gender}
                                onChange={handleChange}
                            >
                                <option value="">เลือกเพศ</option>
                                <option value="male">ชาย</option>
                                <option value="female">หญิง</option>
                                <option value="ladyboy">สาวประเภทสอง</option>
                                <option value="gay">เกย์</option>
                                <option value="tom">ทอม</option>
                            </select>
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="idol-input-box">
                            <label htmlFor="birthdate">วันเกิด:</label>
                            <input
                                type="date"
                                id="birthdate"
                                name="birthdate"
                                value={formData.birthdate}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="col-12 text-center">
                        <button type="submit" className="btn btn-primary">บันทึกข้อมูล</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default User;
