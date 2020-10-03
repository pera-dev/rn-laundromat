import * as React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Spacer from "../../components/Spacer";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faStar, faPlus } from '@fortawesome/free-solid-svg-icons'

export default function CreateBasketScreen({ navigation }) {


	return (
		<View style={styles.container}>
			<ScrollView>
				<View style={styles.createBasket}>
					<Text style={styles.viewstyle_1}> Create a Laundry Basket</Text>
					<Spacer />
					<Text style={styles.viewstyle_2}> Items</Text>
					<Spacer />
					<Text style={styles.viewstyle_2}> Washing Type</Text>
					<Spacer />
					<Text style={styles.viewstyle_2}> Quantity</Text>
					<Spacer />
					<Spacer />
					<View style={styles.inline}>
						<FontAwesomeIcon style={styles.icon_2} icon={faStar} />
						<TouchableOpacity
							style={styles.button}
							onPress={() => navigation.navigate('Checkout')}
						>
							<Text style={styles.create_a_basket}>Create a Basket</Text>
						</TouchableOpacity>
					</View>
				</View>
				<Spacer />
				<View style={styles.inline}>
					<Spacer />
					<FontAwesomeIcon style={styles.icon_1} icon={faStar} />
					<Text style={styles.viewstyle_1} >Favourites</Text>
				</View>
				<Spacer />
				<View style={styles.inline}>
					<Text style={styles.viewstyle_2}>Room Garments</Text>
					<TouchableOpacity><FontAwesomeIcon style={styles.icon} icon={faPlus} /></TouchableOpacity>
				</View>
			</ScrollView>
		</View>
	)
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'rgba(240,240,240,0.5)',
	},
	viewstyle: {
		fontSize: 20,
		fontWeight: "bold",
	},
	createBasket: {
		padding: 10,
		marginHorizontal: 20,
		marginVertical: 20,
		borderRadius: 5,
		minHeight: 100,
		backgroundColor: '#c3c2e2',
	},
	viewstyle_1: {
		fontSize: 18,
		fontWeight: "bold",
		marginLeft: 10,

	},
	viewstyle_2: {
		fontSize: 15,
		marginLeft: 30
	},
	star: {
		backgroundColor: "#1A73E8",
		marginLeft: 60,
		padding: 10
	},
	inline: {
		flex: 1,
		flexDirection: 'row'
	},
	button: {
		padding: 10,
		borderRadius: 20,
		backgroundColor: "#1A73E8",
		marginLeft: 40
	},
	icon: {
		borderWidth: 6,
		borderRadius: 20,
		borderColor: "#1A73E8",
		marginLeft: 20,
		padding: 5,
		backgroundColor: "#1A73E8",
		marginLeft: 50
	},
	create_a_basket: {
		color: "white"
	},
	icon_1: {
		marginLeft: 20,
		padding: 12
	},
	icon_2: {
		borderWidth: 6,
		borderRadius: 20,
		borderColor: "#1A73E8",
		marginLeft: 20,
		padding: 5,
		backgroundColor: "#1A73E8",
		marginLeft: 50,
		marginTop: 10
	}
})
