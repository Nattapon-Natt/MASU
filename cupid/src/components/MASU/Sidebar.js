import React from 'react';
import '../CSS/Sidebar.css';

function Sidebar({ setCurrentPage }) {
    return (
        <div className='body'>
            <div className="sidebar">
                <ul>
                    <li onClick={() => setCurrentPage('personalInfo')}>ประวัติส่วนตัว</li>
                    <li onClick={() => setCurrentPage('description')}>Description</li>
                    <li onClick={() => setCurrentPage('contact')}>Contact</li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
