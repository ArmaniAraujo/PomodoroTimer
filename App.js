import { StatusBar } from 'expo-status-bar';
import React, { useState, Component } from 'react';
import { StyleSheet, Text, View, Picker } from 'react-native';
import Button from './components/Buttons'
import Buttons from './components/Buttons';

// use stateless functional components when you dont really deal with state/change anyhting in state etc
// const App = (props) => { return (.......) }
// no class and no render function needed
export default class App extends Component {
	state = {
		count: 1,
		onTime: 5,
		offTime: 5,
		pickedSelectedValue: 'default',
	};

	incrementCount = () => {
		this.setState({count: this.state.count + 1})

		// 	{ pickerValues.map(minutes => {
		//	return ( <Picker.Item label={minutes} value={minutes}/> )
	//	})}
	}

	render() {

		const pickerValues = ['5','10','15','20','25','30','35','40','45','50','55','60']

		return (

			<View style={styles.container}>
				
				

				<Text >Open up App.js to start working on your app!</Text>
				
				<Text style = {[styles.textColor, styles.margin]}> + {this.state.count}</Text>
				<Button 
					title='+'/>
				<Button
					title='-'/>


				{/* <Picker
					style={styles.textColor, {backgroundColor: 'red', borderColor: 'red'}}
					
					selectedValue={this.state.pickedSelectedValue}
        			style={{ height: 50, width: 150 }}
        			onValueChange={(itemValue, itemIndex) => this.setState({pickedSelectedValue: itemValue})}
				>

				{ pickerValues.map((item, index) => {
        			return (<Picker.Item label={item} value={index} key={index}/>)
			})}
				</Picker> */}

				<Button
				title='Click me!'
				onPress={this.incrementCount}
				/>
				
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




