import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { Home } from '@scenes'

const Stack = createStackNavigator()

const RootNavigator = () => (
    <NavigationContainer>
        <Stack.Navigator
        initialRouteName="Home"
        >
            <Stack.Screen name="Home" component={Home}/>
        </Stack.Navigator>
    </NavigationContainer>
)

export default RootNavigator