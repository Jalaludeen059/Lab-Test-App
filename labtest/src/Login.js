import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './FormStyles.css'; // Importing the CSS file for form styling

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/login', { email, password });
            setMessage(response.data.message);
            localStorage.setItem('username', response.data.name); // Save username to local storage
            localStorage.setItem('email', email); // Save email to fetch user data later
            alert("Logged in successfully");
            navigate('/dashboard'); // Redirect to dashboard using react-router
        } catch (error) {
            setMessage(error.response?.data?.message || 'Login failed');
        }
    };

    return (
        <div className="form-wrapper">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit">Login</button>
                <p className="message">{message}</p>
            </form>
        </div>
    );
}

export default Login;
