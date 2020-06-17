import { combineReducers } from "redux";

import path from './path'
import items from './items'
import search from './search'

const rootReducer = combineReducers({
    path,
    items,
    search,
})

export default rootReducer;