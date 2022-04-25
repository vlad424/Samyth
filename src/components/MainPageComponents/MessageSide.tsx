import React from 'react';

import './css/MessageSide.css'

const MessageSide = () => {
    let name = "null"; 
    let url = "null";
    const message_text = {
        seen: [
            {text: 'salut, nous sommes le support samyth, il y a une activité suspecte sur votre page. Pendant la semaine, vous ne pourrez pas accéder à notre service. Tout le meilleur support samyth'},
            {text: 'değerlendirilmek üzere gönderdiğiniz mektubunuzu aldık (04.17.2022). Dikkatlice analiz ettik ve uygun bir aday olduğunuzu size bildirmekten memnuniyet duyuyoruz.'}
        ]
    }

    const messages = {
        seen: [
            {content: "", activity: false, logo: url, name: name},
            {content: "123", activity: true, logo: url, name: name}
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
                                <div className="message-meta">
                                    <img src={el.logo} alt='' className='message-logo'/>
                                </div>
                                <div className="message-body">
                                    <div className="message-name">{el.name}</div>
                                    <div className="message-text">{el.content}</div>
                                </div>
                            </div>
                        );
                    }
                    else {
                        return(
                            <div className="message-n">
                                <div className="message-meta">
                                    <img src={el.logo} alt='' className='message-logo'/>
                                </div>
                                <div className="message-body">
                                    <div className="message-name">{el.name}</div>
                                    <div className="message-text">{el.content}</div>
                                </div>
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