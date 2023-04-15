import { Dispatch, createAction, createReducer } from '@reduxjs/toolkit';
import { RootState } from '..';
import { getUserNFTData, mintingNFT } from '../api/nft';

type nftActionType = ReturnType<
    | typeof mintNFTPending
    | typeof mintNFTSuccess
    | typeof mintNFTFailure
    | typeof getNFTDataPending
    | typeof getNFTDataSuccess
    | typeof getNFTDataFailure
>;

const mintNFTPending = createAction('nft/MINT_NFT_PENDING');
const mintNFTSuccess = createAction<any>('nft/MINT_NFT_SUCCESS');
const mintNFTFailure = createAction('nft/MINT_NFT_FAILURE');

const getNFTDataPending = createAction('nft/GET_NFT_DATA_PENDING');
const getNFTDataSuccess = createAction<NFTDataType[]>('nft/GET_NFT_DATA_SUCCESS');
const getNFTDataFailure = createAction('nft/GET_NFT_DATA_FAILURE');

const initializeNFTData = createAction('nft/INITIALIZE_NFT_DATA');

type NFTDataType = {
    id: number;
    staked: string;
    step: string;
    lockup: string;
    create: string;
    goal: string;
};
type InitialState = {
    mint: {
        loading: boolean;
        error: boolean;
        data: any | null;
    };
    nft: {
        loading: boolean;
        error: boolean;
        data: NFTDataType[] | null;
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
    builder.addCase(getNFTDataPending, (state) => ({
        ...state,
        nft: {
            loading: true,
            error: false,
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

export const mintNft = (lockup: string) => (dispatch: Dispatch<nftActionType>, getState: () => RootState) => {
    dispatch(mintNFTPending());
    console.log('pending');

    return new Promise(async (resolve, reject) => {
        await mintingNFT(lockup)
            .then((res) => {
                console.log('success');
                dispatch(mintNFTSuccess(res));
                resolve(res);
            })
            .catch((error) => {
                console.log('fail');
                dispatch(mintNFTFailure());
                reject(error);
            });
    });
};

export const getNFTData = () => (dispatch: Dispatch<nftActionType>, getState: () => RootState) => {
    dispatch(getNFTDataPending());

    return new Promise(async (resolve, reject) => {
        await getUserNFTData()
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
