import { alpha, styled } from '@mui/material/styles';
import {
    Box as MuiBox,
    Card as MuiCard,
    Stack as MuiStack,
    Table as MuiTable,
    TableBody as MuiTableBody,
    TableCell as MuiTableCell,
    TableContainer as MuiTableContainer,
    TableHead as MuiTableHead,
    TableRow as MuiTableRow,
    Typography as MuiTypography,
} from '@mui/material';

export const Box = styled(MuiBox)(
    ({ theme }) => `
`,
);

export const Card = styled(MuiCard)(
    ({ theme }) => `
    padding: 10px;
    overflow-y: scroll;
    background: ${alpha(theme.palette.common.white, 0.5)};
    border: 3px solid ${alpha(theme.palette.primary.main, 0.2)};
    border-radius: 12px;
`,
);

export const Stack = styled(MuiStack)(
    ({ theme }) => `
    &.title {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 10px 6px;
    }
`,
);

export const Table = styled(MuiTable)(
    ({ theme }) => `
    width:100%;

`,
);

export const TableBody = styled(MuiTableBody)(
    ({ theme }) => `
`,
);

export const TableCell = styled(MuiTableCell)(
    ({ theme }) => `
    &.date {
        text-align: right;
    }

    &.details {
        text-align: right;
    }

`,
);

export const TableContainer = styled(MuiTableContainer)(
    ({ theme }) => `
    margin-top:16px;
    position: relative;
    border-radius: 8px;

`,
);

export const TableHead = styled(MuiTableHead)(
    ({ theme }) => `
    text-transform: capitalize;

    .MuiTableCell-root:first-of-type, .MuiTableCell-root:last-of-type {
        padding: 16px 24px;
    }

`,
);

export const TableRow = styled(MuiTableRow)(({ theme }) => ``);

export const Typography = styled(MuiTypography)(
    ({ theme }) => `
    &.grey-300 {
        color: ${theme.palette.grey[300]};
    }
`,
);
