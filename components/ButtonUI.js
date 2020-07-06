import React, { useState, Component } from 'react';
import { Button } from 'react-native-elements';
import { TouchableOpacity, Text, View } from 'react-native';


class ButtonUI extends Component {
    render() {
        return (
            <View>
                <Button 
                    title={this.props.title}
                    onPress={this.props.onPress}
                    style={this.props.style}
                    value={this.props.value}
                    type='solid'
                />
            </View>
        );
    }
}

export default ButtonUI;