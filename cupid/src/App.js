import './App.css';
import Navbar from './components/All/Navbar';
import Home from './screens/Home';
import LoginPage from './screens/LoginPage';
import RegisterPage from './screens/RegisterPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProfilePage from './screens/ProfilePage';
import Footer from './components/All/Footer';
import LocationDetail from './components/Profile/LocationDetail';
import BackToTop from './components/All/BackToTop';
import UserData from './screens/User/UserData';
import LoginForm from './components/Regis-Login/LoginForm';
import { useEffect, useState } from 'react';



function App() {

  const [userName, setUserName] = useState(localStorage.getItem('name') || '');

  // ใช้ useEffect เพื่อตรวจสอบการเปลี่ยนแปลงใน localStorage
  useEffect(() => {
    const name = localStorage.getItem('name');
    if (name) {
      setUserName(name);
    }
  }, []);

  return (
    <Router>
      <Navbar userName={userName} setUserName={setUserName} />
      <BackToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/Profile/:id" element={<ProfilePage />} />
        <Route path="/location/:location" element={<LocationDetail />} />
        <Route path="/UserData" element={<UserData />} />
        {/* <Route path="/loginform" element={<LoginForm />} /> */}
        <Route path="/loginform" element={<LoginForm setUserName={setUserName} />} />

      </Routes>
      <Footer />
    </Router>
    // <UserData />
  );
}

export default App;
