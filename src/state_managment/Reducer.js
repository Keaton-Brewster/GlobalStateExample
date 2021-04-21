function Reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return {
                count: state.count + 1
            };
        case 'decrement':
            return {
                count: state.count - 1
            };
        case 'inc_100':
            return {
                count: state.count + 100
            };
        case 'dec_100':
            return {
                count: state.count - 100
            };
        default:
            throw new Error();
    }
}

export default Reducer;










