import React from 'react'

import './Message.css'

const Message = ({ type }) => {
    const messages = {
        saved: 'Welcome New Player!',
        updated: 'Player information updated.',
        deleted: 'Player deleted.',
        mismatched: 'Email confirmation must match.',
        improperlyNamed: 'Name must be 3 to 15 characters.',
        improperlyPassworded: 'Password must be 6 to 15 characters.',
        improperlyEmailed: 'Must be a valid email.',
        invalidCredentialed: 'Invalid Credentials.',
        signupFailed: 'Sign up failure.',
        logoutFailed: 'Log out failure.',
        cannotEdit: 'Player and Guest cannot be modified'

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
