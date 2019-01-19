import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import { requireNativeComponent,Text,View,StyleSheet } from 'react-native';

var BridgeView = requireNativeComponent('BridgeView',AridgeView);


export default  class AridgeView extends Component {
    constructor(props) {
        super(props);
        this.state = { isone: "one" }; 
    }


    static propTypes = {
        propertyArr:PropTypes.array,
    };

    _onChange = (event) => {
        console.warn(`${event.nativeEvent["message"]}`,);
        this.setState({
            isone :`${event.nativeEvent["message"]}`
          });
    }

    render() { 
        return (
            <View>
             <BridgeView style = {styles.bridgeViewStyle} {...this.props} onClick={this._onChange}/>
            <Text style = {styles.textStyle}>{this.state.isone}</Text>
            </View>
        );
     }
}

const styles = StyleSheet.create({
    bridgeViewStyle: {
        marginHorizontal:50,
        height:400,
        marginTop:200
    },
    textStyle: {
        marginHorizontal:50,
        height:50,
        marginTop:50,
        fontSize:20,
        color:'red',
        fontWeight:'bold',
    },
})