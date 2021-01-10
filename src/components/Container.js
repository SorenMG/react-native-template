import React from 'react'
import { View } from 'react-native'

export const Container = (props) => (
    <View style={{ backgroundColor: 'blue' }}>{props.children}</View>
)