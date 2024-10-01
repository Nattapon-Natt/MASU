import React, { useState } from 'react';
import '../CSS/Description.css';

function Description() {
    const [biography, setBiography] = useState('');
    const [philosophy, setPhilosophy] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ biography, philosophy });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>ประวัติ:</label>
                <textarea value={biography} onChange={(e) => setBiography(e.target.value)} />
            </div>
            <div>
                <label>ปรัชญาในการจับคู่:</label>
                <textarea value={philosophy} onChange={(e) => setPhilosophy(e.target.value)} />
            </div>
            <button type="submit">บันทึก</button>
        </form>
    );
}

export default Description;
