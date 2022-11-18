import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HostDashboard from "../screens/Host/Dashboard";
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator()

export default function HostNavigator({navigation}) {

    const logout = () => {
        navigation.navigate('HomeNavigator')
    }

    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            headerRight: () => (
                <Ionicons size={25} name="exit" onPress={logout}></Ionicons>
            ),
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'HostDashboard') {
                iconName = focused
                  ? 'home'
                  : 'ios-information-circle-outline';
              } else if (route.name === 'Settings') {
                iconName = focused ? 'ios-list' : 'ios-list-outline';
              }
  
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'blue',
            tabBarInactiveTintColor: 'gray',
          })}>
            <Tab.Screen name="HostDashboard" component={HostDashboard} options={{
                title: 'Home',
                }}/>
        </Tab.Navigator>
    )
}