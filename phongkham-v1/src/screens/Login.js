import React from 'react';
import '../style/Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axiosConfig";

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const respone = await api.post("/login", formData, {
                headers: { "Content-Type": "application/json" },
            });
            const rdata = await respone.data;
            sessionStorage.setItem("id", rdata.id);
            navigate("/");
        } catch (error) {
            console.error("Error submitting data:", error);
        }
    };
    return (
        <div style={{ display: 'flex' }}>
            <div className='background'></div>
            <div className='form-background'>
                <form className='form1' onSubmit={handleSubmit}>
                    <div className='my-4'>
                        <img className='brand' src="https://noithatnghilam.com/SalesUploads/2181/26112020/4755b8a2-faea-4a61-98f9-7a952b67ce77.jpg" alt="Logo" width="50" height="50"></img>
                    </div>
                    <div className='input-info'>
                        <label htmlFor="email" className="form-label">
                            Email
                        </label>
                        <div className='flex'>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                className="email-input form-control"
                                placeholder="Input you email"
                                onChange={handleChange}
                            />
                        </div>
                        <label htmlFor="password" className="form-label">
                            Password
                        </label>
                        <div className='flex'>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                placeholder="Enter your password"
                                className="password form-control"
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div>
                        <p>
                            Dont't have account?{" "}
                            <a className="register-link" href="/register">
                                Register here
                            </a>
                        </p>
                    </div>
                    <div className="my-4">
                        <button type="submit" className="login-btn">
                            Login
                        </button>
                    </div>
                </form>
                <a className='return-btn' href='/' style={{ marginTop: '20px' }}><FontAwesomeIcon style={{ color: 'black', marginRight: '10px' }} icon={faArrowLeft} />Back to home page</a>
            </div>
        </div>
    );
};

export default Login;