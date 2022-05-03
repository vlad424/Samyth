import React from 'react';

import './css/ProfileSide.css'

const PorfileSide = () => {
    const user_data = {
        name: "Your Name",
        numb_music: 28,
        groops: 11,
        city: "sinjar",
        phone: "+481 905 681"
    }

    return (
        <div className='profile-side'>
            <div className="profile-content">
                <div className="content-header">
                    <div className="profile-image">
                        <div className="profile-image-wrap">
                            <img src="asd" alt="null" />
                        </div>
                        <button className="edit-button-image">edit</button>
                    </div>
                    <div className="profile-meta">
                        <div className="profile-name">{user_data.name}</div>
                        <div className="profile-all-info">
                            <p className="user-city">
                                <span className="city">city:</span>
                                <span className="city-var">{user_data.city}</span>
                            </p>
                            <p className="user-phone">
                                <span className="phone">phone:</span>
                                <span className="phone-var">{user_data.phone}</span> 
                            </p>
                        </div>
                        <div className="profile-all-prop">
                            <div className="user-groops">
                                groops {user_data.groops}
                            </div>
                            <div className="user-music">
                                music {user_data.numb_music}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content-main">

                </div>
            </div>
            <div className="profile-footer"></div>
        </div>
    );
};

export default PorfileSide;