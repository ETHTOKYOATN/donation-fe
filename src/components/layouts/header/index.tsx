import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { KeyboardArrowDownRounded } from '@mui/icons-material';
import { RootState } from '@/reducers';
import { useActions } from '@/components/providers/ActionsProvider';
import { IconHome } from '@/components/svgs/IconHome';
import { IconLogOut } from '@/components/svgs/IconLogOut';
import { Avatar, Box, IconButton, ListItemButton, Menu, MenuItem, TiltShakeBox, Typography } from './Header.styled';

import { shortenAddress } from '@/utils/utilFunctions';

const Header = () => {
    const { account } = useSelector((state: RootState) => state.wallet);
    const { WalletActions } = useActions();
    const history = useHistory();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const isStart = history.location.pathname === '/start';

    const mouseDown = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
    };

    const disconnectAccount = () => {
        WalletActions.disconnectMetamask();
    };

    const moveToHome = () => {
        history.push('/select');
    };

    const handleMenuOpen = (event: React.MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box className="header">
            <img
                className="logo"
                src="/static/header_logo.png"
                alt="header_logo"
                width="350"
                height="110"
                onClick={moveToHome}
            />
            {isStart && (
                <Box className="home">
                    <img className="home" src="/static/home.png" alt="home" width="120" height="77" />
                    <TiltShakeBox onClick={moveToHome}>
                        <IconHome />
                    </TiltShakeBox>
                </Box>
            )}
            <ListItemButton onClick={handleMenuOpen}>
                <Avatar sizes="10">H</Avatar>
                <Typography variant="h6">{shortenAddress(account.data?.address ?? '')}</Typography>
                <IconButton size="large" onClick={handleMenuOpen} onMouseDown={mouseDown}>
                    <KeyboardArrowDownRounded />
                </IconButton>
            </ListItemButton>
            <Menu id="disconnect-menu" anchorEl={anchorEl} open={open} onClose={handleMenuClose}>
                <MenuItem
                    width={anchorEl?.clientWidth ?? 0}
                    height={anchorEl?.clientHeight ?? 0}
                    onClick={disconnectAccount}
                >
                    <IconLogOut />
                    <Typography>Disconnect</Typography>
                </MenuItem>
            </Menu>
        </Box>
    );
};

export default Header;
