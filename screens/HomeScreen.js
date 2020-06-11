import * as React from 'react';
import { StyleSheet, View,Image, Alert, VirtualizedList} from 'react-native';
import { ScrollView, FlatList, RectButton } from 'react-native-gesture-handler';
import { Text,Button} from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';

function Item({ title }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}


function OptionButton({ icon, label, onPress, isLastOption }) {
  return (
    <RectButton style={[styles.option, isLastOption && styles.lastOption]} onPress={onPress}>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.optionIconContainer}>
          <Ionicons name={icon} size={22} color="rgba(0,0,0,0.35)" />
        </View>
        <View style={styles.optionTextContainer}>
          <Text style={styles.optionText}>{label}</Text>
        </View>
      </View>
    </RectButton>
  );
}

export default function HomeScreen({navigation}) {

  return (
        <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <View style={{minHeight:200,marginHorizontal:20}}>
              <Image
                source={require('../assets/images/card.png')}
              />
            </View>
            <View style={{padding: 20}}>
              <Button title='Create a basket' onPress={ () => navigation.navigate('CreateBasket')} /> 
            </View>
            
            <View style={styles.orderStatus}>
              <Text style={{fontWeight:"bold",fontSize:22}}>Order Status</Text>
              <Button title='Check' style={{marginTop:20}} onPress={() => navigation.navigate('OrderStatus')} />
            </View>
            <View style={styles.orderHistory}>
              <Text style={{fontWeight:"bold",fontSize:22}}>Past Orders</Text>
              
               <OptionButton
                icon="md-school"
                label="Order# 1"
              />

              <OptionButton
                icon="md-compass"
                label="Order# 1"
              />

              <OptionButton
                icon="ios-chatboxes"
                label="Order# 1"
                isLastOption
              />
            </View>
             
        </ScrollView>
      </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  },
  logo:{
    width:50,
    height:100,
  },
  orderStatus:{
    padding:10,
    marginHorizontal:20,
    borderRadius:5,
    minHeight:100,
    backgroundColor:'#c2c2e2',
  },
  orderHistory:{
    padding:10,
    marginHorizontal:20,
    marginVertical:20,
    borderRadius:5,
    minHeight:100,
    backgroundColor:'#c3c2e2',
  },
  item: {
    padding: 20,
    marginVertical: 4,
    marginHorizontal: 8,
  },
  title: {
    fontSize: 16,
  },
  optionIconContainer: {
    marginRight: 12,
  },
  option: {
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionText: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 1,
  },

});
