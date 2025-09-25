import { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { setName, setEmail, setPassword } from "../../Redux/LoginFormSlice";
import './LoginForm.css';



const LoginForm = () => {


    const navigate = useNavigate();
    const dispatch = useDispatch();


    const handleSubmit = (e) => {
        e.preventDefault();

        alert("Login Submitted!");
        navigate("/Home")

    };

    return (
        <div>
            <div className="login-container">
                <form className="login-form" onSubmit={handleSubmit}>
                    <h2 className="login-title">Login</h2>


                    <div className="form-group">
                        <label>Name</label>
                        <input
                            type="text"
                            placeholder="Enter your name"

                            onChange={(e) => dispatch(setName(e.target.value))}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"

                            onChange={(e) => dispatch(setEmail(e.target.value))}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"

                            onChange={(e) => dispatch(setPassword(e.target.value))}
                            required
                        />
                    </div>

                    <button type="submit" className="login-btn">Login</button>
                </form>
            </div>
        </div>



    );
};

export default LoginForm;
