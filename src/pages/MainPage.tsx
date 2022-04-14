import React from 'react';
import eye from "../assets/img/eye.svg";
import { Link } from 'react-router-dom';
import LeftSide from '../components/MainPageComponents/LeftSide';
import ContentSide from '../components/MainPageComponents/ContentSide';

import '../assets/page_css/MainPage.css'

const MainPage = () => {
    return (
        <div className='MainPage'>
            <div className="wrap">
                <main className="main">
                    <aside className="left-side">
                        {/* <object data={eye} type="image/svg+xml" width="50" height="50"></object> */}
                        <LeftSide/>
                    </aside>
                    <div className="content-side">
                        <ContentSide/>
                    </div>
                    <aside className="right-side">

                    </aside>
                </main>
                <footer className="footer"></footer>
            </div>
        </div>
    );
};

export default MainPage;