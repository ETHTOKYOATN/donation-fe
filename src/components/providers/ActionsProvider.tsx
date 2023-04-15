import { createContext, useContext } from 'react';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';

import * as walletActions from '@/reducers/module/wallet';

type ActionsProviderProps = {
    children: React.ReactNode;
};

const ActionsContext = createContext<{
    WalletActions: typeof walletActions;
}>({ WalletActions: walletActions });

export const useActions = () => useContext(ActionsContext);

const ActionsContextProvider = (props: ActionsProviderProps) => {
    const { children } = props;
    const dispatch = useDispatch();

    console.log('!!');

    const WalletActions = bindActionCreators(walletActions, dispatch);

    return <ActionsContext.Provider value={{ WalletActions }}>{children}</ActionsContext.Provider>;
};

export default ActionsContextProvider;
