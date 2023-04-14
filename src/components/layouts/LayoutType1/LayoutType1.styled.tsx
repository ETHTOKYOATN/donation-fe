import { alpha, styled } from '@mui/material/styles';
import { Box as MuiBox } from '@mui/material';

export const Box = styled(MuiBox)(
    ({ theme }) => `
    &.layout-type-1 {
        background-image: url(/images/og_image.png);
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        width: 100vw;
        height: 100vh;
    }

    .main {
        height: 100%;
    }
`,
);

export const Main = styled(MuiBox)(
    ({ theme }) => `
    height: 100%;
    background: ${alpha('#FFFFFF', 0.3)};
    backdrop-filter: blur(10px);
    
`,
);
