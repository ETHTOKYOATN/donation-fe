import { alpha, styled } from '@mui/material/styles';

import {
    Box as MuiBox,
    Button as MuiButton,
    Stack as MuiStack,
    Typography as MuiTypography,
    Grid as MuiGrid,
} from '@mui/material';

export const Box = styled(MuiBox)(
    ({ theme }) => `
    padding: 12px;
    max-width: 1100px;
    height: 100%;
    margin: 0 auto;
    overflow-y: scroll;
`,
);

export const Button = styled(MuiButton)(
    ({ theme }) => `
    background-color: ${theme.palette.common.white};
    border: 3px solid ${theme.palette.primary.main};
    box-shadow: 0 4px 0 ${alpha('#A2A2A2', 0.3)};
    border-radius: 12px;

    &:hover {
        background-color: ${alpha(theme.palette.primary.main, 0.5)};
    }
`,
);

export const Stack = styled(MuiStack)(
    ({ theme }) => `
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    &.title {
        margin-bottom: 24px;

        @media only screen and (max-width: 1024px) {
            flex-direction: column;
            align-items: center;
        }
        @media only screen and (max-width: 1024px) {
        }
    }
`,
);

export const Typography = styled(MuiTypography)(
    ({ theme }) => `
    &.my_challenge {
        font-size: 76px;
        color: ${theme.palette.common.white};
        -webkit-text-stroke: 4px ${theme.palette.primary.main};
    }
    `,
);

export const Grid = styled(MuiGrid)(
    ({ theme }) => `
`,
);
