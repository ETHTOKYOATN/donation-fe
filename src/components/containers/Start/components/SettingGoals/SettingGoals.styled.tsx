import { styled } from '@mui/material/styles';
import { Stack as MuiStack, Typography as MuiTypography, TextField as MuiTextField } from '@mui/material';

export const Stack = styled(MuiStack)(
    ({ theme }) => `
    overflow: scroll;

    &.setting_goals {
        justify-content: space-between;
        padding: 24px;
        margin-top: 12px;
        
        @media only screen and (max-width: 1024px) {
            height: 100%;
        }
        @media only screen and (min-width: 1025px) {
            height: calc(100% - 170px);
        }

        .goal_contents {
            height: 100%;
            width: 100%;
            gap: 24px;
        
            @media only screen and (max-width: 1024px) {
                align-items: center;
            }

            @media only screen and (min-width: 1025px) {
                flex-direction: row;
                justify-content: center;
                align-items: center;
            }
        }
    }
`,
);

export const Typography = styled(MuiTypography)(
    ({ theme }) => `
    color: ${theme.palette.primary.main};
    text-align: center;
    margin: 12px 0;
`,
);

export const TextField = styled(MuiTextField)(
    ({ theme }) => `
    width: 80%;
    overflow: visible;
`,
);
