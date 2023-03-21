import { Text, View } from 'react-native'
import { useAppSelector } from '../../../store/hooks'
import { styles } from './style'

const HostShare = () => {
    const user = useAppSelector((state) => state.user)
    return (
        <View style={styles.container}>
            <Text>Give the following code to your friend!</Text>
            <Text>{user.tokenId}</Text>
        </View>
    )
}

export default HostShare
