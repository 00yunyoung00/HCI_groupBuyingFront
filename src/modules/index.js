import { combineReducers } from "redux";

import path from './path'
import items from './items'

const rootReducer = combineReducers({
    path,
    items,
})

export default rootReducer;