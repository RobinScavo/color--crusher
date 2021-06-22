import React from 'react'

import {
    generateEasyArray,
    generateTriadicArray,
    generateAnalogousArray,
    generateGhostArray,
    generatePastelArray,
    generateCustomArray,
} from './PureFunctions';

import Backdrop from './Components/Backdrop/Backdrop'
import ColorContext from './ColorContext';
import MainModal from './Components/Modals/MainModal';
import LoginModal from './Components/Modals/LoginFormModal';
import PlayerPageModal from './Components/Modals/PlayerPageModal';
import MyBioModal from './Components/Modals/MyBioModal';
import BattleInstructionModal from './Components/Modals/BattleInstructionModal'
import ConvertInstructionModal from './Components/Modals/ConvertInstructionModal'
import ScoringModal from './Components/Modals/ScoringModal'
import { Modal } from './ModalContext/Modal';
import { ModalProvider } from './ModalContext/Modal';

class Controller extends React.Component {
    constructor (props) {
        const battleArray = generateAnalogousArray();

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
            windowDisplayed: false,
            customDisplayed: false,
            customColor: '255, 255, 255',

            onLogin: props.onLogin,
            MainModal: false,
            loginModal: false,
            bioModal: false,
            playerPageModal: false,
            battleInstructionModal: false,
            convertInstructionModal: false,
            scoringModal: false,
            repeatRender: true,

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
            toggleBattleInstructionModal: this.toggleBattleInstructionModal,
            toggleConvertInstructionModal: this.toggleConvertInstructionModal,
            toggleScoringModal: this.toggleScoringModal,

            toggleWindowDisplay: this.toggleWindowDisplay,

            toggleGameOn: this.toggleGameOn,
            toggleStartBattle: this.toggleStartBattle,
            toggleStartConvert: this.toggleStartConvert,
            toggleRepeatRender: this.toggleRepeatRender,

            toggleCreateTriadic: this.toggleCreateTriadic,
            toggleCreateAnalogous: this.toggleCreateAnalogous,
            toggleCreatePastel: this.toggleCreatePastel,
            setCustomColor: this.setCustomColor,

            startGame: this.startGame,
            correctGuess: this.correctGuess,
            updateTimer: this.updateTimerContext,
            removeCoin: this.removeCoin,
            clearRounds: this.clearRounds,
            newGame: this.newGame
        }
    }

    componentDidMount() {this.toggleCreateAnalogous()}

    toggleMainModal = () => {
        this.setState({
            repeatRender: false,
            createAnalogous: false,
            MainModal: !this.state.MainModal,
            round: 0,
            coins: 0,
            score: 0,
            timer: 15
        })
    }

    toggleLoginModal = () => this.setState({ loginModal: !this.state.loginModal })
    toggleBioModal = () => this.setState({ bioModal: !this.state.bioModal })
    togglePlayerPageModal = () => this.setState({ playerPageModal: !this.state.playerPageModal })
    toggleBattleInstructionModal = () => this.setState({ battleInstructionModal: !this.state.battleInstructionModal })
    toggleConvertInstructionModal = () => this.setState({ convertInstructionModal: !this.state.convertInstructionModal })
    toggleScoringModal = () => this.setState({ scoringModal: !this.state.scoringModal});

    toggleGameOn = () => this.setState({ gameOn: false })
    toggleRepeatRender = () => this.setState({ repeatRender: !this.state.repeatRender })
    toggleWindowDisplay = () => this.setState({ windowDisplayed: !this.state.windowDisplayed})
    toggleCustomDisplay = () => this.setState({ customDisplayed: !this.state.customDisplayed})
    clearRounds = () => this.setState({ round: 0})

    toggleCreateAnalogous = () => {
        this.setState({ createAnalogous: true});
        this.clearBoard();
        setTimeout(() => {
            this.updateColorArrayContext();
            if (!this.state.repeatRender) {
                this.setState({ createAnalogous: false})
            }
        }, 1100)
    }

    toggleCreatePastel = () => {
        this.setState({ createPastel: true});
        this.clearBoard();
        setTimeout(() => {
            this.updateColorArrayContext();
            if (!this.state.repeatRender) {
                this.setState({ createPastel: false})
            }
        }, 1100)
    }

    toggleCreateTriadic = () => {
        this.setState({ createTriadic: true});
        this.clearBoard();
        setTimeout(() => {
            this.updateColorArrayContext();
            if (!this.state.repeatRender) {
                this.setState({ createTriadic: false});
            }
        }, 1100)
    }

    setCustomColor = (custom) => {
        this.setState({
            createCustom: true,
            customColor: custom,
        });
        this.clearBoard();
        setTimeout(() => {
            this.updateColorArrayContext();
            this.setState({
                customDisplayed: true,
                createCustom: false
            });
        }, 1100)
        setTimeout(() => {
            this.setState({
                customDisplayed: false
            })
        }, 3100)
    }

    toggleStartBattle = () => {
        if (this.state.startConvert) this.toggleStartConvert();
        this.setState({ startBattle: !this.state.startBattle });
    }

    toggleStartConvert = () => {
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

            this.setState({ gameOn: false });
            setTimeout(() => {
                this.setState({ coins: coinCount })
            }, 2700)
        }

        this.clearBoard();
        if (this.state.round < 6) {
            setTimeout(() => {
                this.updateColorArrayContext();
            }, 1500)
        } else {
            this.setState({
                gameOn: false,
                startBattle: false
            })
            setTimeout(() => {
                this.toggleScoringModal()
            }, 2000)
        }
    }

    newGame = () => {
        this.setState({
            round: 0,
            coins: 0,
            score: 0,
            timer: 15,
            coinArray: [true, true, true]
        })
        this.toggleStartBattle();
        this.startGame();
    }

    clearBoard = () => {
        let clearArray = []
        for (let i = 0; i < 6; i++) {
            clearArray.push({ background:
                `radial-gradient(circle at 100px 100px, rgb(255, 255, 255, 0.1), #000)`
            })
        }
        this.setState({
            colorArray: clearArray,
        })
    }

    updateTimerContext = (seconds) => {
        this.setState({ timer: seconds })
        setTimeout(() => {
            this.setState({ score: this.state.score + seconds })
        }, 1700)
    }

    updateColorArrayContext = () => {
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

        if (this.state.startConvert &&
            !this.state.createTriadic &&
            !this.state.createAnalogous &&
            !this.state.createPastel)
                arr = generateGhostArray();

        if (this.state.startConvert &&
            this.state.createTriadic &&
            !this.state.createAnalogous &&
            !this.state.createPastel)
                arr = generateTriadicArray();

        if (this.state.startConvert &&
            this.state.createAnalogous &&
            !this.state.createTriadic &&
            !this.state.createPastel)
                arr = generateAnalogousArray();

        if (this.state.startConvert &&
            this.state.createPastel &&
            !this.state.createTriadic &&
            !this.state.createAnalogous)
                arr = generatePastelArray();

        if (this.state.startConvert &&
            this.state.createCustom)
                arr = generateCustomArray(this.state.customColor);

        if (this.state.startBattle) {
            this.state.round <= 2
                ? arr = generateEasyArray()
                : arr = generateTriadicArray()
        }


        if (!this.state.startBattle &&
            !this.state.startConvert) {
                arr = generateAnalogousArray()
        }


        if (this.state.startBattle) {
            //display target value
            const targetColor = arr[randomSix]
            const firstSlice = (targetColor.background.slice(42))
            let colorTarget = (firstSlice.slice(0, firstSlice.length -7))

            this.setState({
                coinArray: [true, true, true],
                round: this.state.round + 1,
                colorTargetId: targetId,
                colorTarget: colorTarget,
                gameOn: true,
            })
        }

        this.setState({
            colorArray: arr,
        });

        if (this.state.repeatRender) {
            setTimeout(() => {
                this.clearBoard();
            }, 1100)
            setTimeout(() => {
                this.updateColorArrayContext();
            }, 2200)
        }
    }

    render() {
        return (
            <div className='gameBoardDiv' value={this.state}>
                <ColorContext.Provider value={this.state}>
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
                        {this.state.battleInstructionModal &&
                            <Modal>
                                <BattleInstructionModal />
                            </Modal>
                        }
                        {this.state.convertInstructionModal &&
                            <Modal>
                                <ConvertInstructionModal />
                            </Modal>
                        }
                        {this.state.scoringModal &&
                            <Modal >
                                <ScoringModal />
                            </Modal>
                        }
                    </ModalProvider>
                </ColorContext.Provider>
            </div>
        )
    }
}

export default Controller;
