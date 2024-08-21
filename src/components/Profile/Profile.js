// import React from 'react';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import '../CSS/Profile.css';
// import { Link, useParams } from 'react-router-dom';
// import IdolData from '../First/IdolData';

// const Profile = () => {
//     const { id } = useParams();
//     const idol = IdolData.find(idol => idol.id === id);

//     if (!idol) {
//         return <div>Profile not found</div>;
//     }

//     return (
//         <main >
//             <div className="container">

//                 <div className="row justify-content-center profile-idol">

//                     <div className="col col-lg-6 ">
//                         <div className="profile-idol-box">
//                             <img className="profile-idol-bg"
//                                 src={idol.imgSrc}
//                                 alt={idol.name} />
//                         </div>
//                     </div>

//                     <div className="col-lg-5">
//                         <label className="idol-name">{idol.name}</label><br />
//                         <label className="adv-word">{idol.description}</label><br />
//                         <div className="des-location">
//                             <img className="pin" src="/assets/pic/loc-pin2.png" alt="Location Pin" />
//                             <button className="des"><label className="main-loc">{idol.location}</label></button>
//                             <button className="des"><label>{idol.details}</label></button>
//                             <button className="des"><label> {idol.age}</label></button>
//                             <button className="des"><label><img className="gender" src="/assets/pic/gender.png" alt="Gender Icon" />{idol.gender}</label></button>
//                         </div>

//                         <div className="col-lg-12">
//                             <label className="detail">รายละเอียด</label>
//                             <p>หลักสูตรภาษาญี่ปุ่นสำหรับผู้หลักสูตรภาษาญี่ปุ่นสำหรับผู้เริ่มต้นที่ยังไม่มีความรู้พื้นฐานในภาษาญี่ปุ่นมาก่อน</p>
//                             <p>หากเรียนจบแล้วสามารถไปสอบเจแอลพิธีเพื่อให้ได้ระดับ N5</p>

//                             <label className="sub-detail">เหมาะสำหรับผู้ที่</label>
//                             <p>อยากค่อย ๆ เรียนแบบไม่หนักมาก</p>
//                             <p>เรียนเพื่อเสริมความรู้</p>
//                             <p>ว่างแค่วันธรรมดาช่วงเย็น หรือ วันหยุดสุดสัปดาห์</p>

//                             <label className="sub-detail">เรียนจบคอร์ส B1 แล้วได้อะไร?</label>
//                             <p>เขียน อ่าน และออกเสียง ตัวอักษรญี่ปุ่นพื้นฐาน ( Hiragana, Katakana )</p>
//                             <p>แนะนำตัวภาษาญี่ปุ่น สวัสดี ขอบคุณ ขอโทษ ตอบรับ ปฏิเสธ พูดคุย ทักทายเบื้องต้น</p>
//                             <p>รู้คำศัพท์ภาษาญี่ปุ่น ที่จำเป็นในชีวิตประจำวันอย่างง่าย ๆ</p>
//                             <p>สื่อสารเรื่องสถานที่ ตัวเลข ราคา วันเดือนปี เวลา กำหนดการ การเดินทาง</p>
//                             <p>สื่อสารเรื่องการกระทำ กำหนดการอย่างง่าย ๆ ในอดีต ปัจจุบันและอนาคต</p>
//                         </div>
//                     </div>

//                     <button className="btn btn-talk btn-lg">พูดคุยกับแม่สื่อ</button>

//                 </div>

//                 <div className="row justify-content-center">
//                     <div className="col-md-4 col-lg-3">
//                         <Link className="backto-home" to="/">
//                             <img src="/assets/pic/idol-arrow.png" alt="Back to Home" />
//                             กลับหน้าแรก
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//         </main>
//     );
// };

// export default Profile;

// import React, { useEffect } from 'react';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import '../CSS/Profile.css';
// import { Link, useParams } from 'react-router-dom';
// import IdolData from '../First/IdolData';

// const Profile = () => {
//     const { id } = useParams();
//     const idol = IdolData.find(idol => idol.id === id);

//     useEffect(() => {
//         window.scrollTo(0, 0); // เลื่อนหน้าจอไปที่ด้านบนสุด
//     }, []);

//     if (!idol) {
//         return <div>ไม่พบโปรไฟล์</div>;
//     }

//     return (
//         <main>
//             <div className="container">
//                 <div className="row justify-content-center profile-idol">
//                     <div className="col-lg-6">
//                         <div className="profile-idol-box">
//                             <img
//                                 className="profile-idol-bg"
//                                 src={idol.imgSrc || '/assets/default-image.png'}
//                                 alt={idol.name || 'รูปไอดอล'}
//                             />
//                         </div>
//                     </div>
//                     <div className="col-lg-5">
//                         <label className="idol-name">{idol.name || 'ไม่มีชื่อ'}</label><br />
//                         <label className="adv-word">{idol.description || 'ไม่มีคำอธิบาย'}</label><br />
//                         <div className="location">
//                             <img className="pin" src="/assets/pic/loc-pin2.png" alt="Location Pin" />
//                             <button className="des"><label className="loc">{idol.location || 'ไม่มีที่อยู่'}</label></button>
//                             <button className="des">
//                                 <label>{idol.details || 'ไม่มีรายละเอียด'}</label>
//                             </button>
//                             <button className="des">
//                                 <label>{idol.age || 'ไม่ทราบอายุ'}</label>
//                             </button>
//                             <button className="des">
//                                 <label>
//                                     <img className="gender" src="/assets/pic/gender.png" alt="ไอคอนเพศ" />
//                                     {idol.gender || 'ไม่ทราบเพศ'}
//                                 </label>
//                             </button>
//                         </div>
//                         <div className="col">
//                             <label className="detail">รายละเอียด</label>
//                             <p>หลักสูตรภาษาญี่ปุ่นสำหรับผู้เริ่มต้นที่ยังไม่มีความรู้พื้นฐานในภาษาญี่ปุ่นมาก่อน</p>
//                             <p>หากเรียนจบแล้วสามารถไปสอบเจแอลพิธีเพื่อให้ได้ระดับ N5</p>

//                             <label className="sub-detail">เหมาะสำหรับผู้ที่</label>
//                             <p>อยากค่อย ๆ เรียนแบบไม่หนักมาก</p>
//                             <p>เรียนเพื่อเสริมความรู้</p>
//                             <p>ว่างแค่วันธรรมดาช่วงเย็น หรือ วันหยุดสุดสัปดาห์</p>

//                             <label className="sub-detail">เรียนจบคอร์ส B1 แล้วได้อะไร?</label>
//                             <p>เขียน อ่าน และออกเสียง ตัวอักษรญี่ปุ่นพื้นฐาน (Hiragana, Katakana)</p>
//                             <p>แนะนำตัวภาษาญี่ปุ่น สวัสดี ขอบคุณ ขอโทษ ตอบรับ ปฏิเสธ พูดคุย ทักทายเบื้องต้น</p>
//                             <p>รู้คำศัพท์ภาษาญี่ปุ่นที่จำเป็นในชีวิตประจำวันอย่างง่าย ๆ</p>
//                             <p>สื่อสารเรื่องสถานที่ ตัวเลข ราคา วันเดือนปี เวลา กำหนดการ การเดินทาง</p>
//                             <p>สื่อสารเรื่องการกระทำ กำหนดการอย่างง่าย ๆ ในอดีต ปัจจุบันและอนาคต</p>
//                         </div>
//                     </div>
//                     <button className="btn btn-talk btn-lg">พูดคุยกับแม่สื่อ</button>
//                 </div>
//                 <div className="row justify-content-center">
//                     <div className="col-md-4 col-lg-3">
//                         <Link className="backto-home" to="/">
//                             <img src="/assets/pic/idol-arrow.png" alt="Back to Home" />
//                             กลับหน้าแรก
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//         </main>
//     );
// };

// export default Profile;


import React, { useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../CSS/Profile.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import IdolData from '../First/IdolData';

const Profile = () => {
    const { id } = useParams();
    const idol = IdolData.find(idol => idol.id === id);

    const navigate = useNavigate();

    const handleBackToHome = (e) => {
        e.preventDefault();
        navigate('/');
        window.scrollTo(0, 0);
    };

    useEffect(() => {
        window.scrollTo(0, 0); // เลื่อนหน้าจอไปที่ด้านบนสุด
    }, []);

    if (!idol) {
        return <div>ไม่พบโปรไฟล์</div>;
    }

    return (
        <main>
            <div className="container">
                <div className="row justify-content-center profile-idol">
                    <div className="col-lg-6">
                        <div className="profile-idol-box">
                            <img
                                className="profile-idol-bg"
                                src={idol.imgSrc}
                                alt={idol.name}
                            />
                        </div>
                    </div>

                    <div className="col-lg-5">
                        <h1 className="idol-name">{idol.name}</h1>
                        <p className="adv-word">{idol.description}</p>
                        {/* <div className="location">
                            <img className="pin" src="/assets/pic/loc-pin2.png" alt="Location Pin" />
                            <button className="des"><span className="loc">{idol.location}</span></button>
                            <button className="des"><span>{idol.details}</span></button>
                            <button className="des"><span>{idol.age}</span></button>
                            <button className="des">
                                <img className="gender" src="/assets/pic/gender.png" alt="Gender Icon" />
                                <span>{idol.gender}</span>
                            </button>
                        </div> */}

                        <div className="location">
                            <div className="location-row">
                                <img className="pin" src="/assets/pic/loc-pin2.png" alt="Location Pin" />
                                <button className="des"><span className="loc">{idol.location}</span></button>
                            </div>
                            <div className="location-row">
                                <button className="des"><span>{idol.details}</span></button>
                            </div>
                            <div className="location-row">
                                <button className="des"><span>{idol.age}</span></button>
                                <button className="des">
                                    <img className="gender" src="/assets/pic/gender.png" alt="Gender Icon" />
                                    <span>{idol.gender}</span>
                                </button>
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <h2 className="detail">รายละเอียด</h2>
                            <p>หลักสูตรภาษาญี่ปุ่นสำหรับผู้หลักสูตรภาษาญี่ปุ่นสำหรับผู้เริ่มต้นที่ยังไม่มีความรู้พื้นฐานในภาษาญี่ปุ่นมาก่อน</p>
                            <p>หากเรียนจบแล้วสามารถไปสอบเจแอลพิธีเพื่อให้ได้ระดับ N5</p>

                            <h3 className="sub-detail">เหมาะสำหรับผู้ที่</h3>
                            <p>อยากค่อย ๆ เรียนแบบไม่หนักมาก</p>
                            <p>เรียนเพื่อเสริมความรู้</p>
                            <p>ว่างแค่วันธรรมดาช่วงเย็น หรือ วันหยุดสุดสัปดาห์</p>

                            <h3 className="sub-detail">เรียนจบคอร์ส B1 แล้วได้อะไร?</h3>
                            <p>เขียน อ่าน และออกเสียง ตัวอักษรญี่ปุ่นพื้นฐาน ( Hiragana, Katakana )</p>
                            <p>แนะนำตัวภาษาญี่ปุ่น สวัสดี ขอบคุณ ขอโทษ ตอบรับ ปฏิเสธ พูดคุย ทักทายเบื้องต้น</p>
                            <p>รู้คำศัพท์ภาษาญี่ปุ่น ที่จำเป็นในชีวิตประจำวันอย่างง่าย ๆ</p>
                            <p>สื่อสารเรื่องสถานที่ ตัวเลข ราคา วันเดือนปี เวลา กำหนดการ การเดินทาง</p>
                            <p>สื่อสารเรื่องการกระทำ กำหนดการอย่างง่าย ๆ ในอดีต ปัจจุบันและอนาคต</p>
                        </div>
                    </div>

                    <button className="btn btn-talk btn-lg">พูดคุยกับแม่สื่อ</button>
                </div>

                <div className="row justify-content-center">
                    <div className="col-md-4 col-lg-3">
                        <Link className="backto-home" to="/" onClick={handleBackToHome}>
                            <img src="/assets/pic/idol-arrow.png" alt="Back to Home" />
                            กลับหน้าแรก
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Profile;