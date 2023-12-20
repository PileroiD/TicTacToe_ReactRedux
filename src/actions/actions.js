export const START_OVER = { type: "START_OVER" };
export const SET_CURRENT_SIGN = { type: "SET_CURRENT_SIGN" };

export const setBlocks = (newBlocks) => {
    return {
        type: "SET_BLOCKS",
        payload: { newBlocks },
    };
};

export const setWinner = (winnerResult) => {
    return {
        type: "SET_WINNER",
        payload: {
            winner: winnerResult,
        },
    };
};
