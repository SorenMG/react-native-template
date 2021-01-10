import { types } from 'mobx-state-tree'
import { User } from '@models/User'

export const UserStore = types
    .model('UserStore', {
        id: types.optional(types.identifier, 'UserStore'),
        user: types.map(User)
    })