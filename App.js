import React from 'react';
import Navigator from '@navigations';
import { Provider } from 'mobx-react'
import { RootStore } from '@stores'

const App = () => (
  <Provider rootStore={RootStore.create({ text: 'Test' })}>
    <Navigator/>
  </Provider>
)

export default App