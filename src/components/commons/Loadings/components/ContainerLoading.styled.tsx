import { keyframes, css } from '@mui/system';
import { Box as MuiBox, Stack as MuiStack } from '@mui/material';
import { styled } from '@mui/material/styles';
export const Stack = styled(MuiStack)(
    ({ theme }) => `
        width: 100%;
        height: 100%;
    `,
);

export const Box = styled(MuiBox)(
    ({ theme }) => `
        
        &.loading {
            
            position: absolute;
            width: 100%;
            height: 100%;
            top:0;
            left:0;
            align-items: center;
            justify-content: center;
            background: rgba(0,0,0,0.5);
            z-index: 9000;
            border-radius: 5px;
            display: flex;
            .MuiCircularProgress-svg {
                color: ${theme.palette.primary.main};
            }
        }
        &.loading-error {
            display: flex;
            position: absolute;
            width: 100%;
            height: 100%;
            top:0;
            left:0;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background: rgba(0,0,0,0.5);
            z-index: 9000;

            .loading-background{
                padding: 40px 20px;
                flex-direction: column;
                background: #ffffff;
                box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
                border-radius: 16px;
                width: 310px;
                display: flex;
                justify-content: center;
                align-items: center;
                font-weight: 500;
                font-size: 18px;
                line-height: 140%;
            }

            .MuiButton-outlined{
                margin-top: 20px;
                padding: 0px 20px;
                height: 40px;
                background: #000000;
                border-radius: 20px;
                color: #ffffff;
                font-weight: 700;
                font-size: 15px;
                line-height: 120%;
            }
    
            span{
                text-align: center;
            }
        }
    `,
);

const LoadingKeyframe = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`;

export const LoadingAnimation = styled('div')(
    ({ theme }) => css`
        display: inline-flex;
        align-items: center;
        svg {
            width: 50px;
            height: 50px;
            fill: ${theme.palette.grey.A100};
            animation: ${LoadingKeyframe} 1s infinite steps(8);
        }
    `,
);
