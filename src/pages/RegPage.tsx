import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/page_css/RegPage.css'

const RegPage = () => {
    return (
        <div className='RegPage'>
            <div className="reg-menu">
                <span className="header-op">
                    <h1 className="h1">Hey :)</h1>
                </span>
                <span className="main_op">
                    <input 
                        type="text" 
                        className="main-op-input" 
                        placeholder='login'
                    />
                    <input 
                        type="password" 
                        className="main-op-input" 
                        placeholder='password'
                    />
                    <input 
                        type="text" 
                        className="main-op-input" 
                        placeholder='email'
                    />
                </span>
                <span className="footer-op">
                    <span className="footer-upper">
                        <button className="continue">
                            <Link to="/auth">log in</Link>
                        </button>
                        <button className="continue">
                            <Link to="/feed">continue</Link>
                        </button>
                    </span>
                    <span className="footer-down">
                        <button className="forgot">
                            <Link to="/">forgot password?</Link>
                        </button>
                    </span>
                </span>
            </div>
        </div>
    );
};

export default RegPage;