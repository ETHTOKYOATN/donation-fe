import { alpha, styled } from '@mui/material/styles';
import { Box as MuiBox, Typography as MuiTypography, Stack as MuiStack, Button as MuiButton } from '@mui/material';

export const Box = styled(MuiBox, {
    shouldForwardProp: (prop) => prop !== 'color' && prop !== 'barColor' && prop !== 'ratio',
})<{ color?: string; barColor?: string; ratio?: number }>(
    ({ theme, color = '#FFF', barColor = '#FFF', ratio = 0 }) => `
    &.tree_data {
        display: flex;
        flex-direction: column;
        gap: 12px;
        padding: 12px;
        background-color: ${color};
        border: 3px solid ${alpha(color, 0.2)};
        box-shadow: 0 8px 0 ${alpha(color, 0.8)};
        border-radius: 12px;

        .image {
            width: 100%;
            height: 200px;
            background: ${theme.palette.common.white};
            border: 3px solid ${alpha(theme.palette.common.black, 0.2)};
            border-radius: 8px;
        }

        .graph {
            position: relative;
            width: 100%;
            height: 24px;
            border: 3px solid ${alpha(theme.palette.common.black, 0.2)};
            border-radius: 8px;

            .graph_bar {
                position: absolute;
                background-color: ${barColor};
                width: ${ratio * 100}%;
                height: 24px;
                border-radius: 8px;                
                bottom: -2px;
            }
        }
    }
`,
);

export const Button = styled(MuiButton)(
    ({ theme }) => `
    background-color: ${theme.palette.common.white};
    border: 3px solid ${theme.palette.primary.main};
    box-shadow: 0 4px 0 ${alpha('#A2A2A2', 0.3)};
    border-radius: 12px;
    opacity: 0.6;

    :hover {
        opacity: 1;
    }
`,
);

export const Stack = styled(MuiStack)(
    ({ theme }) => `
    flex-direction: row;
    justify-content: space-between;
`,
);

export const Typography = styled(MuiTypography)(
    ({ theme }) => `
    &.tree_step {
        text-transform: uppercase;
    }
`,
);
