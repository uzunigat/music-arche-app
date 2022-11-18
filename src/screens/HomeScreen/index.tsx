import { TouchableOpacity, View, Text } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { useEffect } from 'react'
import { ResponseType, useAuthRequest } from 'expo-auth-session'
import * as WebBrowser from 'expo-web-browser'

import { styles } from './style'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { setId, setUserId } from '../../store'
import { config } from '../../config'

WebBrowser.maybeCompleteAuthSession()

const discovery = {
    authorizationEndpoint: 'https://accounts.spotify.com/authorize',
    tokenEndpoint: `${config.REACT_SERVER_URL}api/v1/auth`
}

const HomeScreen = ({ navigation }) => {
    const token = useAppSelector((state) => state.token)
    const dispatcher = useAppDispatch()

    const [request, response, promptAsync] = useAuthRequest(
        {
            responseType: ResponseType.Code,
            extraParams: {
                test: 'Test'
            },
            clientId: '506fa1281f92416ba2b0907c3a03ef05',
            scopes: [
                'user-modify-playback-state',
                'user-read-currently-playing',
                'user-read-playback-state',
                'user-library-modify',
                'user-library-read',
                'playlist-read-private',
                'playlist-read-collaborative',
                'playlist-modify-public',
                'playlist-modify-private',
                'user-read-recently-played',
                'user-top-read'
            ],
            // In order to follow the "Authorization Code Flow" to fetch token after authorizationEndpoint
            // this must be set to false
            usePKCE: false,
            redirectUri: `http://localhost:3000/api/v1/auth`
        },
        discovery
    )

    useEffect(() => {
        if (response?.type === 'error') {
            const { accessTokenId, userId } = response.params

            
            dispatcher(setId(accessTokenId))
            dispatcher(setUserId(userId))
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            accessTokenId ? navigation.navigate('HostDashboard') : false
        }
    }, [navigation, response])

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => {
                    if (request) promptAsync()
                }}
                style={styles.loginButtonContainer}
            >
                <Text style={styles.appButtonText}>{'Login'}</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => {navigation.navigate('Join')}}
                style={styles.joinButtonContainer}
            >
                <Text style={styles.appButtonText}>{'Join'}</Text>
            </TouchableOpacity>

            <StatusBar style="auto" />
        </View>
    )
}

export default HomeScreen
