import * as React from 'react';
import { View,Text,StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function Spacer() {
	return(
		<View>
		<ScrollView>
		<View style={styles.space}></View>
		</ScrollView>
		</View>
	);
}
const styles=StyleSheet.create({
	space:{
		marginBottom:30
	}
})