// RegisterValidation.js

export default function Validation(values) {
    let errors = {};

    // ตรวจสอบเบอร์โทรศัพท์
    if (!values.tel) {
        errors.tel = "กรุณากรอกเบอร์โทรศัพท์";
    } else if (!/^\d+$/.test(values.tel)) {
        errors.tel = "กรุณากรอกเฉพาะตัวเลขเท่านั้น";
    } else if (values.tel[0] !== '0') {
        errors.tel = "เบอร์โทรศัพท์ต้องขึ้นต้นด้วย 0";
    } else if (!/^0(6|8|9)/.test(values.tel)) {
        errors.tel = "เบอร์โทรศัพท์ต้องขึ้นต้นด้วย 06, 08 หรือ 09 เท่านั้น";
    } else if (values.tel.length !== 10) {
        errors.tel = "เบอร์โทรศัพท์ต้องมี 10 ตัวอักษร";
    }

    // การตรวจสอบอื่นๆ (เช่นชื่อ, อีเมล, รหัสผ่าน)
    if (!values.name) {
        errors.name = "กรุณากรอกชื่อ";
    }
    
    if (!values.lastname) {
        errors.lastname = "กรุณากรอกนามสกุล";
    }

    if (!values.email) {
        errors.email = "กรุณากรอกอีเมล";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "รูปแบบอีเมลไม่ถูกต้อง";
    }

    if (!values.password) {
        errors.password = "กรุณากรอกรหัสผ่าน";
    } else if (values.password.length < 8) {
        errors.password = "รูปแบบรหัสผ่านไม่ถูกต้อง";
    }

    return errors;
}
