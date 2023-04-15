import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { RootState } from '@/reducers';
import { useActions } from '@/components/providers/ActionsProvider';
import { Box, Button, Typography } from './Main.styled';
import { Loading } from '@/components/commons/Loadings';

const Main = () => {
    const { account } = useSelector((state: RootState) => state.wallet);
    const { WalletActions } = useActions();
    const history = useHistory();

    useEffect(() => {
        if (account.data) history.push('/select');
    }, [account.data]);

    const connectMetamask = async () => {
        WalletActions.connectMetamask();
        console.log(account);
    };

    return (
        <Box>
            <img src="/static/main_logo.png" alt="main_logo" width="255" height="186" />
            <Button
                startIcon={<img src="/svgs/icon_metamask.svg" alt="metamask" width="48" height="44" />}
                disabled={account.loading}
                onClick={connectMetamask}
            >
                {account.loading && <Loading />}
                <Typography variant="h5">Connect to Metamask</Typography>
            </Button>
        </Box>
    );
};

export default Main;
