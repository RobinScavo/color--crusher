import React, { useContext } from 'react'

import ColorContext from '../../context/ColorContext';
import Bowl from './Bowl'
import FooterButtons from './FooterButtons'
import ConvertContainer from './ConvertContainer'

import './Footer.css'

const Footer = () => {
    const values = useContext(ColorContext);

    return (
        <div className ='footerDiv'>
            <FooterButtons
                startBattle={values.startBattle}
                startConvert={values.startConvert}
                toggleStartBattle={values.toggleStartBattle}
                toggleStartConvert={values.toggleStartConvert}
                clearRounds={values.clearRounds}
                toggleGameOn={values.toggleGameOn}
                toggleWindowDisplay={values.toggleWindowDisplay}
            />

            {!values.startConvert && !values.scoringModal &&
                <>
                <Bowl
                    id='scoreBowl'
                    display={values.score}
                    startBattle={values.startBattle}
                    scoringModal={values.scoringModal}
                />

                <Bowl
                    id='coinBowl'
                    display={values.coins}
                    startBattle={values.startBattle}
                    scoringModal={values.scoringModal}
                />
                </>
            }

            {values.startConvert &&
                <ConvertContainer />
            }
        </div>
    )
}

export default Footer;
