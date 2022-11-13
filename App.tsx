import HomeScreen from "./src/screens/HomeScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from "./src/screens/Dashboard";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { tokenApp } from "./src/store/token";

const Stack = createNativeStackNavigator()

const store = createStore(tokenApp);

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
          <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
