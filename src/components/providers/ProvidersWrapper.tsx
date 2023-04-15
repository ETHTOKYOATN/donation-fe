import { useMemo, useState } from 'react';

import { createTheme, ThemeProvider } from '@mui/material';
import { myTheme } from '@/styles/theme';
import CssBaseline from '@mui/material/CssBaseline';
import CustomUtilsProvider from './CustomUtilsProvider';
import ActionsProvider from './ActionsProvider';

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
        <ActionsProvider>
            <CustomUtilsProvider>
                <CssBaseline />
                <ThemeProvider theme={theme}>{children}</ThemeProvider>
            </CustomUtilsProvider>
        </ActionsProvider>
    );
};

export default ProvidersWrapper;
