import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Container } from '@components/Container'
import { inject, observer } from 'mobx-react'

const _HomeScreen = (props) => {
  const { rootStore } = props

  return (
    <View style={styles.container}>
      <Container>
        <TextInput placeholder="Type here" value={rootStore.text} onChangeText={(text) => rootStore.changeText(text)}/>
        <Text>{rootStore.text}</Text>
      </Container>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const HomeScreen = inject(({ rootStore }) => ({
  rootStore
}))(observer(_HomeScreen))