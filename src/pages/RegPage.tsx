import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../assets/page_css/RegPage.css'

const RegPage = () => {
    const [text_state, setTextState] = useState('')
    const [password_state, setPasswordState] = useState('')
    const [email_state, setEmailState] = useState('')

    const includeButton = () => {
        if(email_state != ' ' && email_state.indexOf('@') != -1) {
            return(
                <Link to="/feed" className='continue-button-t'>continue</Link>
            );
        }
        else {
            return(
                <Link to="/feed" className='continue-button-f'>continue</Link>
            );
        }
    }

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
                        value={text_state}
                        placeholder='login'
                        onChange={e => setTextState(e.target.value)}
                    />
                    <input 
                        type="password" 
                        className="main-op-input" 
                        placeholder='password'
                        value={password_state}
                        onChange={e => setPasswordState(e.target.value)}
                    />
                    <input 
                        type="text" 
                        className="main-op-input" 
                        placeholder='email'
                        value={email_state}
                        onChange={e => setEmailState(e.target.value)}
                    />
                </span>
                <span className="footer-op">
                    <span className="footer-upper">
                        <button className="continue">
                            <Link to="/auth">log in</Link>
                        </button>
                        <button className="continue">
                            {includeButton()}
                        </button>
                    </span>
                    <span className="footer-down">
                        <button className="forgot">
                            <Link to="/forgot">forgot password?</Link>
                        </button>
                    </span>
                </span>
            </div>
        </div>
    );
};

export default RegPage;