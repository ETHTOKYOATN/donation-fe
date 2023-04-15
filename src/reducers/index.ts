import { combineReducers } from 'redux';
import wallet from './module/wallet';

const rootReducer = combineReducers({ wallet });

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
