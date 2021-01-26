import React, { useContext } from 'react'

import './Footer.css'
import KarenContext from '../KarenContext';
import Bowl from '../Components/Bowl'
import FooterButtons from './FooterButtons'
import LeftConvertPanel from './LeftConvertPanel'
import RightConvertPanel from './RightConvertPanel'

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
                <>
                <LeftConvertPanel />
                <RightConvertPanel />
                </>
            }
        </div>
    )
}

export default Footer;
