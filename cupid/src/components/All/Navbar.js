import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import '../CSS/Navbar.css';

function Navbar({ userName, setUserName }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isMasuLogin, setIsMasuLogin] = useState(false); // เช็คว่า login มาจาก LoginMasu หรือไม่
    const navigate = useNavigate(); 

    useEffect(() => {
        // ดึงค่า memberType จาก localStorage เพื่อตรวจสอบว่าเป็นการ login ผ่าน LoginMasu หรือไม่
        const memberType = localStorage.getItem('memberType');
        if (memberType === 'idol' || memberType === 'esestablishment') {
            setIsMasuLogin(true); // ถ้าเป็น 'masu' แสดงว่า login ผ่าน LoginMasu
        }
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleLogout = () => {
        localStorage.removeItem('name'); 
        localStorage.removeItem('memberType'); 
        setUserName('');
        navigate('/'); 
        window.location.reload();
    };

    return (
        <nav className="nav">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    {/* <img src="/project/masu/images/masu.png" alt="MASU-Logo" /> */}
                    <img src="/assets/pic/masu.png" alt="MASU-Logo" />
                    MASU
                </Link>
                <div className="menu-icon" onClick={toggleMenu}>
                    <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
                    {/* ถ้า login ผ่าน LoginMasu (isMasuLogin == true) ให้ซ่อนหน้าแรก */}
                    {!isMasuLogin && (
                        <li className="nav-item">
                            <Link to="/" className="nav-links" onClick={toggleMenu}>หน้าแรก</Link>
                        </li>
                    )}

                    {userName ? (
                        <>
                            <li className="nav-item">
                                <span className="nav-links">ยินดีต้อนรับคุณ {userName}</span>
                            </li>
                            <li className="nav-item">
                                <button className="nav-links logout" onClick={handleLogout}>Logout</button>
                            </li>
                        </>
                    ) : (
                        <>
                            <li className="nav-item">
                                <Link to="/login" className="nav-links" onClick={toggleMenu}>เข้าสู่ระบบ</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/register" className="nav-links" onClick={toggleMenu}>สมัครสมาชิก</Link>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
