import React, { useState } from 'react'

import {
    generateEasyArray,
    generateTriadicArray,
    generateAnalogousArray,
    generateGhostArray,
    generatePastelArray,
    generateCustomArray,
} from './PureFunctions';

import { ModalProvider } from './ModalContext/Modal';
import { Modal } from './ModalContext/Modal';
import Backdrop from './Components/Backdrop/Backdrop'
import ColorContext from './ColorContext';
import MainModal from './Components/Modals/MainModal';
import LoginModal from './Components/Modals/LoginFormModal';
import PlayerPageModal from './Components/Modals/PlayerPageModal';
import MyBioModal from './Components/Modals/MyBioModal';
// import ConvertContainer from './Components/Footer/ConvertContainer';

const ControllerContainer = () => {
    const battleArray = generateAnalogousArray();

    const [colorArray, setColorArray] = useState(battleArray)
    const [colorTargetId, setColorTargetId] = useState('')
    const [colorTarget, setColorTarget] = useState(null)
    const [round, setRound] = useState(0)
    const [score, setScore] = useState(0)
    const [timer, setTimer] = useState(15)
    const [coins, setCoins] = useState(0)
    const [coinArray, setCoinArray] = useState([true, true, true])
    const [gameOn, setGameOn] = useState(false)
    const [windowDisplayed, setWindowDisplayed] = useState(false)
    const [customColor, setCustomColor] = useState('255, 255, 255')

    const [mainModal, setMainModal] = useState(false)
    const [loginModal, setLoginModal] = useState(false)
    const [bioModal, setBioModal] = useState(false)
    const [playerPageModal, setPlayerPageModal] = useState(false)

    const [startBattle, setStartBattle] = useState(false)
    const [startConvert, setStartConvert] = useState(false)

    const [createTriadic, setCreateTriadic] = useState(false)
    const [createAnalogous, setCreateAnalogous] = useState(false)
    const [createPastel, setCreatePastel] = useState(false)
    const [createCustom, setCreateCustom] = useState(false)

    const toggleMainModal = () => setMainModal(!mainModal)
    const toggleLoginModal = () => setLoginModal(!loginModal)
    const toggleBioModal = () => setBioModal(!bioModal)
    const togglePlayerPageModal = () => setPlayerPageModal(!playerPageModal)
    const toggleGameOn = () => setGameOn(false)
    const toggleWindowDisplay = () => setWindowDisplayed(!windowDisplayed)
    const clearRounds = () => setRound(0)

    const toggleCreateAnalogous = () => {
        if (createAnalogous || createPastel || createTriadic) return
        setCreateAnalogous(true)
        clearBoard();
        setTimeout(() => {
            updateColorArrayContext();
            setCreateAnalogous(false)
        }, 1500)
    }

    const toggleCreatePastel = () => {
        if (createAnalogous || createPastel || createTriadic) return
        setCreatePastel(true)
        clearBoard();
        setTimeout(() => {
            updateColorArrayContext();
            setCreatePastel(false)
        }, 1500)
    }

    const toggleCreateTriadic = () => {
        if (createAnalogous || createPastel || createTriadic) return
        setCreateAnalogous(true)
        clearBoard();
        setTimeout(() => {
            updateColorArrayContext();
            setCreateTriadic(false)
        }, 1500)
    }

    const createCustomColor = (custom) => {
        setCreateCustom(true)
        setCustomColor(custom)
        clearBoard();
        setTimeout(() => {
            updateColorArrayContext();
            setCreateCustom(false);
        }, 1500)
    }

    const toggleStartBattle = () => {
        if (startConvert) toggleStartConvert();
        setStartBattle(!startBattle)
    }

    const toggleStartConvert = () => {
        // if (startBattle) toggleStartBattle();
        setStartConvert(!startConvert)
    }

    const startGame = () => {
        clearBoard();
        setTimeout(() => {
            setGameOn(true);
            updateColorArrayContext();
        }, 1100)
    }

    const removeCoin = () => {
        let tempArray = [];
        if (coinArray[0]) {
            tempArray = [false, true, true]
        } else if (coinArray[1]) {
            tempArray = [false, false, true]
        } else {
            tempArray = [false, false, false]
        }
        setCoinArray(tempArray)
    }

    const correctGuess = () => {
        let coinCoint = coins;

        if (startBattle) {
            for (let coin of coinArray) {
                if (coin) coinCoint++
            }

            setGameOn(false);
            setCoins(coinCoint)
        }
        clearBoard()
        setTimeout(() => {
            updateColorArrayContext();
        }, 1500)
    }

    const clearBoard = () => {
        let clearArray = [];
        for (let i = 0; i < 6; i++) {
            clearArray.push({ background:
                `radial-gradient(circle at 100px 100px, rgba(255, 255, 255, 0.1), #000)`
            })
        }
        setColorArray(clearArray);
    }

    const updateTimer = (seconds) => {
        setTimer(seconds);
        setScore(score + seconds)
    }

    const updateColorArrayContext = () => {
        let randomSix = Math.floor(Math.random() * 6)
        let targetArray = [
            'colorOne',
            'colorTwo',
            'colorThree',
            'colorFour',
            'colorFive',
            'colorSix'
        ]
        let targetId = targetArray[randomSix];

        //build appropriate color value array
        let arr = [];
        console.log(gameOn, startBattle )
        if (startConvert && !createTriadic &&
           !createAnalogous && !createPastel) {
               arr = generateGhostArray();
           }
        if (startConvert && createTriadic &&
           !createAnalogous && !createPastel) {
               arr = generateTriadicArray();
           }
        if (startConvert && !createTriadic &&
           createAnalogous && !createPastel) {
               arr = generateAnalogousArray();
           }
        if (startConvert && !createTriadic &&
           !createAnalogous && createPastel) {
               arr = generatePastelArray();
           }
        if (startConvert && createCustom) {
            arr = generateCustomArray(customColor);
        }
        console.log('ZZZZZZZZZ', startBattle)
        if (startBattle) {
            round <= 2
                ? arr = generateEasyArray()
                : arr = generateTriadicArray()
        }

        //prep target value for display (refactor this with substr)
        console.log('uuuuuuuuuu', arr, startBattle, startConvert)
        const targetColor = arr[randomSix];
        const firstSlice = (targetColor.background.slice(42));
        const colorTarget = (firstSlice.slice(0, firstSlice.length -7));

        setCoinArray([true, true, true])
        setColorArray(arr)
        setRound(round +1)
        setColorTargetId(targetId);
        setGameOn(true);
        setColorTarget(colorTarget)
    }

    return (
        <div className='gameBoardDiv'>
            <ColorContext.Provider
                value={{
                    colorArray,
                    colorTargetId,
                    colorTarget,
                    round,
                    score,
                    timer,
                    coins,
                    coinArray,
                    gameOn,
                    windowDisplayed,
                    customColor,
                    mainModal,
                    loginModal,
                    bioModal,
                    playerPageModal,
                    startBattle,
                    startConvert,
                    createTriadic,
                    createAnalogous,
                    createPastel,
                    createCustom,
                    toggleMainModal,
                    toggleLoginModal,
                    toggleBioModal,
                    togglePlayerPageModal,
                    toggleWindowDisplay,
                    toggleGameOn,
                    toggleStartBattle,
                    toggleStartConvert,
                    toggleCreateTriadic,
                    toggleCreateAnalogous,
                    toggleCreatePastel,
                    createCustomColor,
                    startGame,
                    correctGuess,
                    updateTimer,
                    removeCoin,
                    clearRounds
                }}>
                <ModalProvider>
                    <Backdrop />

                    {/* Modal Control */}
                    {mainModal &&
                        <Modal >
                            <MainModal />
                        </Modal>
                    }
                    {loginModal &&
                        <Modal>
                            <LoginModal />
                        </Modal>
                    }
                    {bioModal &&
                        <Modal>
                            <MyBioModal />
                        </Modal>
                    }
                    {playerPageModal &&
                        <Modal>
                            <PlayerPageModal />
                        </Modal>
                    }
                </ModalProvider>
            </ColorContext.Provider>
        </div>
    )
}

export default ControllerContainer;
