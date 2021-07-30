import React   from 'react';

// import UserContext from '../../context/UserContext';

import './HighScoreDisplay.css'

const HighScoreDisplay = (props) => {
//   const { currentPlayer, players } = useContext(UserContext);
const players = [
    { key:'MdIDvhJ6IlROB9TgXVG',name:'Oakley',email:'oakley@gmail.com',score:97 },
    { key:'MdLD74bUbdg5ZD5AK9B',name:'Player',email:'player@gmail.com',score:91 },
    { key:'MdLGZgeVyxEqxvFEWKs',name:'Elaine',email:'elaine@gmail.com',score:90 },
    { key:'MdLIZ23ELakFJZW1aHL',name:'DAWSEN',email:'DAWSEN@gmail.com',score:88 },
    { key:'MdLM-uniwaudLxxv2_S',name:'Shelby',email:'shelby@gmail.com',score:88 },
    { key:'MdLMOYoLcV5JZyydf9J',name:'Michelle',email:'michelle@gmail.com',score:83 },
    { key:'MdLMlFNop0MxVmieGwM',name:'Angela',email:'angela@gmail.com',score:79 },
    { key:'MdLNBX_-Yubf7b1fRNe',name:'Guest',email:'guest@gmail.com',score:70 },
    { key:'MdQbunUk3PGGhkmONQj',name:'Robin',email:'robin@gmail.com',score:69 }
]

    return (
        <div id={props.id} className='highScoreDiv'>
            <h1 className='highScoreText'>High Scores</h1>
            <table className='highScoreTable'>
                {players.map(player => (
                    <tbody key={player.key.toString()}>
                        <tr
                            className='tableRow'
                            // className={`tableRow ${player.key === currentPlayer.key ? 'highlight' : ''} `}
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
