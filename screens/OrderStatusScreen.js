import * as React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { Text ,View} from 'react-native'
import ButtonLogin from '../components/ButtonLogin'


export default function OrderStatusScreen(navigation) {
    return (
        <View>
            <ScrollView>
                <Text>Order Status</Text>
                <ButtonLogin/>
            </ScrollView>
        </View>
    )
}
