import { StatusBar } from 'expo-status-bar';
import React, { useState, Component } from 'react';
import { StyleSheet, Text, View, Picker, Button } from 'react-native';
import ButtonUI from './components/ButtonUI'
import CountdownTimer from './components/CountdownTimer';

// use stateless functional components when you dont really deal with state/change anyhting in state etc
// const App = (props) => { return (.......) }
// no class and no render function needed
export default class App extends Component {
	state = {
		timer: 0,
		onTime: 5,
		offTime: 5,
		timePeriod: 'Time ON',
		counting: false,

	};

	handleDecrement = (timerType) => {
		// change to using prevState

		const { onTime, offTime } = this.state;
		
		if (timerType === 'work' && onTime > 0)
			this.setState({onTime: onTime - 5})
		else if (timerType === 'break' && offTime > 0)
			this.setState({offTime: offTime - 5})
	}

	handleIncrement = (timerType) => {
		// change to using prevState

		const { onTime, offTime } = this.state;

		if (timerType === 'work' && onTime < 60)
			this.setState({onTime: onTime + 5})
		else if (timerType === 'break' && offTime < 60)
			this.setState({offTime: offTime + 5})		//this.setState({value: value + 5})
	}

	startCountdown() {
		if (this.state.counting === false) {
			this.setState({timer: this.state.onTime})
		//	this.interval = setInterval (
        //        () => this.setState((prevState) => ({timer: prevState.timer - 1})), 1000
	//		);
		}
	}

	render() {

		const pickerValues = ['5','10','15','20','25','30','35','40','45','50','55','60']

		return (

			<View style={styles.container}>

				<Text style = {[styles.textColor, styles.margin]}>{this.state.timePeriod}</Text>
				<CountdownTimer time={5}/>

				<Text style = {[styles.textColor, styles.margin]}>Time {this.state.count}</Text>

				<Text style = {[styles.textColor, styles.margin]}>Work for {this.state.onTime} minutes</Text>
				<ButtonUI onPress={() => this.handleIncrement('work')} title={'     +     '}/>
				<ButtonUI onPress={() => this.handleDecrement('work')} title={'     -      '} style={{margin: 10}}/>

				<Text style = {[styles.textColor, styles.margin]}>Break for {this.state.offTime} minutes</Text>
				<ButtonUI onPress={() => this.handleIncrement('break')} title={'     +     '}/>
				<ButtonUI onPress={() => this.handleDecrement('break')} title={'     -      '} style={{margin: 10}}/>
			
				<ButtonUI onPress={this.startCountdown} title='START'/>

				<StatusBar style="auto" />
			</View>
		);
	}
}



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




