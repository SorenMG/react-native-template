import { types } from 'mobx-state-tree'

export const User = types.model('User', {
    id: types.identifier,
    username: types.string,
    email: types.string
});