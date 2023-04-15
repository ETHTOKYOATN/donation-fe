import { Dispatch, createAction, createReducer } from '@reduxjs/toolkit';
import { RootState } from '..';
import { getNFTCharacterData, getTokenURIData, getUserNFTIDs, mintingNFT } from '../api/nft';

type nftActionType = ReturnType<
    | typeof mintNFTPending
    | typeof mintNFTSuccess
    | typeof mintNFTFailure
    | typeof getUserNFTCountPending
    | typeof getUserNFTCountSuccess
    | typeof getUserNFTCountFailure
    | typeof getNFTDataPending
    | typeof getNFTDataSuccess
    | typeof getNFTDataFailure
    | typeof getTokenURIDataPending
    | typeof getTokenURIDataSuccess
    | typeof getTokenURIDataFailure
    | typeof initializeNFTData
>;

const mintNFTPending = createAction('nft/MINT_NFT_PENDING');
const mintNFTSuccess = createAction<string>('nft/MINT_NFT_SUCCESS');
const mintNFTFailure = createAction('nft/MINT_NFT_FAILURE');

const getUserNFTCountPending = createAction('nft/GET_USER_NFT_COUNT_PENDING');
const getUserNFTCountSuccess = createAction<number[]>('nft/GET_USER_NFT_COUNT_SUCCESS');
const getUserNFTCountFailure = createAction('nft/GET_USER_NFT_COUNT_FAILURE');

const getNFTDataPending = createAction('nft/GET_NFT_DATA_PENDING');
const getNFTDataSuccess = createAction<NFTDataType[]>('nft/GET_NFT_DATA_SUCCESS');
const getNFTDataFailure = createAction('nft/GET_NFT_DATA_FAILURE');

const getTokenURIDataPending = createAction('nft/GET_TOKEN_URI_DATA_PENDING');
const getTokenURIDataSuccess = createAction<NFTURLType[]>('nft/GET_TOKEN_URI_DATA_SUCCESS');
const getTokenURIDataFailure = createAction('nft/GET_TOKEN_URI_DATA_FAILURE');

const initializeNFTData = createAction('nft/INITIALIZE_NFT_DATA');

type NFTURLType = {
    id: number;
    url: string;
    step: number;
};
type NFTDataType = {
    id: number;
    staked: string;
    lockup: string;
    create: string;
    goal: string;
    watered: string;
    donation: string;
};
type InitialState = {
    mint: {
        loading: boolean;
        error: boolean;
        data: string | null;
    };
    nft: {
        loading: boolean;
        error: boolean;
        data: NFTDataType[] | null;
    };
    count: {
        loading: boolean;
        error: boolean;
        data: number[] | null;
    };
    url: {
        loading: boolean;
        error: boolean;
        data: NFTURLType[] | null;
    };
};

const initialState: InitialState = {
    mint: {
        loading: false,
        error: false,
        data: null,
    },
    nft: {
        loading: false,
        error: false,
        data: null,
    },
    count: {
        loading: false,
        error: false,
        data: null,
    },
    url: {
        loading: false,
        error: false,
        data: null,
    },
};

const nft = createReducer(initialState, (builder) => {
    builder.addCase(mintNFTPending, (state) => ({
        ...state,
        mint: {
            loading: true,
            error: false,
            data: null,
        },
    }));
    builder.addCase(mintNFTSuccess, (state, action) => ({
        ...state,
        mint: {
            loading: false,
            error: false,
            data: action.payload,
        },
    }));
    builder.addCase(mintNFTFailure, (state) => ({
        ...state,
        mint: {
            loading: false,
            error: true,
            data: null,
        },
    }));
    builder.addCase(getTokenURIDataPending, (state) => ({
        ...state,
        url: {
            loading: true,
            error: false,
            data: null,
        },
    }));
    builder.addCase(getTokenURIDataSuccess, (state, action) => ({
        ...state,
        url: {
            loading: false,
            error: false,
            data: action.payload,
        },
    }));
    builder.addCase(getTokenURIDataFailure, (state) => ({
        ...state,
        url: {
            loading: false,
            error: true,
            data: null,
        },
    }));
    builder.addCase(getNFTDataPending, (state) => ({
        ...state,
        nft: {
            loading: true,
            error: false,
            data: null,
        },
    }));
    builder.addCase(getUserNFTCountPending, (state) => ({
        ...state,
        count: {
            loading: true,
            error: false,
            data: null,
        },
    }));
    builder.addCase(getUserNFTCountSuccess, (state, action) => ({
        ...state,
        count: {
            loading: false,
            error: false,
            data: action.payload,
        },
    }));
    builder.addCase(getUserNFTCountFailure, (state) => ({
        ...state,
        count: {
            loading: false,
            error: true,
            data: null,
        },
    }));
    builder.addCase(getNFTDataSuccess, (state, action) => ({
        ...state,
        nft: {
            loading: false,
            error: false,
            data: action.payload,
        },
    }));
    builder.addCase(getNFTDataFailure, (state) => ({
        ...state,
        nft: {
            loading: false,
            error: true,
            data: null,
        },
    }));
    builder.addCase(initializeNFTData, (state) => ({
        ...state,
        nft: {
            loading: false,
            error: false,
            data: null,
        },
    }));
});

export default nft;

export const mintNft =
    (staked: string, lockup: string, goal: string, donation: string) =>
    (dispatch: Dispatch<nftActionType>, getState: () => RootState) => {
        dispatch(mintNFTPending());

        return new Promise(async (resolve, reject) => {
            await mintingNFT(staked, lockup, goal, donation)
                .then((res) => {
                    dispatch(mintNFTSuccess(res));
                    resolve(res);
                })
                .catch((error) => {
                    dispatch(mintNFTFailure());
                    reject(error);
                });
        });
    };

export const getUserNFTCount = () => (dispatch: Dispatch<nftActionType>, getState: () => RootState) => {
    dispatch(getUserNFTCountPending());
    const { account } = getState().wallet;
    return new Promise(async (resolve, reject) => {
        await getUserNFTIDs(account.data?.address ?? '')
            .then((res) => {
                dispatch(getUserNFTCountSuccess(res));
                resolve(res);
            })
            .catch((error) => {
                dispatch(getUserNFTCountFailure());
                reject(error);
            });
    });
};

export const getNFTData = (ids: number[]) => (dispatch: Dispatch<nftActionType>, getState: () => RootState) => {
    dispatch(getNFTDataPending());

    return new Promise(async (resolve, reject) => {
        await getNFTCharacterData(ids)
            .then((res) => {
                dispatch(getNFTDataSuccess(res));
                resolve(res);
            })
            .catch((error) => {
                dispatch(getNFTDataFailure());
                reject(error);
            });
    });
};

export const getTokenURLData = (ids: number[]) => (dispatch: Dispatch<nftActionType>, getState: () => RootState) => {
    dispatch(getTokenURIDataPending());

    return new Promise(async (resolve, reject) => {
        await getTokenURIData(ids)
            .then((res) => {
                dispatch(getTokenURIDataSuccess(res));
                resolve(res);
            })
            .catch((error) => {
                dispatch(getTokenURIDataFailure());
                reject(error);
            });
    });
};
