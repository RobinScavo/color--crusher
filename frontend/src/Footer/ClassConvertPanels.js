import React from 'react'

import LeftConvertPanel from './LeftConvertPanel';
import RightConvertPanel from './RightConvertPanel';

import './ClassConvertPanels.css'

class ConvertPanels extends React.Component {
    constructor (props) {
        super(props);
        this.state ={

        }
    }

    render () {
        return (
            <>
                <LeftConvertPanel />
                <RightConvertPanel />
            </>
        )
    }
}

export default ConvertPanels;
