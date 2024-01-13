// import "./App.css";
import { connect } from "react-redux";
import { Component } from "react";

import Block from "./components/block/block";
import { checkWinner } from "./utils/utils";
import {
    setBlocks,
    setWinner,
    SET_CURRENT_SIGN,
    START_OVER,
} from "./actions/actions";

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.startOver = this.startOver.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    startOver() {
        this.props.dispatch(START_OVER);
    }

    handleClick(index) {
        const { blocks, currentSign, winner, dispatch } = this.props;

        if (!blocks[index] && !winner) {
            const newBlocks = [...blocks];
            newBlocks[index] = currentSign;
            dispatch(setBlocks(newBlocks));

            const winnerResult = checkWinner(newBlocks);
            if (winnerResult) {
                dispatch(setWinner(winnerResult));
            } else {
                dispatch(SET_CURRENT_SIGN);
            }
        }
    }

    render() {
        this.status = this.props.winner
            ? `Winner: ${this.props.winner}`
            : `Next player: ${this.props.currentSign}`;

        return (
            <AppLayout
                status={this.status}
                startOver={this.startOver}
                handleClick={this.handleClick}
                blocks={this.props.blocks}
            />
        );
    }
}

class AppLayout extends Component {
    render() {
        const { status, startOver, handleClick, blocks } = this.props;

        return (
            <>
                <div className="text-center mt-12 text-4xl text-white">
                    {status}
                </div>
                <div onClick={() => startOver()} className="start-over">
                    Start Over
                </div>
                <div className="App">
                    <div className="flex flex-wrap">
                        {blocks.map((value, index) => (
                            <Block
                                key={index}
                                value={value}
                                onClick={() => handleClick(index)}
                            />
                        ))}
                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    currentSign: state.currentSign,
    winner: state.winner,
    blocks: state.blocks,
});

const App = connect(mapStateToProps)(AppContainer);

export default App;
