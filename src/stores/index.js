import { types } from 'mobx-state-tree'

export const RootStore = types
    .model('RootStore', {
        id: types.optional(types.identifier, 'RootStore'),
        text: types.string
    })
    .actions(self => ({
        changeText(newText) {
            self.text = newText
        }
    }))