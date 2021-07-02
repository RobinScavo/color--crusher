import React, {useContext } from 'react'

import ColorContext from '../../ColorContext'

import '../Window/Window.css'

const Window = () => {
    const values = useContext(ColorContext);

    const customDisplay = values.customDisplayed;
    let customVisibility = false;
    customVisibility = customDisplay ? 'windowVisible' : 'windowHidden';

    return (
        <div className={`windowDiv ${customVisibility}`}>
            <div className={`window windowOne  ${customVisibility}`}>
                <div>RGB</div>
                <div>{values.customColor}</div>
            </div>
        </div>
    )
}


export default Window;
