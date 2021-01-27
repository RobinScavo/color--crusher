import React, { useContext } from 'react'

import KarenContext from '../KarenContext';
import Bowl from '../Components/Bowl'
import FooterButtons from './FooterButtons'
import ClassConvertPanels from './ClassConvertPanels'

import './Footer.css'

const Footer = () => {
    const values = useContext(KarenContext);

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
                <ClassConvertPanels />
            }
        </div>
    )
}

export default Footer;
