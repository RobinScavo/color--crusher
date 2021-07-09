import React from 'react'

import './Bowl.css'

const Bowl = (props) => {
    return (
    <div className='bowlOutter'  id={props.id}>
        <div className='upperHalf'>
            <div className='innerGold'></div>
        </div>
        <div className='bowl'>

            {props.startBattle &&
                <h2 className='display'>{props.display}</h2>
            }
            {props.scoringModal &&
                <h2 className='display'>{props.display}</h2>
            }
            {!props.startBattle && !props.scoringModal &&
                <h2 className='display'>cc</h2>
            }

            <div className='lowerHalf'></div>
        </div>
    </div>
    )
}

export default Bowl;
