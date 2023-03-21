import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HostDashboard from "../screens/Host/Dashboard";
import Ionicons from 'react-native-vector-icons/Ionicons';
import HostShare from '../screens/Host/Share/index';

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
                  : 'home-outline';
              } else if (route.name === 'HostShare') {
                iconName = focused ? 'ios-share' : 'ios-share-outline';
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
            <Tab.Screen name="HostShare" component={HostShare} options={{
                title: 'Share',
            }}/>
        </Tab.Navigator>
    )
}