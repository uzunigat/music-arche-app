import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from '../screens/HomeScreen';
import Join from '../screens/Join';

const Stack = createNativeStackNavigator()

export default function HomeNavigator() {
  return (
        <Stack.Navigator screenOptions={{
            headerTintColor: 'white',
            headerStyle: { backgroundColor: '#3232FF' },            
            }}>
            <Stack.Screen name="Home" component={HomeScreen} options={{title:'Pedify'}}/>
            <Stack.Screen name="Join" component={Join}/>
        </Stack.Navigator>
  )
}