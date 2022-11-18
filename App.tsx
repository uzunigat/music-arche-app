import HomeScreen from './src/screens/HomeScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HostDashboard from './src/screens/Host/Dashboard'
import Join from './src/screens/Join'
import { store } from './src/store'
import { Provider } from 'react-redux'
import GuestDashboard from './src/screens/Guest/Dashboard'

const Stack = createNativeStackNavigator()

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Home"
                        component={HomeScreen}
                        options={{ title: 'Welcome' }}
                    />
                    <Stack.Screen name="HostDashboard" component={HostDashboard} />
                    <Stack.Screen name="Join" component={Join} />
                    <Stack.Screen name="GuestDashboard" component={GuestDashboard} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}
