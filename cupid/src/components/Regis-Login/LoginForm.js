// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import '../CSS/LoginForm.css';

// ({ onLogin }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('/api/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, password }),
//       });
//       const data = await response.json();
//       if (response.ok) {
//         onLogin();
//       } else {
//         alert(data.message);
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

// const LoginForm = () => {
//   const [step, setStep] = useState(1);

//   const toStep2 = (url) => {
//     setStep(2);
//   };
//   function onLogin(event) {

//   }




//   return (

//     <div className="container">

//       <main className="register-page">

//         <div className="text-center"> {/* อยู่ใน bootstrap */}
//           <h3>เข้าสู่ระบบ</h3>
//         </div>

//         <div className="row justify-content-center">
//           <div className="col-lg-6">
//             <div className="register-box">
//               <form id="f-admin" className="needs-validation" noValidate>
//                 {step === 1 && (
//                   <div className="row g-3 step1 active justify-content-center">
//                     <div className="col-12">
//                       <label className="tel-des">กรุณาเลือกวัตถุประสงค์การใช้งาน</label>
//                     </div>
//                     <div className="col-md-6">
//                       <Link className="btn btn-idol round-medium btn-lg" href="javascript:void(0);" onClick={() => toStep2('/login/auth')} style={{ width: '100%' }}>
//                         หาคู่
//                       </Link>
//                     </div>
//                     <div className="col-md-12">
//                       <div className="row">
//                         <div className="col-5">
//                           <hr />
//                         </div>
//                         <div className="col-2" style={{ alignItems: 'center', display: 'flex' }}>
//                           <label style={{ width: '100%', textAlign: 'center' }}>หรือ</label>
//                         </div>
//                         <div className="col-5">
//                           <hr />
//                         </div>
//                       </div>
//                     </div>
//                     <div className="col-md-6">
//                       <Link className="btn btn-idol round-medium btn-lg" href="javascript:void(0);" onClick={() => toStep2('/login/authidol')} style={{ width: '100%' }}>
//                         เป็นแม่สื่อ
//                       </Link>
//                     </div>
//                     <div className="col-md-12">
//                       <div className="row">
//                         <div className="col-5">
//                           <hr />
//                         </div>
//                         <div className="col-2" style={{ alignItems: 'center', display: 'flex' }}>
//                           <label style={{ width: '100%', textAlign: 'center' }}>หรือ</label>
//                         </div>
//                         <div className="col-5">
//                           <hr />
//                         </div>
//                       </div>
//                     </div>
//                     <div className="col-md-6">
//                       <Link className="btn btn-idol round-medium btn-lg" href="javascript:void(0);" onClick={() => toStep2('/login/authidol')} style={{ width: '100%' }}>
//                         สถานประกอบการ
//                       </Link>
//                     </div>
//                     <div className="col-md-12">
//                       <br />
//                       <br />
//                       <br />
//                     </div>
//                     <div className="col-md-6">
//                       <Link className="btn btn-idol-outline round" to="/register" style={{ width: '100%' }}>
//                         สมัครสมาชิก
//                       </Link>
//                     </div>
//                   </div>
//                 )}
//                 {step === 2 && (
//                   <div className="row g-3 step2">
//                     <div className="col-12">
//                       <div className="input-icons">
//                         <img className="icon" src="assets/pic/user_icon.png" alt="User Icon" />
//                         <input type="text" className="form-control form-outline-idol" id="username_login" placeholder="ยูสเซอร์เนม หรือเบอร์โทร" name="username" />
//                       </div>
//                     </div>
//                     <div className="col-12">
//                       <div className="input-icons">
//                         <img className="icon" src="assets/pic/Password.png" alt="Password Icon" />
//                         <input type="password" className="form-control form-outline-idol" placeholder="Password (พาสเวิร์ด)" id="password_login" name="password" />
//                       </div>
//                     </div>
//                     <div className="col-12 center-button">
//                       <Link className="btn btn-idol round btn-lg" href="javascript:void(0);" onClick={onLogin}>
//                         เข้าสู่ระบบ
//                       </Link>
//                     </div>
//                     <div className="col-12 center-button">
//                       <Link className="forget-pass-txt" target="_blank" rel="noopener noreferrer" href="https://lin.ee/kdKMByZ">
//                         ลืมรหัสผ่าน
//                       </Link>
//                     </div>
//                   </div>
//                 )}
//               </form>
//             </div>
//           </div>
//         </div>
//       </main>

//     </div>

//   );
// };

// export default LoginForm;


// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import '../CSS/LoginForm.css';

// const LoginForm = () => {
//   const [step, setStep] = useState(1);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const navigate = useNavigate();

//   const toStep2 = (url) => {
//     setStep(2);
//   };

//   const onLogin = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await fetch('/api/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, password }),
//       });
//       const data = await response.json();
//       if (response.ok) {
//         // Redirect to the desired page after successful login
//         navigate('/dashboard');
//       } else {
//         setErrorMessage(data.message);
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       setErrorMessage('เกิดข้อผิดพลาดในการเชื่อมต่อ');
//     }
//   };

//   return (
//     <div className="container">
//       <main className="register-page">

//         <div className="text-center">
//           <h3>เข้าสู่ระบบ</h3>
//         </div>

//         <div className="row">
//           <div className="col-lg-6">
//             <div className="register-box">
//               <form id="f-admin" className="needs-validation" noValidate>
//                 {step === 1 && (
//                   <div className="row g-5 step1 active">
//                     <div className="col-12">
//                       <p className="objective">กรุณาเลือกวัตถุประสงค์การใช้งาน</p>
//                     </div>
//                     <div className="col-md-6">
//                       <Link className="btn btn-idol round-medium btn-lg" href="javascript:void(0);" onClick={() => toStep2('/login/auth')} style={{ width: '100%' }}>
//                         หาคู่
//                       </Link>
//                     </div>
//                     <div className="col-md-12">
//                       <div className="row">
//                         <div className="col-5">
//                           <hr />
//                         </div>
//                         <div className="col-2">
//                           <p>หรือ</p>
//                         </div>
//                         <div className="col-5">
//                           <hr />
//                         </div>
//                       </div>
//                     </div>
//                     <div className="col-md-6">
//                       <Link className="btn btn-idol outline btn-lg" href="javascript:void(0);" onClick={() => toStep2('/login/authidol')} style={{ width: '100%' }}>
//                         เป็นแม่สื่อ
//                       </Link>
//                     </div>
//                     <div className="col-md-12">
//                       <div className="row">
//                         <div className="col-5">
//                           <hr />
//                         </div>
//                         <div className="col-2" >
//                           <p >หรือ</p>
//                         </div>
//                         <div className="col-5">
//                           <hr />
//                         </div>
//                       </div>
//                     </div>
//                     <div className="col-md-6">
//                       <Link className="btn btn-idol outline btn-lg" href="javascript:void(0);" onClick={() => toStep2('/login/authidol')} style={{ width: '100%' }}>
//                         สถานประกอบการ
//                       </Link>
//                     </div>
//                     <div className="col-md-12">
//                       <br />
//                       <br />
//                       <br />
//                     </div>
//                     <div className="col-md-6">
//                       <Link className="btn btn-idol-outline round" to="/register" style={{ width: '100%' }}>
//                         สมัครสมาชิก
//                       </Link>
//                     </div>
//                   </div>
//                 )}
//                 {step === 2 && (
//                   <div className="row g-3 step2">
//                     <div className="col-12">
//                       <div className="input-icons">
//                         <img className="icon" src="assets/pic/user_icon.png" alt="User Icon" />
//                         <input type="text" className="form-control form-outline-idol" id="username_login" placeholder="ยูสเซอร์เนม หรือเบอร์โทร" name="username" />
//                       </div>
//                     </div>
//                     <div className="col-12">
//                       <div className="input-icons">
//                         <img className="icon" src="assets/pic/Password.png" alt="Password Icon" />
//                         <input type="password" className="form-control form-outline-idol" placeholder="Password (พาสเวิร์ด)" id="password_login" name="password" />
//                       </div>
//                     </div>
//                     <div className="col-12 center-button">
//                       <Link className="btn btn-idol round btn-lg" href="javascript:void(0);" onClick={onLogin}>
//                         เข้าสู่ระบบ
//                       </Link>
//                     </div>
//                     <div className="col-12 center-button">
//                       <Link className="forget-pass-txt" target="_blank" rel="noopener noreferrer" href="https://lin.ee/kdKMByZ">
//                         ลืมรหัสผ่าน
//                       </Link>
//                     </div>
//                   </div>
//                 )}
//               </form>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default LoginForm;

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../CSS/LoginForm.css';

const LoginForm = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();


  const handleRegisterClick = () => {
    navigate('/register', { state: { from: '/login' } }); // Pass state to indicate from login
    window.scrollTo(0, 0); // Scroll to top of the page
  };

  const toStep2 = (url) => {
    setStep(2);
  };

  const onLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/login', { // เปลี่ยน `/api/login` เป็น URL ที่ถูกต้องสำหรับ API ของคุณ
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        // Redirect to the desired page after successful login
        navigate('/dashboard'); // เปลี่ยน '/dashboard' เป็น URL ของหน้าที่ต้องการไปหลังล็อกอิน
      } else {
        setErrorMessage(data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('เกิดข้อผิดพลาดในการเชื่อมต่อ');
    }
  };

  return (
    <div className="container">
      <main className="login-page">

        <div className="text-center">
          <h3 style={{ fontWeight: 'bold' }}>เข้าสู่ระบบ</h3>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <div className="login-box">
              <form id="f-admin" className="needs-validation" noValidate>
                {step === 1 && (
                  <div className="row g-4 step1 active">
                    <div className="col-12">
                      <h5 className="objective">กรุณาเลือกวัตถุประสงค์การใช้งาน</h5>
                    </div>
                    <div className="col-md-12">
                        <Link className="btn btn-idol round-medium btn-lg" href="javascript:void(0);" onClick={() => toStep2('/login/auth')} style={{ width: '100%' }}>
                          ติดต่อแม่สื่อ
                        </Link>
                    </div>
                    <div className="col-md-12">
                      <div className="row">
                        <div className="col-5">
                          <hr />
                        </div>
                        <div className="col-2">
                          <p>หรือ</p>
                        </div>
                        <div className="col-5">
                          <hr />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <Link className="btn btn-idol outline btn-lg" href="javascript:void(0);" onClick={() => toStep2('/login/authidol')} style={{ width: '100%' }}>
                        เป็นแม่สื่อ
                      </Link>
                    </div>
                    <div className="col-md-12">
                      <div className="row">
                        <div className="col-5">
                          <hr />
                        </div>
                        <div className="col-2" >
                          <p>หรือ</p>
                        </div>
                        <div className="col-5">
                          <hr />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <Link className="btn btn-idol outline btn-lg" href="javascript:void(0);" onClick={() => toStep2('/login/authidol')} style={{ width: '100%' }}>
                        สถานประกอบการ
                      </Link>
                    </div>
                    <div className="col-md-12">

                    </div>
                    <div style={{ marginTop: '50px' }} className="col-md-6">
                      <Link className="btn btn-idol-outline round" onClick={handleRegisterClick} to="/register" style={{ width: '100%' }}>
                        สมัครสมาชิก
                      </Link>
                    </div>
                  </div>
                )}
                {step === 2 && (
                  <div className="row g-3 step2">
                    <div className="col-12">
                      <div className="input-icons">
                        <img className="icon" src="/project/masu/images/user_icon.png" alt="User Icon" />
                        <input
                          type="text"
                          className="form-control form-outline-idol"
                          id="username_login"
                          placeholder="ยูสเซอร์เนม หรือเบอร์โทร"
                          name="username"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="input-icons">
                        <img className="icon" src="/project/masu/images/Password.png" alt="Password Icon" />
                        <input
                          type="password"
                          className="form-control form-outline-idol"
                          placeholder="Password (พาสเวิร์ด)"
                          id="password_login"
                          name="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-12 center-button">
                      {errorMessage && <div className="error-message">{errorMessage}</div>}
                      <button className="btn btn-idol round btn-lg" onClick={onLogin}>
                        เข้าสู่ระบบ
                      </button>
                    </div>
                    <div className="col-12 center-button">
                      <Link className="forget-pass-txt" target="_blank" rel="noopener noreferrer" href="https://lin.ee/kdKMByZ">
                        ลืมรหัสผ่าน
                      </Link>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LoginForm;