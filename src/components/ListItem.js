import React, { Component } from 'react';
import { TouchableWithoutFeedback, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
    renderDescription() {
        const { library, expanded } = this.props;
        if(expanded) {
            return (
                <CardSection>
                    <Text style={{ color: 'blue' }}>{library.description}</Text>
                </CardSection>                
            );
        }
    }
    render() {
        const { title, id } = this.props.library;
        return (
            <TouchableWithoutFeedback onPress={() => {this.props.selectLibrary(id)}}>
                <View>
                    <CardSection>
                        <Text style={styles.titleStyle}>{title}</Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}
const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
}
const mapStateToProps = (state, ownProps) => {
    const expanded = ownProps.library.id === state.selectLibraryId;
    return { expanded };
};
export default connect(mapStateToProps, actions)(ListItem);