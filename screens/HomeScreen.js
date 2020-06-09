import * as React from 'react';
import { StyleSheet, View,Image, Alert} from 'react-native';
import { ScrollView, FlatList } from 'react-native-gesture-handler';
import { Text,Button} from 'react-native-elements';

function Item({ title }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

export default function HomeScreen({navigation}) {
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ]

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
              <FlatList
                data={DATA}
                renderItem={({ item }) => <Item title={item.title} />}
                keyExtractor={item => item.id}
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

});
