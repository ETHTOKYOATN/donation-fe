import { useMemo, useState } from 'react';

import { createTheme, ThemeProvider } from '@mui/material';
import { myTheme } from '@/styles/theme';
import CssBaseline from '@mui/material/CssBaseline';
import CustomUtilsContextProvider from './CustomUtilsProvider';
import ActionsContextProvider from './ActionsProvider';

type ProvidersWrapperProps = {
    children: React.ReactNode;
};

const ProvidersWrapper = (props: ProvidersWrapperProps) => {
    const { children } = props;
    const [mode, setMode] = useState<'light' | 'dark'>('light');

    const theme = useMemo(
        () =>
            createTheme({
                ...myTheme,
                palette: {
                    mode,
                    ...myTheme.palette,
                },
            }),
        [mode],
    );

    return (
        <ActionsContextProvider>
            <CustomUtilsContextProvider>
                <CssBaseline />
                <ThemeProvider theme={theme}>{children}</ThemeProvider>
            </CustomUtilsContextProvider>
        </ActionsContextProvider>
    );
};

export default ProvidersWrapper;
