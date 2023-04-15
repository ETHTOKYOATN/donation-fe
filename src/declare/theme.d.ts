import { Palette, Theme } from '@mui/material/styles';

declare module '@mui/material/styles/createTheme' {
    interface Theme {
        palette: Palette & {
            third: {
                dark: string;
                main: string;
                contrastText: string;
            };
        };
    }
}
