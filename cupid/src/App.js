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

import PersonalInfo from './components/MASU/PersonalInfo';
import Description from './components/MASU/Description';
import Contact from './components/MASU/Contact';
import Sidebar from './components/MASU/Sidebar';



function App() {
  const [userName, setUserName] = useState(localStorage.getItem('name') || '');

  useEffect(() => {
    const name = localStorage.getItem('name');
    if (name) {
      setUserName(name);
    }
  }, []);

  const [currentPage, setCurrentPage] = useState('personalInfo');

  const renderPage = () => {
    switch (currentPage) {
      case 'personalInfo':
        return <PersonalInfo />;
      case 'description':
        return <Description />;
      case 'contact':
        return <Contact />;
      default:
        return <PersonalInfo />;
    }
  };

  return (
    <Router>
      <Navbar userName={userName} setUserName={setUserName} />
      <BackToTop />
      <div className="app">
        <Sidebar setCurrentPage={setCurrentPage} />
        <div className="content">
          {renderPage()}
        </div>
      </div>

      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/Profile/:id" element={<ProfilePage />} />
        <Route path="/location/:location" element={<LocationDetail />} />
        <Route path="/UserData" element={<UserData />} />
        <Route path="/loginform" element={<LoginForm setUserName={setUserName} />} />
      </Routes>
      <Footer /> */}
    </Router>
  );
}

export default App;
