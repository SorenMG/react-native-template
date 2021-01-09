import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { Container } from '@components'
import { Text } from 'react-native'

const Home = () => (
    <Container>
        <Text>Home</Text>
    </Container>
)

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