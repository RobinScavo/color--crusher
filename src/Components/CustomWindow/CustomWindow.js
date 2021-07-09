import React from 'react'

import '../Window/Window.css'

const Window = (props) => {
    const customDisplay = props.customDisplayed;
    let customVisibility = false;
    customVisibility = customDisplay ? 'windowVisible' : 'windowHidden';

    return (
        <div className={`windowDiv ${customVisibility}`}>
            <div className={`window windowOne  ${customVisibility}`}>
                <div>RGB</div>
                <div>{props.customColor}</div>
            </div>
        </div>
    )
}


export default Window;
