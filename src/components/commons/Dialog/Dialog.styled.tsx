import { styled } from '@mui/material/styles';

import MuiDialog from '@mui/material/Dialog';
import MuiDialogActions from '@mui/material/DialogActions';
import MuiDialogContent from '@mui/material/DialogContent';
import MuiDialogTitle from '@mui/material/DialogTitle';
import MuiButton from '@mui/material/Button';
import MuiStack from '@mui/material/Stack';

export const Dialog = styled(MuiDialog)(
    (props) => `
    .MuiPaper-root {
        background:#1B1D29;
        width:420px
        .flex-1 {align-items: flex-end;}
    }
    backdrop-filter: blur(4px);
    .MuiPaper-root {
        &[role='dialog'] {
            // max-width: 600px;
        }  
    }
`,
);

// &[role='dialog'] {
//     ${
//         props.theme.breakpoints.up(`sm`) &&
//         `
//             min-width: 524px;
//         `
//     };
// }

export const DialogHeader = styled(MuiStack)(
    (props) => `
        padding: 10px 20px 10px 30px;
        border-bottom: 1px solid ${props.theme.palette.divider};
        .MuiDialogTitle-root {
        }
    `,
);
export const DialogActions = styled(MuiDialogActions)(
    (props) => `
    position: relative;
    padding: 16px;
    border-top: 1px solid ${props.theme.palette.divider};
`,
);
export const DialogContent = styled(MuiDialogContent)(
    (props) => `
    padding: 30px;
    svg {
        min-width: 16px;
        fill: #f57f00;
    }
`,
);

export const DialogTitle = styled(MuiDialogTitle)(
    (props) => `
    &.MuiDialogTitle-root {
        padding: 0;
        font-size: 1.125rem;
        font-weight: bold;
    }
`,
);

export const Button = styled(MuiButton)(
    ({ theme }) => `
   
`,
);
