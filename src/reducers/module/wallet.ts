import { createAction, createReducer, Dispatch } from '@reduxjs/toolkit';
import { RootState } from '@/reducers';
// import { getMetamaskAddress } from '../api/wallet';

type WalletActionType = ReturnType<
    | typeof connectMetamaskPending
    | typeof connectMetamaskSuccess
    | typeof connectMetamaskFailure
    | typeof initializeAccount
>;

const connectMetamaskPending = createAction('wallet/ADD_ACCOUNT_PENDING');
const connectMetamaskSuccess = createAction<any>('wallet/ADD_ACCOUNT_SUCCESS');
const connectMetamaskFailure = createAction('wallet/ADD_ACCOUNT_FAILURE');

const initializeAccount = createAction('wallet/DISCONNECT_METAMASK');

type InitialStateType = {
    account: {
        loading: boolean;
        error: boolean;
        data: {
            wallet: string;
            address: string;
        } | null;
    };
    balance: {
        loading: boolean;
        error: boolean;
        data: string | null;
    };
};

const initialState: InitialStateType = {
    account: {
        loading: false,
        error: false,
        data: null,
    },
    balance: {
        loading: false,
        error: false,
        data: null,
    },
};

const wallet = createReducer(initialState, (builder) => {
    builder.addCase(connectMetamaskPending, (state) => ({
        ...state,
        account: {
            loading: true,
            error: false,
            data: null,
        },
    }));
    builder.addCase(connectMetamaskSuccess, (state, action) => ({
        ...state,
        account: {
            loading: false,
            error: false,
            data: action.payload,
        },
    }));
    builder.addCase(connectMetamaskFailure, (state) => ({
        ...state,
        account: {
            loading: false,
            error: true,
            data: null,
        },
    }));

    builder.addCase(initializeAccount, (state) => ({
        ...state,
        account: {
            loading: false,
            error: false,
            data: null,
        },
    }));
});

export default wallet;

export const connectMetamask = () => (dispatch: Dispatch<WalletActionType>, getState: () => RootState) => {
    dispatch(connectMetamaskPending());

    return new Promise((resolve, reject) => {
        new Promise((resolve) => {})
            .then((res) => {
                dispatch(connectMetamaskSuccess(res));
                resolve(res);
            })
            .catch((error) => {
                dispatch(connectMetamaskFailure());
                reject(error);
            });
    });
};

export const disconnectMetamask = () => (dispatch: Dispatch<WalletActionType>, getState: () => RootState) => {
    dispatch(initializeAccount());
};
