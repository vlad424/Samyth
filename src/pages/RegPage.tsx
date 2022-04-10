import React from 'react';

import '../assets/page_css/RegPage.css'

const RegPage = () => {
    return (
        <div className='RegPage'>
            <div className="reg-menu">
                <span className="header-op">
                    <h1 className="h1">Hey :)</h1>
                </span>
                <span className="main_op">
                    <input type="text" className="main-op-input" />
                    <input type="text" className="main-op-input" />
                    <input type="text" className="main-op-input" />
                </span>
                <span className="footer-op">
                    <span className="footer-upper">
                        <button className="continue">
                            continue
                        </button>
                    </span>
                    <span className="footer-down">
                        <button className="forgot">
                            forgot password?
                        </button>
                    </span>
                </span>
            </div>
        </div>
    );
};

export default RegPage;