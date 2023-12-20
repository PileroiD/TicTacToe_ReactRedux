const initialState = {
    currentSign: "X",
    winner: null,
    blocks: Array(9).fill(null),
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_CURRENT_SIGN":
            return {
                ...state,
                currentSign: state.currentSign === "X" ? "O" : "X",
            };
        case "SET_BLOCKS":
            return {
                ...state,
                blocks: action.payload.newBlocks,
            };

        case "SET_WINNER":
            return {
                ...state,
                winner: action.payload.winner,
            };
        case "START_OVER":
            return {
                ...initialState,
            };
        default:
            return state;
    }
};

export default appReducer;
