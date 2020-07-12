import { StatusBar } from 'expo-status-bar';
import React, { useState, Component } from 'react';
import { StyleSheet, Text, View, Picker, Button } from 'react-native';
import ButtonUI from './components/ButtonUI'
import CountdownTimer from './components/CountdownTimer';
import Time from './components/Time';

// use stateless functional components when you dont really deal with state/change anyhting in state etc
// const App = (props) => { return (.......) }
// no class and no render function needed
export default class App extends Component {
	state = {
		timer: new Date(0),
		onTime: 5,
		offTime: 5,
		timePeriod: '',
		counting: false,

	};

	handleDecrement = (timerType) => {
		// change to using prevState

		const { onTime, offTime } = this.state;
		/*
		if (timerType === 'work' && onTime > 5)
			this.setState({ onTime: onTime - 5 })
		else if (timerType === 'break' && offTime > 5)
			this.setState({ offTime: offTime - 5 })

		*/
		if (timerType === 'work' && onTime > 5)
			this.setState((prevState) => ({ onTime: prevState.onTime - 5}))
		else if (timerType === 'break' && offTime > 5)
			this.setState((prevState) => ({ offTime: prevState.offTime - 5}));

		console.clear()
		console.log('onTime: ', onTime)
		console.log('offTime: ', offTime)
	}

	handleIncrement = (timerType) => {
		// change to using prevState

		const { onTime, offTime } = this.state;

	/*
		if (timerType === 'work' && onTime < 60)
			this.setState({onTime: onTime + 5})
		else if (timerType === 'break' && offTime < 60)
			this.setState({offTime: offTime + 5})		//this.setState({value: value + 5})
	*/

		if (timerType === 'work' && onTime < 60)
			this.setState((prevState) => ({ onTime: prevState.onTime + 5}))
		else if (timerType === 'break' && offTime < 60)
			this.setState((prevState) => ({ offTime: prevState.offTime + 5}));

		console.clear()
		console.log('onTime: ', onTime)
		console.log('offTime: ', offTime)
	}

	startCountdown = () => {
		const { counting, timer, onTime, offTime, timePeriod} = this.state;
		
		if (timePeriod === '')
			this.setState({timePeriod: 'Time ON'})

		if (counting === false) {
			this.setState({counting: true})
			if (timePeriod === 'Time ON')
				this.setState({timer: new Date(onTime * 1000)})	// * 60000 converts milliseconds to minutes	
			else if (timePeriod === 'Time OFF')
				this.setState({timer: new Date(offTime * 1000)})	// * 60000 converts milliseconds to minutes

			this.interval = setInterval (
                () => this.checkCountdown(), 1000
			);
		}
	}

	checkCountdown = () => {
		const { counting, timer, onTime, timePeriod } = this.state;

		// check if one time period is over
		if(timer.getMinutes() === 0 && timer.getSeconds() === 0) 
		{
			console.log('timer stopping...')
			clearInterval(this.interval)
			this.setState({counting: false})

			// toggle timePeriod

			if (timePeriod === 'Time ON')
				this.setState({timePeriod: 'Time OFF'})
			else
				this.setState({timePeriod: 'Time ON'})

			// call startCountdown, to start ON or OFF time
			this.startCountdown()

		}
		else 
		{
			this.setState({timer: new Date(timer.getTime() - 1000)})	// 1000 milliseconds
			console.log(timer.getSeconds())
		}
		// check if counter hits 0, then change from work <==> break
		
		// this.setState({timer: new Date(prevState.getSeconds() - 1)})

	}

	stopCountdown = () => {
		clearInterval(this.interval)
		this.setState({
			timer: new Date(0),
			counting: false,
			timePeriod: '',
		})
		console.log('timer stopped')
	}
		
// <Text style = {[styles.textColor, styles.margin]}>{this.state.timer.toString()}</Text>
	render() {
		return (
			<React.Fragment>
				<View style={styles.container}>
					<Text style = {[styles.textColor, styles.margin]}>{this.state.timePeriod}</Text>
					<CountdownTimer minutes={this.state.timer.getMinutes()} seconds={this.state.timer.getSeconds()}/>
					<StatusBar style="auto" />
				</View>

				<View style = {[styles.buttons, styles.buttonRow, {backgroundColor: 'red'}]}>
					<ButtonUI onPress={this.startCountdown} title='START'/>
					<ButtonUI onPress={this.stopCountdown} title='STOP'/>
				</View>

				<View style = {[styles.buttons]}>
					<Text style = {[styles.textColor, styles.margin]}>Work for {this.state.onTime} minutes</Text>
					<Text style = {[styles.textColor, styles.margin]}>Break for {this.state.offTime} minutes</Text>
				</View>

				<View style = {[styles.buttons, styles.buttonRow]}>
					<ButtonUI onPress={() => this.handleIncrement('work')} title={'     +     '} style={styles.buttonRow}/>
					<Time time={this.state.onTime}/>
					<ButtonUI onPress={() => this.handleDecrement('work')} title={'     -      '}/>
				</View>

				<View style = {[styles.buttons, styles.buttonRow]}>
					<ButtonUI onPress={() => this.handleIncrement('break')} title={'     +break     '}/>
					<Time time={this.state.offTime}/>
					<ButtonUI onPress={() => this.handleDecrement('break')} title={'     - break     '}/>
				</View>
			</React.Fragment>
		);
	}
}


// justifyContent: vertical axis: center up/down
// alignItems: 'center', horiz axis: center left/right

const styles = StyleSheet.create({
	container: {
		flex: 10,
		backgroundColor: '#000',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#121212',
	},
	textColor: {
		color: '#fff'
	},
	margin: {
		marginBottom: 5
	},
	buttonRow: {
		flexDirection: 'row'
	},
	buttons: {
		flex: 1,
		backgroundColor: 'blue',
		justifyContent: 'center',
		alignItems: 'center',
	},

	})




