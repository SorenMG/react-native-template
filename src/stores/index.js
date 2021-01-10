import { types, getSnapshot } from 'mobx-state-tree'
import { AsyncStorage } from '@react-native-community/async-storage';

export const RootStore = types
    .model('RootStore', {
        id: types.optional(types.identifier, 'RootStore'),
        text: types.string
    })
    .actions(self => ({
        changeText(newText) {
            self.text = newText
        },
        async save() {
            try {
                const transformedSnapshot = getSnapshot(self);
                const json = JSON.stringify(transformedSnapshot)

                await AsyncStorage.setItem('appStatePersistenceKey', json);
            } catch (err) {
                console.warn('unexpected error ' + err);
            }
        }
    }))