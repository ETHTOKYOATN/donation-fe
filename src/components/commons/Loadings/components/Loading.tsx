import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { Box } from './Loading.styled';

const Loading = () => (
    <Box className="loading">
        <CircularProgress />
    </Box>
);

export default Loading;
