import React, { useState, Component } from 'react';
import { StyleSheet, Text, View, Picker, Button } from 'react-native';

class CountdownTimer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            time: this.props.time,
            startTimer: false, 
        };
    }

    componentDidMount() {
        if (this.state.startTimer) {
            this.interval = setInterval (
                () => this.setState((prevState) => ({time: prevState.time - 1})), 1000
            );
        }
    }

    componentDidUpdate() {
        (this.state.time === 0) && clearInterval(this.interval)
    }

    componentWillUnmount() {
        clearInterval(this.interval);
       }

    render() {
        console.log('im in')
        return (
            <View>
                <Text style = {[styles.textColor, styles.margin]}>{this.state.time}</Text>
            </View>
        );
    }
}

export default CountdownTimer;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#000',
		alignItems: 'center',
		justifyContent: 'center',
	},
	textColor: {
		color: '#fff'
	},
	margin: {
		marginBottom: 5
	}
	
	})