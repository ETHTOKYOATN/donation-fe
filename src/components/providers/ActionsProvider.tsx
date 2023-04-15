import { createContext, useContext } from 'react';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';

import * as walletActions from '@/reducers/module/wallet';
import * as nftActions from '@/reducers/module/nft';
import * as donateActions from '@/reducers/module/donate';

type ActionsProviderProps = {
    children: React.ReactNode;
};

const ActionsContext = createContext<{
    WalletActions: typeof walletActions;
    NftActions: typeof nftActions;
    DonateActions: typeof donateActions;
}>({ WalletActions: walletActions, NftActions: nftActions, DonateActions: donateActions });

export const useActions = () => useContext(ActionsContext);

const ActionsContextProvider = (props: ActionsProviderProps) => {
    const { children } = props;
    const dispatch = useDispatch();

    const WalletActions = bindActionCreators(walletActions, dispatch);
    const NftActions = bindActionCreators(nftActions, dispatch);
    const DonateActions = bindActionCreators(donateActions, dispatch);

    return (
        <ActionsContext.Provider value={{ WalletActions, NftActions, DonateActions }}>
            {children}
        </ActionsContext.Provider>
    );
};

export default ActionsContextProvider;
