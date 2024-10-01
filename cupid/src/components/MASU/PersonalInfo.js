import React, { useState } from 'react';
import '../CSS/PersonalInfo.css';

function PersonalInfo() {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [nickname, setNickname] = useState('');
    const [dob, setDob] = useState('');
    const [gender, setGender] = useState('');
    const [province, setProvince] = useState('');

    // List of all 77 provinces in Thailand
    const provinces = [
        'กรุงเทพมหานคร', 'กระบี่', 'กาญจนบุรี', 'กาฬสินธุ์', 'กำแพงเพชร', 'ขอนแก่น', 'จันทบุรี',
        'ฉะเชิงเทรา', 'ชลบุรี', 'ชุมพร', 'เชียงใหม่', 'เชียงราย', 'ตรัง', 'ตราด',
        'ตาก', 'นครนายก', 'นครปฐม', 'นครราชสีมา', 'นครศรีธรรมราช', 'นครสวรรค์', 'นนทบุรี',
        'นราธิวาส', 'น่าน', 'ปทุมธานี', 'ประจวบคีรีขันธ์', 'ปราจีนบุรี', 'ปัตตานี', 'พะเยา',
        'พระนครศรีอยุธยา', 'พังงา', 'พัทลุง', 'พิจิตร', 'พิษณุโลก', 'เพชรบุรี', 'เพชรบูรณ์',
        'ระนอง', 'ระยอง', 'ราชบุรี', 'ลพบุรี', 'ลำปาง', 'ลำพูน', 'ศรีสะเกษ',
        'สกลนคร', 'สงขลา', 'สตูล', 'สมุทรปราการ', 'สมุทรสงคราม', 'สมุทรสาคร', 'สระแก้ว',
        'สระบุรี', 'สิงห์บุรี', 'สุโขทัย', 'สุพรรณบุรี', 'สุราษฎร์ธานี', 'สุรินทร์', 'อ่างทอง',
        'อุทัยธานี', 'อุตรดิตถ์', 'อุบลราชธานี', 'อำนาจเจริญ', 'แม่ฮ่องสอน', 'แพร่', 'อุดรธานี',
        'หนองคาย', 'บึงกาฬ', 'นครพนม', 'มุกดาหาร', 'เลย', 'ร้อยเอ็ด', 'มหาสารคาม',
        'ยโสธร', 'บุรีรัมย์', 'ชัยภูมิ', 'ชัยนาท', 'ภูเก็ต', 'ยะลา', 'หนองบัวลำภู'
    ];

    provinces.sort((a, b) => {
        return a.localeCompare(b);
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic
        console.log({ name, surname, nickname, dob, gender, province });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>กรอกชื่อ</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='ชื่อ' />
            </div>
            <div>
                <label>กรอกนามสกุล</label>
                <input type="text" value={surname} onChange={(e) => setSurname(e.target.value)} placeholder='นามสกุล' />
            </div>
            <div>
                <label>ชื่อเล่น</label>
                <input type="text" value={nickname} onChange={(e) => setNickname(e.target.value)} placeholder='ชื่อเล่น' />
            </div>
            <div>
                <label>วัน/เดือน/ปีเกิด</label>
                <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} />
            </div>
            <div>
                <label>เพศ</label>
                <select value={gender} onChange={(e) => setGender(e.target.value)}>
                    <option value="ชาย">เลือกเพศ</option>
                    <option value="ชาย">ชาย</option>
                    <option value="หญิง">หญิง</option>
                    <option value="อื่น ๆ">อื่น ๆ</option>
                </select>
            </div>
            <div>
                <label>จังหวัด</label>
                <select value={province} onChange={(e) => setProvince(e.target.value)}>
                    <option value="ชาย">เลือกจังหวัดที่อยู่</option>
                    {provinces.map((province, index) => (
                        <option key={index} value={province}>{province}</option>
                    ))}
                </select>
            </div>
            <button type="submit">บันทึก</button>
        </form>
    );
}

export default PersonalInfo;
