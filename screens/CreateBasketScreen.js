import * as React from 'react';
import { View,Text,StyleSheet,Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Spacer from "../components/Spacer";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faStar,faPlus } from '@fortawesome/free-solid-svg-icons'

export default function CreateBasketScreen(navigation) {
    
    return (
        <View>
        <ScrollView>
            <View>
                <Text style={styles.viewstyle}> Create Basket</Text>
            </View>
            <View>
            	<Text style={styles.viewstyle_1}> Create a Laundry Basket</Text>
            	<Spacer/>
            	<Text style={styles.viewstyle_2}> Items</Text>
            	<Spacer/>
            	<Text style={styles.viewstyle_2}> Washing Type</Text>
            	<Spacer/>
            	<Text style={styles.viewstyle_2}> Quality</Text>
            	<Spacer/>
            	<Spacer/>
            	<View style={styles.inline}>
        <FontAwesomeIcon style={styles.star} icon={ faStar } />
        <Button style={styles.button} title="Create Basket"  />
      </View>
            </View>
            <View style={styles.inline}>
            <Spacer/>
            <FontAwesomeIcon  icon={ faStar } />
            <Text style={styles.viewstyle_1} >Favourites</Text>
            </View>
            <Spacer/>
            <View style={styles.inline}>
            <Text style={styles.viewstyle_2}>Room Garments</Text>
            <FontAwesomeIcon style={styles.star} icon={ faPlus } />
            </View>
        </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
	viewstyle:{
		fontSize:20,
		fontWeight:"bold"
	},
	viewstyle_1:{
		fontSize:18,
		fontWeight:"bold",
		marginLeft:10
	},
	viewstyle_2:{
		fontSize:15,
		marginLeft:30	
	},
	star:{
		backgroundColor:"green",
		borderRadius:20,
		marginLeft:60,
		padding:12,
		marginRight:30,
	},
	inline:{
		flex:1,
		flexDirection: 'row'
	},
	button:{
		backgroundColor:"red"
	}
})
