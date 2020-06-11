
import * as React from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { Avatar,Text } from 'react-native-elements';

export default function AccountScreen() {
  const userName = 'Alex';

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          
            <View style={{flexDirection:'row',justifyContent:'center'}}>
            <Text h3 h3Style={{fontWeight:'bold'}}>{userName  } </Text>
            <Avatar
                source={{
                    uri:
                    'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                }}
                size='xlarge'
                rounded
                showAccessory
                onAccessoryPress={ () => Alert.alert("Chnage picture")}
                />
            </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#fafafa',
  },
  contentContainer: {
    paddingTop: 15,
  },
  optionIconContainer: {
    marginRight: 12,
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed',
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
