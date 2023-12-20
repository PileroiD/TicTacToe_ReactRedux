import "./App.css";
import { useDispatch, useSelector } from "react-redux";

import Block from "./components/block/block";
import { checkWinner } from "./utils/utils";
import {
    selectBlocks,
    selectCurrentSign,
    selectWinner,
} from "./selectors/selectors";
import {
    setBlocks,
    setWinner,
    SET_CURRENT_SIGN,
    START_OVER,
} from "./actions/actions";

function App() {
    const currentSign = useSelector(selectCurrentSign);
    const winner = useSelector(selectWinner);
    const blocks = useSelector(selectBlocks);

    const dispatch = useDispatch();

    let status = winner ? `Winner: ${winner}` : `Next player: ${currentSign}`;

    function startOver() {
        dispatch(START_OVER);
    }

    function handleClick(index) {
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

    return (
        <AppLayout
            status={status}
            startOver={startOver}
            handleClick={handleClick}
        />
    );
}

function AppLayout({ status, startOver, handleClick }) {
    const blocks = useSelector(selectBlocks);

    return (
        <>
            <div className="status">{status}</div>
            <div onClick={() => startOver()} className="start-over">
                Start Over
            </div>
            <div className="App">
                <div className="board">
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

export default App;
