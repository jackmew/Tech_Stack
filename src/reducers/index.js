import data from './LibraryList.json';
import { combineReducers } from 'redux'; 

// collect reducers
export default combineReducers({
    // name to show on state
    reducer1: () => { return data; }
});

