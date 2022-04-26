import React from 'react';
import LeftSide from '../components/MainPageComponents/LeftSide';
import PorfileSide from '../components/MainPageComponents/PorfileSide';

import '../assets/page_css/ProfilePage.css'

const ProfilePage = () => {
    return (
        <div className='ProfilePage'>
            <div className="wrap">
                <main className="main">
                    <aside className="left-side">
                        {/* <object data={eye} type="image/svg+xml" width="50" height="50"></object> */}
                        <LeftSide/>
                    </aside>
                    <div className="content-side">
                        <PorfileSide/>
                    </div>
                    <aside className="right-side">

                    </aside>
                </main>
                <footer className="footer"></footer>
            </div>
        </div>
    );
};

export default ProfilePage;