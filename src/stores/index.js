import { types, getSnapshot } from 'mobx-state-tree'
import { AsyncStorage } from '@react-native-community/async-storage';
import { APPSTATEPERSISTENCEKEY } from '@utils';
import { UserStore } from './UserStore';

export const RootStore = types
    .model('RootStore', {
        id: types.optional(types.identifier, 'RootStore'),
        userStore: types.optional(UserStore, () => UserStore.create())
    })
    .actions(self => ({
        changeText(newText) {
            self.text = newText
        },
        async save() {
            try {
                const transformedSnapshot = getSnapshot(self);
                const json = JSON.stringify(transformedSnapshot)

                await AsyncStorage.setItem(APPSTATEPERSISTENCEKEY, json);
            } catch (err) {
                console.warn('unexpected error ' + err);
            }
        }
    }))