import React from 'react';

import './css/MessageSide.css'

const MessageSide = () => {
    const messages = {
        seen: [
            {content: "salut, nous sommes le support samyth, il y a une activité suspecte sur votre page. Pendant la semaine, vous ne pourrez pas accéder à notre service. Tout le meilleur support samyth", activity: false},
            {content: "değerlendirilmek üzere gönderdiğiniz mektubunuzu aldık (04.17.2022). Dikkatlice analiz ettik ve uygun bir aday olduğunuzu size bildirmekten memnuniyet duyuyoruz.", activity: true}
        ]
    }

    return (
        <div className='main-chat-side'>
            <div className="chat-header">
                upss... nothing
            </div>
            <div className="chat-content">
                {messages.seen.map(el => {
                    if(el.activity) {
                        return(
                            <div className="message-seen">
                                {el.content}
                            </div>
                        );
                    }
                    else {
                        return(
                            <div className="message-n">
                                {el.content}
                            </div>
                        );
                    }
                })}
            </div>
            <div className="chat-footer"></div>
        </div>
    );
};

export default MessageSide;