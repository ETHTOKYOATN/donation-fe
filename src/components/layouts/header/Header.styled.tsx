import { keyframes } from '@mui/system';
import { styled } from '@mui/material/styles';
import { Box as MuiBox, Typography as MuiTypography } from '@mui/material';

export const Box = styled(MuiBox)(
    ({ theme }) => `
`,
);

export const Typography = styled(MuiTypography)(
    ({ theme }) => `
    color: ${theme.palette.primary.main}
`,
);
