import { Text, View, TouchableOpacity } from 'react-native'
import { useAppSelector } from '../../../store/hooks'
import { styles } from './style'

const GuestDashboard = ({navigation}) => {

    const user = useAppSelector((state) => state.user)
    const token = useAppSelector((state) => state.token)

    const play = async () => {
        await fetch(`http://localhost:3000/api/v1/player/${token.id}/play/`, {
            method: 'PUT',
        })
    }

    const pause = async () => {
        await fetch(`http://localhost:3000/api/v1/player/${token.id}/pause`, {
            method: 'PUT',
        })
    }

    return <View style={styles.container}>
            <Text>Welcome to {user.displayName} Host</Text>
            <TouchableOpacity
                onPress={() => play()}
                style={styles.joinButtonContainer}
            >
                <Text style={styles.appButtonText}>{'Play'}</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => pause()}
                style={styles.joinButtonContainer}
            >
                <Text style={styles.appButtonText}>{'Pause'}</Text>
            </TouchableOpacity>
        </View>
}

export default GuestDashboard
