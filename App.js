import React from 'react';
import Navigator from '@navigations';
import { Provider } from 'mobx-react'
import { RootStore } from '@stores'
import { View, Platform, StatusBar } from 'react-native'
import AppLoading from 'expo-app-loading'
import AsyncStorage from '@react-native-community/async-storage';
import { applySnapshot } from 'mobx-state-tree';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.rootStore = RootStore.create({
      text: 'tex'
    })
  }

  state = {
    isLoadingComplete: false,
  }

  render() {
    if (!this.state.isLoadingComplete) {
      return (
        <AppLoading
          startAsync={this._loadPersistedState}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      )
    }
    else {
      return (
        <Provider rootStore={this.rootStore}>
            {Platform.OS === 'ios' && <StatusBar/>}
            <Navigator/>
        </Provider>
      )
    }
  }

  _loadPersistedState = async () => {
    const retrievedState = await AsyncStorage.getItem('appStatePersistenceKey')

    if (retrievedState) {
      const rootStoreJson = JSON.parse(retrievedState)
      if (RootStore.is(rootStoreJson)) {
        applySnapshot(thos.rootStore, rootStoreJson)
      }
    }
  }

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

export default App