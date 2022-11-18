import { useState } from 'react';
import { View, TouchableOpacity, Text, TextInput} from 'react-native'
import { setUser } from '../../store';
import { styles } from './style'

const Join = ({navigation}) => {
    const [tokenId, setTokenId] = useState("Useless Text");

    const join = async () => {
        console.log(tokenId)

        const response = await fetch(`http://localhost:3000/api/v1/user/${tokenId}`, {
            method: 'GET',
        })

        const data = await response.json()
        setTokenId(tokenId)
        setUser(data)

        navigation.navigate('GuestNavigator', {screen: 'GuestDashboard'})
    }

    return <View style={styles.container}>
        <TextInput
            style={styles.input}
            onChangeText={setTokenId}
            value={tokenId}
        />
        <TouchableOpacity
            style={styles.joinButtonContainer}
            onPress={() => join()}
        >
            <Text style={styles.appButtonText}>Join</Text>
        </TouchableOpacity>
        </View>
}

export default Join
