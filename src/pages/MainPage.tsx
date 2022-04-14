import React from 'react';
import eye from "../assets/img/eye.svg";
import { Link } from 'react-router-dom';
import LeftSide from '../components/MainPageComponents/LeftSide';

import '../assets/page_css/MainPage.css'


const MainPage = () => {
    return (
        <div className='MainPage'>
            <div className="wrap">
                <main className="main">
                    <aside className="left-side">
                        {/* <object data={eye} type="image/svg+xml" width="50" height="50"></object> */}
                        <Link to="/etc">
                            <LeftSide/>
                        </Link>
                    </aside>
                    <div className="content-side">

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