import React from 'react'
import { View } from 'react-native'

export const Container = (props) => (
    <View style={{ backgroundColor: 'red' }}>{props.children}</View>
)