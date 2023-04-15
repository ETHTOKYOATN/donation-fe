import { createContext, useContext } from 'react';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';

import * as walletActions from '@/reducers/module/wallet';
import * as nftActions from '@/reducers/module/nft';
import * as waterActions from '@/reducers/module/water';

type ActionsProviderProps = {
    children: React.ReactNode;
};

const ActionsContext = createContext<{
    WalletActions: typeof walletActions;
    NftActions: typeof nftActions;
    WaterActions: typeof waterActions;
}>({ WalletActions: walletActions, NftActions: nftActions, WaterActions: waterActions });

export const useActions = () => useContext(ActionsContext);

const ActionsContextProvider = (props: ActionsProviderProps) => {
    const { children } = props;
    const dispatch = useDispatch();

    const WalletActions = bindActionCreators(walletActions, dispatch);
    const NftActions = bindActionCreators(nftActions, dispatch);
    const WaterActions = bindActionCreators(waterActions, dispatch);

    return (
        <ActionsContext.Provider value={{ WalletActions, NftActions, WaterActions }}>
            {children}
        </ActionsContext.Provider>
    );
};

export default ActionsContextProvider;
