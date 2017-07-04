import React from 'react';
import { View } from 'react-native';

import { Provider } from 'react-redux'; // communication between react & redux
import { createStore } from 'redux';
import reducers from './reducers'; // produce our application state

import { Header } from './components/common';
import LibraryList from './components/LibraryList';

const App = () => {
    return (
        // only one child allowed, provider communicate with react & redux
        <Provider store={createStore(reducers)}>
            <View style={{ flex: 1 }}>
                <Header headerText='Tech Stack' />
                <LibraryList />
            </View>
        </Provider>
    );
};
export default App;