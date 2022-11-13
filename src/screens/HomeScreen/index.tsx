import { TouchableOpacity, View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { ResponseType, useAuthRequest } from 'expo-auth-session';
import * as WebBrowser from 'expo-web-browser';

import { styles } from './style';

WebBrowser.maybeCompleteAuthSession();

// import { logi } from '../../services/auth'
const discovery = {
    authorizationEndpoint: 'https://accounts.spotify.com/authorize',
    tokenEndpoint: 'http://localhost:3000/api/v1/token'
};

const HomeScreen = ({ navigation }) => {
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
            redirectUri: 'http://localhost:3000/api/v1/token'
        },
        discovery
    );

    useEffect(() => {
        if (response?.type === 'error') {
            const { accessTokenId } = response.params;
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            accessTokenId ? navigation.navigate('Dashboard') : false;
        }
    }, [navigation, response]);

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => {
                    if (request) promptAsync();
                }}
                style={styles.loginButtonContainer}
            >
                <Text style={styles.appButtonText}>{'Login'}</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => {}}
                style={styles.joinButtonContainer}
            >
                <Text style={styles.appButtonText}>{'Join'}</Text>
            </TouchableOpacity>

            <StatusBar style="auto" />
        </View>
    );
};

export default HomeScreen;
