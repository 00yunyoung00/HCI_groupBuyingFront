import { createAction, handleActions } from 'redux-actions';

const SET_USER='user/SET_USER';
const LOGOUG='user/LOGOUT';

export const setUser = createAction(SET_USER, user=>user);
export const logout = createAction(LOGOUG);

const initialState = {
    user:''
}

const user = handleActions(
    {
        [SET_USER]:(state, { payload:user })=>({
            user
        }),
        [LOGOUG]:(state)=>({
            user:''
        }),
    },
    initialState,
)

export default user