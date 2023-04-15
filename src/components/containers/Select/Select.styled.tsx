import { alpha, keyframes, styled } from '@mui/material/styles';
import { Box as MuiBox, Typography as MuiTypography, Button as MuiButton } from '@mui/material';

export const ChallengeBox = styled(MuiBox)(({ theme }) => ({
    padding: '26px',
    background: theme.palette.common.white,
    border: `3px solid ${theme.palette.primary.main}`,
    borderRadius: '12px',
    boxShadow: `0 8px 0 ${alpha(theme.palette.primary.main, 0.6)}`,
    opacity: '0.6',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '12px',

    '&:hover': {
        transform: 'translateY(-5px)',
        cursor: 'pointer',
        opacity: 1,
    },

    '@media only screen and (max-width: 1024px)': {
        minWidth: '445px',
        width: '50%',
    },

    '@media only screen and (min-width: 1025px)': {
        flex: '1 1 0',
        maxWidth: '445px',
        maxHeight: '520px',
    },
}));

export const Box = styled(MuiBox)(
    ({ theme }) => `
    &.select {
        overflow: scroll;
        width: 100%;
        display: flex;
        gap: 30px;
        padding: 24px;
        justify-content: center;

        @media only screen and (max-width: 1024px) {
            height: 100%;
            flex-direction: column;
            align-items: center; 
        }

        @media only screen and (min-width: 1025px) {
            flex-direction: row;
        }
    }

    &.challenges {
        flex: 1 1 0;
        height: 100%;
        padding: 26px;
        background: ${theme.palette.common.white};
        border: 3px solid ${theme.palette.primary.main};
        border-radius: 12px;
        box-shadow: 0px 8px 0px ${alpha(theme.palette.primary.main, 0.6)};

        @media only screen and (max-width: 1024px) {
            min-width: 445px;
            width: 50%;
        }

        @media only screen and (min-width: 1025px) {
            flex: 1 1 0;
        }
    }
`,
);

export const Button = styled(MuiButton)(
    ({ theme }) => `
`,
);

export const Typography = styled(MuiTypography)(
    ({ theme }) => `
    color: ${theme.palette.primary.main};
`,
);
