import React from 'react'

import {
    generateEasyColors,
    HSLtoRGB,
    generateBattleColors,
    generateZenColors,
    generateGhostColors,
    generatePastelColors,
    generateCustomColors,
} from './PureFunctions';

import Backdrop from './Components/Backdrop/Backdrop'
import KarenContext from './KarenContext';
import MainModal from './Components/Modals/MainModal';
import LoginModal from './Components/Modals/LoginFormModal';
import PlayerPageModal from './Components/Modals/PlayerPageModal';
import MyBioModal from './Components/Modals/MyBioModal';
import { Modal } from './ModalContext/Modal';
import { ModalProvider } from './ModalContext/Modal';

class Controller extends React.Component {
    constructor (props) {
        const battleArray = generateBattleColors();

        super (props);
        this.state = {
            colorArray: battleArray,
            colorTargetId: '',
            colorTarget: null,
            round: 0,
            score: 0,
            timer: 15,
            coins: 0,
            coinArray: [true, true, true],
            gameOn: false,
            // zenKernel: '',
            // kernelVisibility: false,
            // zenObject: zenObject,
            // mutableZen: zenObject,
            windowDisplayed: false,
            customColor: '255, 255, 255',

            MainModal: false,
            loginModal: false,
            bioModal: false,
            playerPageModal: false,

            // startZen: false,
            startBattle: false,
            startConvert: false,

            createTriadic: false,
            createAnalogous: false,
            createPastel: false,
            createCustom: false,

            toggleMainModal: this.toggleMainModal,
            toggleLoginModal: this.toggleLoginModal,
            toggleBioModal: this.toggleBioModal,
            togglePlayerPageModal: this.togglePlayerPageModal,
            toggleWindowDisplay: this.toggleWindowDisplay,

            toggleGameOn: this.toggleGameOn,
            // toggleStartZen: this.toggleStartZen,
            toggleStartBattle: this.toggleStartBattle,
            toggleStartConvert: this.toggleStartConvert,

            toggleCreateTriadic: this.toggleCreateTriadic,
            toggleCreateAnalogous: this.toggleCreateAnalogous,
            toggleCreatePastel: this.toggleCreatePastel,
            setCustomColor: this.setCustomColor,

            startGame: this.startGame,
            correctGuess: this.correctGuess,
            updateTimer: this.updateTimerContext,
            removeCoin: this.removeCoin,
            clearRounds: this.clearRounds,
        }
    }

    toggleMainModal = () => this.setState({ MainModal: !this.state.MainModal })
    toggleLoginModal = () => this.setState({ loginModal: !this.state.loginModal })
    toggleBioModal = () => this.setState({ bioModal: !this.state.bioModal })
    togglePlayerPageModal = () => this.setState({ playerPageModal: !this.state.playerPageModal })
    toggleGameOn = () => this.setState({ gameOn: false })
    toggleWindowDisplay = () => this.setState({ windowDisplayed: !this.state.windowDisplayed})
    clearRounds = () => this.setState({ round: 0})

    toggleCreateAnalogous = () => {
        if (this.state.createAnalogous || this.state.createPastel || this.state.createTriadic) return;
        this.setState({ createAnalogous: true});
        let delayOrNot = 0;
        (this.state.colorArray[0].class === 'blurred')
            ? delayOrNot = 0
            : delayOrNot = 1500
        this.clearBoard();
        setTimeout(() => {
            this.updateColorArrayContext();
            this.setState({ createAnalogous: false})
        }, delayOrNot)
    }

    toggleCreatePastel = () => {
        if (this.state.createAnalogous || this.state.createPastel || this.state.createTriadic) return;
        this.setState({ createPastel: true});
        let delayOrNot = 0;
        (this.state.colorArray[0].class === 'blurred')
            ? delayOrNot = 0
            : delayOrNot = 1500
        this.clearBoard();
        setTimeout(() => {
            this.updateColorArrayContext();
            this.setState({ createPastel: false})
        }, delayOrNot)
    }

    toggleCreateTriadic = () => {
        if (this.state.createAnalogous || this.state.createPastel || this.state.createTriadic) return;
        this.setState({ createTriadic: true});
        let delayOrNot = 0;
        (this.state.colorArray[0].class === 'blurred')
            ? delayOrNot = 0
            : delayOrNot = 1500
        this.clearBoard();
        setTimeout(() => {
            this.updateColorArrayContext();
            this.setState({ createTriadic: false});
        }, delayOrNot)
    }

    setCustomColor = (custom) => {
        // if (this.state.createAnalogous || this.state.createPastel || this.state.createTriadic) return;
        this.setState({
            createCustom: true,
            customColor: custom,
        });
        let delayOrNot = 0;
        (this.state.colorArray[0].class === 'blurred')
            ? delayOrNot = 0
            : delayOrNot = 1500
        this.clearBoard();
        setTimeout(() => {
            this.updateColorArrayContext();
            this.setState({ createCustom: false});
        }, delayOrNot)
    }

    // toggleStartZen = () => {
    //     if (this.state.startBattle) this.toggleStartBattle();
    //     if (this.state.startConvert) this.toggleStartConvert();
    //     this.setState({ startZen: !this.state.startZen });
    // }
    toggleStartBattle = () => {
        // if (this.state.startZen) this.toggleStartZen();
        if (this.state.startConvert) this.toggleStartConvert();
        this.setState({ startBattle: !this.state.startBattle });
    }

    toggleStartConvert = () => {
        // if (this.state.startZen) this.toggleStartZen();
        if (this.state.startBattle) this.toggleStartBattle();
        this.setState({ startConvert: !this.state.startConvert});
    }

    startGame = () => {
        this.clearBoard();
        this.timeout = setTimeout(() => {
            this.setState({ gameOn: true })
            this.updateColorArrayContext()
        }, 1100)
    }

    removeCoin = () => {
        let tempArray = [];
        if (this.state.coinArray[0]) {
            tempArray = [false, true, true]
        } else if (this.state.coinArray[1]) {
            tempArray = [false, false, true]
        } else {
            tempArray = [false, false, false]
        }
        this.setState ({ coinArray: tempArray })
    }

    correctGuess = () => {
        let coinCount = this.state.coins;

        if (this.state.startBattle) {
            for (let coin of this.state.coinArray) {
                if (coin) coinCount++
            }

            this.setState({
                gameOn: false,
                coins: coinCount,
             });
        }

        this.clearBoard();
        setTimeout(() => {
            this.updateColorArrayContext();
        }, 1500)
    }

    clearBoard = () => {
        let clearArray = []
        for (let i = 0; i < 6; i++) {
            clearArray.push({ background:
                `radial-gradient(circle at 100px 100px, rgba(255, 255, 255, 0.1), #000)`
            })
        }
        this.setState({
            colorArray: clearArray,
        })
    }

    updateTimerContext = (seconds) => {
        this.setState({
            timer: seconds,
            score: this.state.score + seconds,
        })
    }

    updateColorArrayContext = () => {
        console.log('update')
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
        let arr = [];

        if (this.state.startConvert && !this.state.createTriadic && !this.state.createAnalogous && !this.state.createPastel)
            arr = generateGhostColors();
        if (this.state.startConvert && this.state.createTriadic && !this.state.createAnalogous && !this.state.createPastel)
            arr = generateBattleColors();
        if (this.state.startConvert && !this.state.createTriadic && this.state.createAnalogous && !this.state.createPastel)
            arr = generateZenColors();
        if (this.state.startConvert && !this.state.createTriadic && !this.state.createAnalogous && this.state.createPastel)
            arr = generatePastelColors();
        if (this.state.startConvert && this.state.createCustom)
            arr = generateCustomColors(this.state.customColor);

        if (this.state.startBattle) {
            this.state.round <= 2
                ? arr = generateEasyColors()
                : arr = generateBattleColors()
            }

        //display target value
        const targetColor = arr[randomSix]
        const firstSlice = (targetColor.background.slice(42))
        let colorTarget = (firstSlice.slice(0, firstSlice.length -7))

        this.setState({
            coinArray: [true, true, true],
            colorArray: arr,
            round: this.state.round + 1,
            colorTargetId: targetId,
            gameOn: true,
            colorTarget: colorTarget,
        })
    }

    render() {
        return (
            <div className='gameBoardDiv' value={this.state}>
                <KarenContext.Provider value={this.state}>
                    <ModalProvider>
                        <Backdrop />

                        {/* Modal Control */}
                        {this.state.MainModal &&
                            <Modal >
                                <MainModal />
                            </Modal>
                        }
                        {this.state.loginModal &&
                            <Modal>
                                <LoginModal />
                            </Modal>
                        }
                        {this.state.bioModal &&
                            <Modal>
                                <MyBioModal />
                            </Modal>
                        }
                        {this.state.playerPageModal &&
                            <Modal>
                                <PlayerPageModal />
                            </Modal>
                        }
                    </ModalProvider>
                </KarenContext.Provider>
            </div>
        )
    }
}

export default Controller;
