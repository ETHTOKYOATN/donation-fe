import { alpha, styled } from '@mui/material/styles';
import { Box as MuiBox, Typography as MuiTypography, Button as MuiButton } from '@mui/material';

export const Box = styled(MuiBox)(
    ({ theme }) => `
    height: 100vh;
    max-width: 600px;
    margin: 0 auto;
    padding: 24px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 150px;
`,
);

export const Button = styled(MuiButton)(
    ({ theme }) => `
    font-decoration: none;
    width: 100%;
    height: 100px;
    background: ${theme.palette.common.white};
    border: 4px solid ${theme.palette.primary.main};
    border-radius: 12px;
    box-shadow: 0px 8px 0px ${alpha(theme.palette.primary.main, 0.6)};

    gap: 60px;
`,
);

export const Typography = styled(MuiTypography)(
    ({ theme }) => `
`,
);
