import React from 'react'

import './Message.css'

const Message = ({ message: { user, text }, name }) => {
    
    let isSentByCurrentUser = false;

    const trimmedName = name.trim().toLowerCase();

    if (user === trimmedName) {
        isSentByCurrentUser = true;
    }

    return (
        isSentByCurrentUser
            ? (
                <div className="d-flex">
                    <p className="text-secondary ml-2 small">{trimmedName}</p>
                    <div>
                        <p className="teal darken-1 roundedy ml-2 p-2 text-white">
                            {text}
                        </p>
                    </div>
                </div>
            )
            :
            (
                <div className="d-flex">

                    <div >
                        <p className="ml-2 p-2 green lighten-5 roundedy">
                            {text}
                        </p>
                    </div>
                    <p className="text-secondary mx-1">{user}</p>
                </div>
            )
    )

}

export default Message;