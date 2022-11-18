import { NavigationContainer } from '@react-navigation/native'
import { store } from './src/store'
import { Provider } from 'react-redux'
import MainNavigator from './src/navigation/MainNavigator'

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <MainNavigator></MainNavigator>
            </NavigationContainer>
        </Provider>
    )
}
