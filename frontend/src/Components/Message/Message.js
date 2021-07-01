import React from 'react'

import './Message.css'

const Message = ({ type }) => {
    const messages = {
        saved: 'Welcome New Player!',
        updated: 'Player information updated.',
        deleted: 'Player deleted'
    }

    return (
        <div className='messageDiv'>
            <p className='messageContainer'>
                <strong>{messages[type]}</strong>
            </p>
        </div>
    )
}

export default Message;
