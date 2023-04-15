import { Dispatch, createAction, createReducer } from '@reduxjs/toolkit';
import { RootState } from '..';
import { getWateringDates, wateringToTree } from '../api/water';

type waterActionType = ReturnType<
    | typeof wateringTreePending
    | typeof wateringTreeSuccess
    | typeof wateringTreeFailure
    | typeof getWateringDataPending
    | typeof getWateringDataSuccess
    | typeof getWateringDataFailure
>;

const wateringTreePending = createAction('water/WATERING_TREE_PENDING');
const wateringTreeSuccess = createAction<string>('water/WATERING_TREE_SUCCESS');
const wateringTreeFailure = createAction('water/WATERING_TREE_FAILURE');

const getWateringDataPending = createAction('water/GET_WATERING_DATA_PENDING');
const getWateringDataSuccess = createAction<string[]>('water/GET_WATERING_DATA_SUCCESS');
const getWateringDataFailure = createAction('water/GET_WATERING_DATA_FAILURE');

type InitialState = {
    water: {
        loading: boolean;
        error: boolean;
        data: string | null;
    };
    date: {
        loading: boolean;
        error: boolean;
        data: string[];
    };
};

const initalState: InitialState = {
    water: {
        loading: false,
        error: false,
        data: null,
    },
    date: {
        loading: false,
        error: false,
        data: [],
    },
};

const water = createReducer(initalState, (builder) => {
    builder.addCase(wateringTreePending, (state) => ({
        ...state,
        water: {
            loading: true,
            error: false,
            data: null,
        },
    }));
    builder.addCase(wateringTreeSuccess, (state, action) => ({
        ...state,
        water: {
            loading: false,
            error: false,
            data: action.payload,
        },
    }));
    builder.addCase(wateringTreeFailure, (state) => ({
        ...state,
        water: {
            loading: false,
            error: true,
            data: null,
        },
    }));
    builder.addCase(getWateringDataPending, (state) => ({
        ...state,
        date: {
            loading: true,
            error: false,
            data: [],
        },
    }));
    builder.addCase(getWateringDataSuccess, (state, action) => ({
        ...state,
        date: {
            loading: false,
            error: false,
            data: action.payload,
        },
    }));
    builder.addCase(getWateringDataFailure, (state) => ({
        ...state,
        date: {
            loading: false,
            error: true,
            data: [],
        },
    }));
});

export default water;

export const wateringTree = (id: number) => async (dispatch: Dispatch<waterActionType>) => {
    dispatch(wateringTreePending());

    return new Promise(async (resolve, reject) => {
        await wateringToTree(id)
            .then((res) => {
                dispatch(wateringTreeSuccess(res));
                resolve(res);
            })
            .catch((error) => {
                dispatch(wateringTreeFailure());
                reject(error);
            });
    });
};

export const getWateringData = (id: number) => async (dispatch: Dispatch<waterActionType>) => {
    dispatch(getWateringDataPending());

    return new Promise(async (resolve, reject) => {
        await getWateringDates(id)
            .then((res) => {
                dispatch(getWateringDataSuccess(res));
                resolve(res);
            })
            .catch((error) => {
                dispatch(getWateringDataFailure());
                reject(error);
            });
    });
};
