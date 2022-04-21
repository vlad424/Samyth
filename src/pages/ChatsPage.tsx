import React from 'react';

import LeftSide from '../components/MainPageComponents/LeftSide';

import '../assets/page_css/ChatsPage.css' 
import MessageSide from '../components/MainPageComponents/MessageSide';

const ChatsPage = () => {
    return (
        <div className='ChatsPage'>
            <div className="wrap">
                <main className="main">
                    <aside className="left-side">
                        {/* <object data={eye} type="image/svg+xml" width="50" height="50"></object> */}
                        <LeftSide/>
                    </aside>
                    <div className="content-side">
                        <MessageSide/>
                    </div>
                    <aside className="right-side">

                    </aside>
                </main>
                <footer className="footer"></footer>
            </div>
        </div>
    );
};

export default ChatsPage;