import React, { useState } from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './components/redux/store';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Profile from './components/profile/Profile';
import About from './components/about/About';
import Login from './components/login/Login';
import AdminLogin from './components/admin/AdminLogin';
import AdminDashboard from './components/admin/AdminDashboard';
import Footer from './components/footer/Footer';
import FaqPage from './components/faq/FaqPage';
import Signup from './components/signup/Signup';
import Layout from './components/layout/Layout';

function App() {
  const [values, setValues] = useState({ email: '', password: '', name: '' });
  const [error, setError] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    // Handle login logic
    console.log('Logging in with:', values);
  };

  const handleSignup = (event) => {
    event.preventDefault();
    // Handle signup logic
    console.log('Signing up with:', values);
  };

  return (
    <div className="App">
      <Provider store={store}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<Home />} />
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route 
          path="/login" 
          element={<Login handleLogin={handleLogin} setValues={setValues} values={values} error={error} />} 
        />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route 
          path="/signup" 
          element={<Signup handleSignup={handleSignup} setValues={setValues} values={values} error={error} />} 
        />
      </Routes>
      </Provider>
      <Footer />
    </div>
  );
}

export default App;
