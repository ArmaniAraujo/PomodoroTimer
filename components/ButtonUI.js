import React, { useState, Component } from 'react';
import { Button } from 'react-native-elements';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';


class ButtonUI extends Component {
    render() {
        return (
            <View style={styles.circle}>
            <TouchableOpacity onPress={this.props.onPress}>
                <Text style={styles.textStyle}>{this.props.title}</Text>
        </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    circle: {
        width: 60,
        height: 50,
        borderRadius: 100/2,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: "rgba(94,84,115, .5)",
    },
    textStyle: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',

    }

})

//<Button 
 //                   title={this.props.title}
   //                 onPress={this.props.onPress}
     //               style={[this.props.style, {margin: 10}]}
       //             value={this.props.value}
         //           type='clear'
           //     />





export default ButtonUI;