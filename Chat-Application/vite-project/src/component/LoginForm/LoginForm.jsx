import { useContext, useState } from "react";
import "./LoginForm.css";

import { useNavigate } from "react-router-dom";
import { CreateContext } from "../UseContext/CreateContext";

const LoginForm = () => {
    
    const [password, setPassword] = useState("");
    
    const navigate = useNavigate();
    const {email,setEmail,name,setName} = useContext(CreateContext)


    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/Home")

        alert("Login Submitted!");

    };

    return (
        <>
            <div className="login-container">
                <form className="login-form" onSubmit={handleSubmit}>
                    <h2 className="login-title">Login</h2>


                    <div className="form-group">
                        <label>Name</label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" className="login-btn">Login</button>
                </form>
            </div>
            
        </>
    );
};

export default LoginForm;
