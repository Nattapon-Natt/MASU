import React, { useState } from 'react';
import '../CSS/Contact.css';

function Contact() {
    const [lineImage, setLineImage] = useState(null);
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ lineImage, phone, email });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>รูปภาพไลน์:</label>
                <input type="file" onChange={(e) => setLineImage(e.target.files[0])} />
            </div>
            <div>
                <label>เบอร์โทร:</label>
                <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div>
                <label>อีเมล:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <button type="submit">บันทึก</button>
        </form>
    );
}

export default Contact;
