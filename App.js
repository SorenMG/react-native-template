import React from 'react';
import Navigator from '@navigations/RootNavigator';
import { Provider } from 'mobx-react'
import { RootStore } from '@stores/RootStore'
import { Platform, StatusBar } from 'react-native'
import AppLoading from 'expo-app-loading'
import AsyncStorage from '@react-native-community/async-storage';
import { applySnapshot } from 'mobx-state-tree';
import { APPSTATEPERSISTENCEKEY } from '@utils/Constants'
import NavigationService from '@utils/NavigationService'
import * as Localization from 'expo-localization';
import { loadVocabularies, setUpLanguage } from '@utils/Localization';
import { Text } from 'native-base';
import { I18n } from 'aws-amplify';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.rootStore = RootStore.create({
      text: 'Test'
    })
    NavigationService.setNavigationStore(this.rootStore.navigationStore)
  }

  state = {
    isLoadingComplete: false,
  }

  render() {
    if (!this.state.isLoadingComplete) {
      return (
        <AppLoading
          startAsync={this._loadResources}
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

  _loadResources = async () => {
    // Localize
    const locale = Localization.locale
    console.log(locale)
    loadVocabularies()
    setUpLanguage(locale)

    this._loadPersistedState()
  }

  _loadPersistedState = async () => {
    const retrievedState = await AsyncStorage.getItem(APPSTATEPERSISTENCEKEY)

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