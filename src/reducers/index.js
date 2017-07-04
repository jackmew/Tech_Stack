import { combineReducers } from 'redux'; // many reducers
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

export default combineReducers({
    // name to show on state
    libraries: LibraryReducer,
    selectedLibraryId: SelectionReducer

});

