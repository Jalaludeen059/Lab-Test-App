import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import Home from './Home';
import Dashboard from './Dashboard';
import Navbar from './Navbar';
import AboutPage from './About';

const AppContent = () => {
    const location = useLocation();

    // Determine if Navbar should be shown
    const showNavbar = location.pathname !== '/dashboard'; // Navbar will not show on the dashboard page

    return (
        <>
            {showNavbar && <Navbar />}
            <div className="content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
            </div>
        </>
    );
};

function App() {
    return (
        <Router>
            <AppContent />
        </Router>
    );
}

export default App;
