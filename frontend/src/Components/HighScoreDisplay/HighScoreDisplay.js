import React, { useContext }  from 'react';

import UserContext from '../../context/UserContext';

import './HighScoreDisplay.css'

const HighScoreDisplay = (props) => {
  const { currentPlayer, players } = useContext(UserContext);

    return (
        <div id={props.id} className='highScoreDiv'>
            <h1 className='highScoreText'>High Scores</h1>
            <table className='highScoreTable'>
                {players.map(player => (
                    <tbody key={player.key.toString()}>
                        <tr
                            className={`tableRow ${player.key === currentPlayer.key ? 'highlight' : ''} `}
                            // ref={player.key === currentPlayer.key ? {playerRef} : null}
                        >
                            <th className='rankColumn'>
                                <div className='rankBling'>{players.indexOf(player)+1}</div>
                            </th>
                            <th className='userColumn'>{player.name}</th>
                            <th className='scoreColumn'>{player.score}</th>
                        </tr>

                    </tbody>
                ))}
            </table>
        </div>
    )
}



export default HighScoreDisplay;
