import { keyframes } from '@mui/system';
import { styled } from '@mui/material/styles';
import {
    Avatar as MuiAvatar,
    Box as MuiBox,
    IconButton as MuiIconButton,
    Menu as MuiMenu,
    MenuItem as MuiMenuItem,
    ListItemButton as MuiListItemButton,
    Typography as MuiTypography,
} from '@mui/material';

const tilt_shake = keyframes`
    0% { transform: rotate(0deg); }
    25% { transform: rotate(5deg); }
    50% { transform: rotate(0eg); }
    75% { transform: rotate(-5deg); }
    100% { transform: rotate(0deg); }
`;

export const Avatar = styled(MuiAvatar)(
    ({ theme }) => `
`,
);

export const Box = styled(MuiBox)(
    ({ theme }) => `
    &.header {
        display: flex;
        justify-content: space-between;
        position: fixed;
        padding: 24px;
        width: 100%;

        img {
            &.logo {
                position: absolute;
                top: 0;
            }
            &.home {
                position: relative;
                top: 85px;
            }
        }
    }

    &.home {
        position: relative;
    }
`,
);

export const TiltShakeBox = styled('div')(({ theme }) => ({
    position: 'absolute',
    top: '115px',
    left: '50px',
    width: 30,
    height: 30,
    ':hover': {
        cursor: 'pointer',
        animation: `${tilt_shake} 0.2s infinite ease`,
    },
}));

export const IconButton = styled(MuiIconButton)(
    ({ theme }) => `
    border-radius: 12px;

    :hover {
        background-color: ${theme.palette.third.dark};
    }
`,
);

export const ListItemButton = styled(MuiListItemButton)(
    ({ theme }) => `
    flex-grow: unset;
    max-height: 72px;
    gap: 4px;
    margin-left: auto;
    background-color: ${theme.palette.third.main};
    border-radius: 16px;
    padding: 12px 14px;

    .MuiSvgIcon-root {
        font-size: 24px;
    }

    :hover {
        background: ${theme.palette.third.main};
    }
`,
);

// 다른 방법은 없을까?
export const Menu = styled(MuiMenu)(
    ({ theme }) => `
    .MuiPaper-root {
        top: 90px !important;
        border-radius: 16px;
        
    }
    .MuiList-root {
        padding: 0;
        background-color: ${theme.palette.third.main};
    }
`,
);

export const MenuItem = styled(MuiMenuItem, {
    shouldForwardProp: (prop) => prop !== 'width' && prop !== 'height',
})<{ width: number; height: number }>(
    ({ theme, width, height }) => `
    width: ${width}px;
    height: ${height}px;
    display: flex;
    align-items: center;
    gap: 12px;
`,
);

export const Typography = styled(MuiTypography)(
    ({ theme }) => `
    color: ${theme.palette.primary.main}
`,
);
