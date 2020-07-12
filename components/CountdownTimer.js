import React, { useState, Component } from 'react';
import { StyleSheet, Text, View, Picker, Button } from 'react-native';

class CountdownTimer extends Component {

    // cosmetic changes to CountdownTimer digits
    printMethod () {
    
        const {minutes, seconds} = this.props

        var mString = minutes
        var sString = seconds

        if (minutes < 10)
            mString = '0' + minutes
        if (seconds < 10)
            sString = '0' + seconds

        return(
        <View>
            <Text style = {[styles.textColor, styles.margin]}>{mString.toString()}:{sString.toString()}</Text>

        </View>
        )    
    }
    
    render() {
        return (
            this.printMethod()
        );
    }
}

export default CountdownTimer;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'blue',
		alignItems: 'center',
		justifyContent: 'center',
	},
	textColor: {
        color: '#fff',
        backgroundColor: '#121212',
        fontSize: 100
	},
	margin: {
		marginBottom: 5
	}
	
	})