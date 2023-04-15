import { keyframes } from '@mui/system';
import { alpha, styled } from '@mui/material/styles';

import { Button as MuiButton, Box as MuiBox, Stack as MuiStack, Typography as MuiTypography } from '@mui/material';

const tilt_shake = keyframes`
    0% { transform: rotate(0deg); }
    25% { transform: rotate(5deg); }
    50% { transform: rotate(0eg); }
    75% { transform: rotate(-5deg); }
    100% { transform: rotate(0deg); }
`;

export const TiltShakeBox = styled('div')(({ theme }) => ({
    display: 'flex',
    gap: '8px',
    ':hover': {
        cursor: 'pointer',
        animation: `${tilt_shake} 0.2s infinite ease`,
    },
}));

export const Button = styled(MuiButton)(
    ({ theme }) => `
    &.skip {
        min-width: 140px;
        border: 3px solid ${theme.palette.primary.main};
        box-shadow: 0px 8px 0px ${alpha(theme.palette.primary.main, 0.6)};
        border-radius: 55px;
    }

    &.next {
        width: 240px;
        height: 88px;
        gap: 24px;
        background-color: ${theme.palette.primary.dark};
        border: 3px solid ${theme.palette.primary.main};
        box-shadow: 0px 8px 0px ${alpha(theme.palette.primary.main, 0.6)};
        border-radius: 55px;
        
        
        :hover {
            background: ${alpha(theme.palette.primary.main, 0.8)};
        }
    }

    .loading {
        border-radius: 55px;
        top: 3px;
    }

`,
);

export const Box = styled(MuiBox)(
    ({ theme }) => `
    &.start {
        position: relative;
        height: 100%;
        .new_challenge {
            @media only screen and (min-width: 1025px) {
                margin-bottom: 40px;
            }
        }
    }

    &.start-contents {
        max-width: 980px;
        
        position: relative;
        background: ${theme.palette.common.white};
        border: 3px solid ${theme.palette.primary.main};
        border-radius: 36px 36px 0 0;
        box-shadow: -5px 8px 0px ${alpha(theme.palette.primary.main, 0.6)};
        overflow: hidden;

        @media only screen and (max-width: 1024px) {
            margin: 0 24px;
            height: calc(100% - 150px);
        }

        @media only screen and (min-width: 1025px) {
            margin: 0 auto;
            height: calc(100% - 80px);
        }


        .button {
            position: absolute;
            bottom: 24px;
            left: 0;
            right: 0;
            margin: 0 auto;
            width: 90%;
            display: flex;
            justify-content: space-between;
            align-items: center;

            .end_setting {
                position: absolute;
                margin: 0 auto;
                left: 0;
                right: 0;
                bottom: -10px;
                max-width: 400px;
                height: 76px;
                color: ${theme.palette.common.white};
                background-color: ${alpha(theme.palette.primary.main, 0.7)};
                box-shadow: 0px 8px 0px ${alpha(theme.palette.primary.main, 0.6)};
                border-radius: 55px;

                :hover {
                    background-color: ${theme.palette.primary.main};
                }

            }
        }
    }

    img {
        @media only screen and (max-width: 1024px) {
            display: block;
            margin: 40px auto;
        }

        @media only screen and (min-width: 1025px) {
            position: absolute;
            right: 10%;
            top: 0;
        }
    }
`,
);

export const Stack = styled(MuiStack)(
    ({ theme }) => `
    flex-direction: row;
    gap: 12px;
`,
);

export const Typography = styled(MuiTypography)(
    ({ theme }) => `
    color: ${theme.palette.primary.main};

    &.next_button {
        color: ${theme.palette.primary.light};
    }

    &.new_challenge {
        color: ${theme.palette.common.black};
        text-align: center;
    }

    &.start_challenge {
        color: ${theme.palette.common.white};
    }
`,
);
