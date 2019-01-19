import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import { requireNativeComponent } from 'react-native';

var CLF = requireNativeComponent('CLFButton',CLFButton);


export default  class CLFButton extends Component {
    static propTypes = {
        normalTitle:PropTypes.string,
        selectedTitle: PropTypes.string,
        onChange: PropTypes.func,
    };

    _onChange = (event) => {
        console.warn(`${event.nativeEvent["msg"]},当前按钮:${event.nativeEvent["isSelected"] ? "选中状态" : "正常状态"}`, );
    }

    render() { return <CLF {...this.props} onClick={this._onChange} />; }
}