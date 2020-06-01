import { createAction, handleActions} from 'redux-actions';

const CHANGE_PATH = 'path/CHANGE_PATH';

export const changePath = createAction(CHANGE_PATH, pastpath=>pastpath);

const initialState={
    pastpath:'',
}

const path=handleActions(
    {
        [CHANGE_PATH]:(state, { payload: pastpath })=>({
            ...state,
            pastpath:pastpath
        }),
    },
    initialState 
)

export default path;