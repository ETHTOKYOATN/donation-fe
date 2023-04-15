import { alpha, styled } from '@mui/material/styles';
import {
    Button as MuiButton,
    Dialog as MuiDialog,
    Stack as MuiStack,
    Typography as MuiTypography,
} from '@mui/material';

export const Button = styled(MuiButton)(
    ({ theme }) => `
    `,
);

export const Dialog = styled(MuiDialog)(
    ({ theme }) => `
    .MuiPaper-root {
        background-color: transparent;
    }
    `,
);

export const Stack = styled(MuiStack)(
    ({ theme }) => `
    &.description_rules {
        flex-direction: row;
        justify-content: space-between;
        gap: 24px;
    }

    &.calendar {
        min-width: 900px;
        background: ${theme.palette.common.white};
        border: 3px solid ${theme.palette.primary.main};
        border-radius: 12px;
        padding: 24px;
        overflow: scroll;
    }

    &.description {
        flex: 1 1 0;
        gap: 24px;
        padding: 24px;
    }

    &.rules {
        flex: 1 1 0;
        gap: 6px;
        padding: 24px;
        background: ${alpha(theme.palette.common.white, 0.5)};
        border: 3px solid ${alpha(theme.palette.primary.main, 0.2)};
        border-radius: 12px;
    }

    &.item {
        position: relative;
        border: 3px solid ${theme.palette.secondary.main};
        border-radius: 6px;
        width: 110px;
        height: 110px;

        p {
            line-height: 110px;
            vertical-align: center;
            text-align: center;        
            z-index: 2;
        }

        img {
            position: absolute;
            top: 0;
            right: 0;
            z-index: 1;
            opacity: 0.6;
        }
    }

    &.watered-true {
        background: ${alpha('#A4F1ED', 0.8)};
        border: 3px solid #94D0CD;
    }

    &.actual_calendar {
        gap: 6px;
        flex-wrap: wrap;
        margin-top: 24px;
        flex-direction: row;
    }
`,
);

export const Typography = styled(MuiTypography)(
    ({ theme }) => `
`,
);
