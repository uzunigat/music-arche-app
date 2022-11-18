import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import GuestDashboard from "../screens/Guest/Dashboard";
import Ionicons from 'react-native-vector-icons/Ionicons';
import GuestSettings from "../screens/Guest/Settings";
import GuestHost from "../screens/Guest/Host";

const Tab = createBottomTabNavigator()

export default function GuestNavigator({navigation}) {

    const logout = () => {
        navigation.navigate('HomeNavigator', {screen: 'Home'})
    }

    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            headerRight: () => (
                <Ionicons size={25} name="exit" onPress={logout}></Ionicons>
            ),
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              switch (route.name) {
                    case 'GuestDashboard':
                        iconName = focused ? 'home' : 'home-outline';
                        break;
                    case 'GuestSettings':
                        iconName = focused ? 'settings' : 'settings-outline';
                        break;
                    case 'GuestHost':
                        iconName = focused ? 'person-circle' : 'person-circle-outline';
                        break;
              }


              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'blue',
            tabBarInactiveTintColor: 'gray',
          })}
        >
            <Tab.Screen name="GuestHost" component={GuestHost} options={{ title:'Host' }}/>
            <Tab.Screen name="GuestDashboard" component={GuestDashboard} options={{ title:'Home' }}/>
            <Tab.Screen name="GuestSettings" component={GuestSettings} options={{ title:'Settings' }}/>

        </Tab.Navigator>
    )
}