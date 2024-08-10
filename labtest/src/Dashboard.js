import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Dashboard.css'; // Ensure this CSS file exists and is properly referenced

function Dashboard() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            setLoading(true);
            try {
                const email = localStorage.getItem('email');
                if (!email) {
                    window.location.href = '/login'; // Redirect to login if no email
                    return;
                }

                const response = await axios.get('http://localhost:5000/user', {
                    params: { email }
                });
                setUser(response.data);
            } catch (error) {
                setError('Error fetching user data.');
                console.error('Error fetching user data:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchUser();
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('username');
        localStorage.removeItem('email');
        window.location.href = '/login'; // Redirect to login page
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    if (!user) {
        return <p>No user data available.</p>;
    }

    return (
        <div className="dashboard">
            <h1>Dashboard</h1>
            <h2>Welcome, {user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default Dashboard;
