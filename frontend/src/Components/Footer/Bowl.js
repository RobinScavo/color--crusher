import React, { useContext } from 'react'

import './Bowl.css'
import ColorContext from '../../ColorContext'

const Bowl = (props) => {
    const values = useContext(ColorContext);

    return (
    <div className='bowlOutter'  id={props.id}>
        <div className='upperHalf'>
            <div className='innerGold'></div>
        </div>
        <div className='bowl'>

            {values.startBattle &&
                <h2 className='display'>{props.display}</h2>
            }
            {values.scoringModal &&
                <h2 className='display'>{props.display}</h2>
            }
            {!values.startBattle && !values.scoringModal &&
                <h2 className='display'>cc</h2>
            }

            <div className='lowerHalf'></div>
        </div>
    </div>
    )
}

export default Bowl;
