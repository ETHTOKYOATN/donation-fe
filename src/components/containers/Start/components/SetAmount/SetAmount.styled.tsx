import { alpha, styled } from '@mui/material/styles';

import {
    Box as MuiBox,
    Button as MuiButton,
    Stack as MuiStack,
    TextField as MuiTextField,
    Typography as MuiTypography,
} from '@mui/material';

export const Box = styled(MuiBox)(
    ({ theme }) => `
`,
);

export const Button = styled(MuiButton)(
    ({ theme }) => `
`,
);

export const Stack = styled(MuiStack)(
    ({ theme }) => `
    gap: 12px;

    &.set_amount {
        justify-content: space-between;
        padding: 24px;
        margin-top: 12px;
        height: calc(100% - 180px);
    }

    &.button_group {
        flex-direction: row;
        margin: 0 auto;

        .MuiButtonBase-root {
            background-color: ${alpha(theme.palette.secondary.main, 0.6)};

            :hover {
                background-color: ${alpha(theme.palette.secondary.main, 0.4)}
            }
        }
    }
`,
);

export const TextField = styled(MuiTextField)(
    ({ theme }) => `
    margin: 0 auto;
    width: 50%;

    .MuiInput-input {
        font-size: 48px;
        color: ${theme.palette.primary.main};
        text-align: center;
    }
`,
);

export const Typography = styled(MuiTypography)(
    ({ theme }) => `
    margin: 12px 0;
    
    color: ${theme.palette.primary.main};
    text-align: center;
`,
);
