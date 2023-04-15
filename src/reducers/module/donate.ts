import { Dispatch, createAction, createReducer } from '@reduxjs/toolkit';
import { RootState } from '..';

type DonateActionType = ReturnType<
    typeof donateCurrencyPending | typeof donateCurrencySuccess | typeof donateCurrencyFailure
>;

const donateCurrencyPending = createAction('donate/DONATE_PENDING');
const donateCurrencySuccess = createAction<any>('donate/DONATE_SUCCESS');
const donateCurrencyFailure = createAction('donate/DONATE_FAILURE');

const initializeDonateCurrency = createAction('donate/INITIALIZE_DONATE_CURRENCY');

type InitialState = {
    donate: {
        loading: boolean;
        error: boolean;
        data: any | null;
    };
};

const initalState: InitialState = {
    donate: {
        loading: false,
        error: false,
        data: null,
    },
};

const donate = createReducer(initalState, (builder) => {
    builder.addCase(donateCurrencyPending, (state) => ({
        ...state,
        donate: {
            loading: true,
            error: false,
            data: null,
        },
    }));
    builder.addCase(donateCurrencyFailure, (state) => ({
        ...state,
        donate: {
            loading: false,
            error: true,
            data: null,
        },
    }));
    builder.addCase(donateCurrencySuccess, (state, action) => ({
        ...state,
        donate: {
            loading: false,
            error: false,
            data: action.payload,
        },
    }));
    builder.addCase(initializeDonateCurrency, (state) => ({
        ...state,
        donate: {
            loading: false,
            error: false,
            data: null,
        },
    }));
});

export default donate;

export const setDonateCurrency = () => (dispatch: Dispatch<DonateActionType>, getState: () => RootState) => {
    dispatch(initializeDonateCurrency());
};

export const donateCurrency = () => (dispatch: Dispatch<DonateActionType>, getState: () => RootState) => {
    dispatch(donateCurrencyPending());

    return new Promise((resolve, reject) => {
        new Promise((resolve) => {})
            .then((res) => {
                dispatch(donateCurrencySuccess(res));
                resolve(res);
            })
            .catch((error) => {
                dispatch(donateCurrencyFailure());
                reject(error);
            });
    });
};
