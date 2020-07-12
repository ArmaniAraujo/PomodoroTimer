import React, { useState, Component } from 'react';
import { StyleSheet, Text, View, Picker, Button } from 'react-native';

class Time extends Component {    
    render() {
        return (

            <Text style = {[styles.container]}>{this.props.time}</Text>

        );
    }
}

export default Time;

const styles = StyleSheet.create({
	container: {
        color: '#fff',
		alignItems: 'center',
        justifyContent: 'center',


	},

	
	})