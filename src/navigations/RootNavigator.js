import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { HomeScreen } from '@scenes/HomeScreen'
import { SettingsScreen } from '@scenes/SettingsScreen'

const Stack = createBottomTabNavigator()

const RootNavigator = () => (
    <NavigationContainer>
        <Stack.Navigator
        initialRouteName="Home"
        >
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="Settings" component={SettingsScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
)

export default RootNavigator