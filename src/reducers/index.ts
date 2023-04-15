import { combineReducers } from 'redux';
import wallet from './module/wallet';
import nft from './module/nft';
import water from './module/water';

const rootReducer = combineReducers({ wallet, nft, water });

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
