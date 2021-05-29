import React, { useContext } from 'react'

import ColorContext from '../../ColorContext';
import Bowl from './Bowl'
import FooterButtons from './FooterButtons'
import ClassConvertPanels from './ClassConvertPanels'

import './Footer.css'

const Footer = () => {
    const values = useContext(ColorContext);

    return (
        <div className ='footerDiv'>
            <FooterButtons />
            {!values.startConvert &&
                <>
                <Bowl id='scoreBowl' display={values.score}/>
                <Bowl id='coinBowl' display={values.coins}/>
                </>
            }
            {values.startConvert &&
                <ClassConvertPanels setCustom={values.setCustomColor}/>
            }
        </div>
    )
}

export default Footer;
