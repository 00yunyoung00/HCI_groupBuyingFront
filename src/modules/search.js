import { createAction, handleActions } from 'redux-actions';


const CHANGE_FIELD = 'search/CHANGE_FIELD';
const CHANGE_CATEGORY = 'search/CHANGE_CATEGORY';
const INITIALIZE = 'search/INITIALIZE';

export const changeField = createAction(CHANGE_FIELD, searchWord=>searchWord);

export const changeOrder = createAction(CHANGE_CATEGORY, category=>category);

export const initialize = createAction(
    INITIALIZE,
);

const initialState = {
    searchWord:'',
    category:null,
};

const search = handleActions(
    {
        [INITIALIZE]:state=>initialState,
        [CHANGE_FIELD]:(state, { payload:searchWord })=>({
            ...state,
            searchWord,
        }),
        [CHANGE_CATEGORY]:(state, { payload:category })=>({
            ...state,
            category,
        }),
    },
    initialState,
)

export default search;