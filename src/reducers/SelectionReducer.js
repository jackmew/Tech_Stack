//state: last time state
// if state is undefined, state = null
export default (state = null, action) => {
    switch (action.type) {
        case 'select_library':
            return action.payload;
        default: 
            return state;
    }
};