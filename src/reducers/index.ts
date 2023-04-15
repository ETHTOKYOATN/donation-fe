import { combineReducers } from 'redux';
import wallet from './module/wallet';
import nft from './module/nft';
import donate from './module/donate';

const rootReducer = combineReducers({ wallet, nft, donate });

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
