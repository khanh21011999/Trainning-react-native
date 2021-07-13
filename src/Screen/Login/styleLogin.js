import {StyleSheet} from 'react-native'
const styles = StyleSheet.create({
	ViewStyle: {
		alignItems: 'center',
		display: 'flex',
		flex: 1,
		justifyContent: 'center',
	},
	ButtonLogin: {
		width: 200,
		height: 50,
		alignSelf: 'center',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 25,
		backgroundColor: 'rgba(214, 208, 208,1)',
	},

	ButtonBack: {
		top: 50,
		width: 200,
		height: 50,
		alignSelf: 'center',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 25,
		backgroundColor: 'rgba(214, 208, 208,1)',
	},
	TextInputForm: {
		color: 'black',
		backgroundColor: 'rgba(214, 208, 208,1)',
		margin: 20,
		borderRadius: 25,
		width: 300,
		paddingLeft: 20,
	},
	errorText: {
		fontSize: 12,
		color: 'red',
		right: -30,
		top: -15,
	},
});
export default styles