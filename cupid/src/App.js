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
import LoginForm from './components/Regis-Login/LoginForm';
import { useEffect, useState } from 'react';
import PersonalInfo from './components/Info/PersonalInfo';
import LoginMasu from './components/Regis-Login/LoginMasu';
import LoginEsta from './components/Regis-Login/LoginEsta';
import Esta from './components/Info/Esta';

function App() {
  const [userName, setUserName] = useState(localStorage.getItem('name') || '');
  const [memberType, setMemberType] = useState(localStorage.getItem('memberType') || '');

  useEffect(() => {
    const name = localStorage.getItem('name');
    const type = localStorage.getItem('memberType');
    if (name) {
      setUserName(name);
    }
    if (type) {
      setMemberType(type);
    }
  }, []);

 

  return (
    <Router>
      <Navbar userName={userName} setUserName={setUserName} />
      <BackToTop />

      {/* แสดง Sidebar เฉพาะเมื่อ memberType เป็น 'idol' */}
      {/* {memberType === 'idol' && <Cupid setCurrentPage={setCurrentPage} />} */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/Profile/:id" element={<ProfilePage />} />
        <Route path="/location/:location" element={<LocationDetail />} />
        <Route path="/loginform" element={<LoginForm setUserName={setUserName} />} />
        <Route path="/loginmasu" element={<LoginMasu setUserName={setUserName} setMemberType={setMemberType} />} />
        <Route path="/loginesta" element={<LoginEsta setUserName={setUserName} setMemberType={setMemberType} />} />
        <Route path="/personalinfo" element={<PersonalInfo/>} />
        <Route path="/esta" element={<Esta/>} />
      </Routes>

      {/* {memberType === 'idol' && renderPage()} */}

      <Footer />
    </Router>
  );
}

export default App;
