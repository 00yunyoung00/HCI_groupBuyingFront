import { combineReducers } from "redux";

import path from './path'
import items from './items'
import search from './search'
import user from './user'

const rootReducer = combineReducers({
    path,
    items,
    search,
    user,
})

export default rootReducer;