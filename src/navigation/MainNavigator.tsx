import React from 'react'
import HomeNavigator from './HomeNavigator'
import GuestNavigator from './GuestNavigator'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HostNavigator from './HostNavigator'

const Stack = createNativeStackNavigator()

export default function MainNavigator() {
  return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomeNavigator" component={HomeNavigator} />
        <Stack.Screen name="GuestNavigator" component={GuestNavigator} />
        <Stack.Screen name="HostNavigator" component={HostNavigator} />
      </Stack.Navigator>
  )
}