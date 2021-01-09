import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Container } from '@components/index'
import { inject, observer } from 'mobx-react'

const _Home = (props) => {
  const { rootStore } = props

  return (
    <View style={styles.container}>
      <Container>
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

export const Home = inject(({ rootStore }) => ({
  rootStore
}))(observer(_Home))