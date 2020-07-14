import React, { useState, Component, } from 'react';
import { StyleSheet, Text, View, } from 'react-native';

class Time extends Component {    
    render() {
        var path = this.props.imagePath
        return (
            <View>
                <Text style = {[styles.container, {marginTop: 14, marginLeft: 5, marginRight: 5},]}>{this.props.time}</Text>
            </View>

        );
    }
}

//<Image source={require('../assets/gray-square.png')} style={{justifyContent: 'center', alignItems: 'center'}}></Image>


export default Time;

const styles = StyleSheet.create({
	container: {
        color: '#fff',
		alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        fontSize: 30
        
	},
	})