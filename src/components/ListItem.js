import React, { Component } from 'react';
import { 
    Text, 
    View, 
    TouchableWithoutFeedback,
    LayoutAnimation } from 'react-native';
import { connect }  from 'react-redux';
import { CardSection } from './common';
// import all exported actions 
import * as actions from '../actions';

class ListItem extends Component {
    // componentWillUpdate() is invoked immediately before rendering when new props or state are being received.
    // 在re-render之前，都會先call，所有動作會嘗試以animation方式呈現
    componentWillUpdate() {
        // 超潮
        LayoutAnimation.spring();
    }
    renderDescription() {
        // const { library, selectedLibraryId } = this.props;

        // if(library.id === selectedLibraryId) {
        //     return (
        //         <Text>{this.props.library.description}</Text>
        //     );
        // }

        const { library, expanded } = this.props;

        if(expanded) {
            return (
                <CardSection>
                    <Text style={{ flex: 1 }}>{library.description}</Text>
                </CardSection>
            );
        }
    }
    render() {
        const { titleStyle } = styles;
        const { id, title } = this.props.library;
        console.log(this.props);
        return (
            // TouchableWithoutFeedback 內一定要有一個<View/>
            <TouchableWithoutFeedback
                onPress={() => this.props.selectLibrary(id) }>
                <View>
                    <CardSection>
                        <Text style={titleStyle}>
                            {title}
                        </Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle : {
        fontSize: 18,
        paddingLeft: 15
    }
}
// 將判斷邏輯放在這
// 因為ListItem不需要知道selectedLibraryId
// 只需要知道是否expanded
// map App level state to component props
// whenever state change will call mapStateToProps()
const mapStateToProps = (state, ownProps) => {
                // props: state => 將state map到 props
    // return { selectedLibraryId: state.selectedLibraryId } ;

    const expanded = state.selectedLibraryId === ownProps.library.id;
    return { expanded };
};


// null: mapStateToProps
// 將actinos變成props，mapStateToProps時，才轉成props．當丟入action到connect後，會自動dispatch action
// export default connect(null, actions)(ListItem);

export default connect(mapStateToProps, actions)(ListItem);
