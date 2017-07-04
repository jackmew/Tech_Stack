import React, { Component } from 'react';
import { View, Text }  from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';

class LibraryList extends Component {
    render() {
        return(
            <View>
                <Text>LibraryList</Text>
            </View>
        );
    }
}
// Take globla state to local component in props
const mapStateToProps = state => {
    return { props: state.attribute };
}; 

export default connect(mapStateToProps, actions)(LibraryList);