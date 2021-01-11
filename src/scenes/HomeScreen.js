import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Container } from '@components/Container'
import { inject, observer } from 'mobx-react'
import { Input, Item, Label } from 'native-base'
import { I18n } from 'aws-amplify'
import { showSuccess } from '@utils/Toast'

const _HomeScreen = (props) => {
  const { rootStore } = props

  return (
    <View style={styles.container}>
      <Button title="Show Toast" onPress={() => showSuccess('This is a Toast 👋')}/>
      <Container>
        <Label>{I18n.get('welcome')}</Label>
        <Item>
          <Input value={rootStore.text} onChangeText={rootStore.changeText}/>
        </Item>
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