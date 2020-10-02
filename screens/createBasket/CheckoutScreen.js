import  React, {Component} from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { View,Text,StyleSheet,Button,TouchableOpacity,Image} from 'react-native'
import Spacer from "../../components/Spacer";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleUp,faAngleDown,faPlus,faMinus } from '@fortawesome/free-solid-svg-icons';
  
export default class CheckoutScreen extends Component {  
    state = {  
    	off:true,
        item_1: '',
        icon_1:'',
        T_shirt_number:0,
        pant_number:0,
        shirt_number:0,
        jacket_number:0

    }  
    updateState = () => this.setState({item_1: 'T-shirt',icon_1:'faAngleDown',off:false}) 
    gotoOrigin=()=>this.setState({item_1:'',icon_1:'',off:true})
    IncrementItem_t = () => {
    this.setState({T_shirt_number: this.state.T_shirt_number + 1 });
  }
  DecreaseItem_t = () => {
  	if(this.state.T_shirt_number>0){
    this.setState({ T_shirt_number: this.state.T_shirt_number - 1 })};
  }
      IncrementItem_p = () => {
    this.setState({pant_number: this.state.pant_number + 1 });
  }
  DecreaseItem_p = () => {
  	if(this.state.pant_number>0){
    this.setState({ pant_number: this.state.pant_number - 1 })};
  }

    IncrementItem_s = () => {
    this.setState({shirt_number: this.state.shirt_number + 1 });
  }
  DecreaseItem_s = () => {
  	if(this.state.shirt_number>0){
    this.setState({ shirt_number: this.state.shirt_number - 1 })};
  }

    IncrementItem_j = () => {
    this.setState({jacket_number: this.state.jacket_number + 1 });
  }
  DecreaseItem_j = () => {
  	if(this.state.jacket_number>0){
    this.setState({ jacket_number: this.state.jacket_number - 1 })};
  }

  ToggleClick = () => {
    this.setState({ show: !this.state.show });
  }
    render() {  
        return (  
        	<View>
            <ScrollView>
            	<Spacer/>
            	<Spacer/>
            	<View style={styles.inline}>
            	
                <Text style={styles.viewstyle_1}>Wash & Fold</Text>
                <View>
                <TouchableOpacity
                >
                <FontAwesomeIcon style={styles.viewstyle} icon={ faAngleDown } />
                </TouchableOpacity>
                <Spacer/>
                <View style={styles.inline}>
                <Image source={{uri: 'https://store.sabaton.net/wp-content/uploads/2015/11/wings-of-glory-tshirt-back-sabaton-T15003.png'}}
       style={{width: 30, height: 30}} />
                <Text style={styles.left}>T-shirt</Text>
                <TouchableOpacity style={styles.icon_2} onPress={this.IncrementItem_t}><FontAwesomeIcon icon={ faPlus } /></TouchableOpacity>
                <Text style={styles.left}>{this.state.T_shirt_number}</Text>
                <TouchableOpacity style={styles.icon} onPress={this.DecreaseItem_t}><FontAwesomeIcon icon={ faMinus } /></TouchableOpacity>
                </View>
                <Spacer/>
                <View style={styles.inline}>
                <Image source={{uri: 'https://underarmour.scene7.com/is/image/Underarmour/PS1254097-465_F?rp=standard-0pad|pdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on,on&bgc=F0F0F0&wid=566&hei=708&size=566,708'}}
       style={{width: 30, height: 30}} />
                <Text style={styles.left_1}>Pant</Text>
                <TouchableOpacity style={styles.icon_1} onPress={this.IncrementItem_p}><FontAwesomeIcon icon={ faPlus } /></TouchableOpacity>
                <Text style={styles.left}>{this.state.pant_number}</Text>
                <TouchableOpacity style={styles.icon} onPress={this.DecreaseItem_p}><FontAwesomeIcon icon={ faMinus } /></TouchableOpacity>
                </View>

                <Spacer/>
                <View style={styles.inline}>
                <Image  source={{uri: 'https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/417729/item/goods_03_417729.jpg?width=380'}}
       style={{width: 30, height: 30}} />
                <Text style={styles.left_1}>Shirt</Text>
                <TouchableOpacity style={styles.icon_1} onPress={this.IncrementItem_s}><FontAwesomeIcon icon={ faPlus } /></TouchableOpacity>
                <Text style={styles.left}>{this.state.shirt_number}</Text>
                <TouchableOpacity style={styles.icon} onPress={this.DecreaseItem_s}><FontAwesomeIcon icon={ faMinus } /></TouchableOpacity>
                </View>

                <Spacer/>
                <View style={styles.inline}>
                <Image source={{uri: 'data:image/jpeg;base64,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'}}
       style={{width: 30, height: 30}} />
                <Text style={styles.left}>Jacket</Text>
                <TouchableOpacity style={styles.icon} onPress={this.IncrementItem_j}><FontAwesomeIcon icon={ faPlus } /></TouchableOpacity>
                <Text style={styles.left}>{this.state.jacket_number}</Text>
                <TouchableOpacity style={styles.icon} onPress={this.DecreaseItem_j}><FontAwesomeIcon icon={ faMinus } /></TouchableOpacity>
                </View>
                <Spacer/>
                </View>
                </View>

                <View style={styles.inline}>
                <Text style={styles.viewstyle_1}>Dry Laundry</Text>{!this.state.off==true?
                <TouchableOpacity >
                <FontAwesomeIcon style={styles.viewstyle} icon={ faAngleDown } />
                </TouchableOpacity>:
                <TouchableOpacity >
                <FontAwesomeIcon style={styles.viewstyle} icon={ faAngleDown } />
                </TouchableOpacity>
            }
                </View>
                <View style={styles.inline}>
            	
                <Text style={styles.viewstyle_1}>Ironing</Text>
                <TouchableOpacity
                >
                <FontAwesomeIcon style={styles.viewstyle_3} icon={ faAngleDown } />
                </TouchableOpacity>
                </View>
            
            </ScrollView>
        </View>
             
        );  
    }  
}  

const styles = StyleSheet.create({
	inline:{
		flex:1,
		flexDirection: 'row'
},
viewstyle_2:{
		fontSize:15,
		marginLeft:30
},
viewstyle_3:{
		fontSize:15,
		marginLeft:190
},
viewstyle:{
	marginLeft:150
},
left:{
	marginLeft:20
},
left_1:{
	marginLeft:25
},
icon:{
	marginLeft:20,
	padding:6,
	backgroundColor:"#1A73E8"
},
icon_1:{
	marginLeft:27,
	padding:6,
	backgroundColor:"#1A73E8"
},
icon_2:{
	marginLeft:23,
	padding:6,
	backgroundColor:"#1A73E8"

},
	viewstyle_1:{
		fontSize:18,
		fontWeight:"bold",
		marginLeft:10
	}
})
