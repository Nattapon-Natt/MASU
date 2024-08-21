import './App.css';
import Navbar from './components/All/Navbar';
import Home from './screens/Home';
import LoginPage from './screens/LoginPage';
import RegisterPage from './screens/RegisterPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Profile from './screens/Profile';
import ProfilePage from './screens/ProfilePage';
import Footer from './components/All/Footer';
import LocationDetail from './components/Profile/LocationDetail';
import BackToTop from './components/All/BackToTop';
import UserData from './screens/User/UserData';
// import LocationDetail from './components/Profile/LocationDetail';


function App() {
  return (
    <Router>
      <Navbar />
      <BackToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/Profile/:id" element={<ProfilePage />} />
        <Route path="/location/:location" element={<LocationDetail />} />
        <Route path="/UserData" element={<UserData />} />
      </Routes>
      <Footer />
    </Router>
    // <UserData />
  );
}

export default App;
