import { alpha, styled } from '@mui/material/styles';
import {
    Box as MuiBox,
    Button as MuiButton,
    IconButton as MuiIconButton,
    Stack as MuiStack,
    Typography as MuiTypography,
    Grid as MuiGrid,
} from '@mui/material';

export const Box = styled(MuiBox, { shouldForwardProp: (props) => props !== 'ratio' })<{ ratio?: number }>(
    ({ theme, ratio = 0 }) => `
    &.detail_page {
        max-width: 1100px;
        margin: 0 auto;
        height: 100%;
        overflow: scroll;
        
        .detail_contents {
            padding: 24px;
            background-color: ${theme.palette.third.main};
            border: 3px solid ${alpha(theme.palette.third.main, 0.2)};
            box-shadow: 0 8px 0 ${alpha(theme.palette.third.main, 0.8)};
            border-radius: 24px;
        }

        .title {
            margin-bottom: 24px;

            .button_group {
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
                gap: 12px;

                @media only screen and (max-width: 1024px) {
                    gap: 36px;
                }
            }

            .MuiButtonBase-root {
                background: ${theme.palette.common.white};
            }

            @media only screen and (max-width: 1024px) {
                justify-content: center;
                align-items: center;
            }

            @media only screen and (min-width: 1025px) {
                flex-direction: row;
                justify-content: space-between;
            }
        }
    }
    
    &.graph {
        position: relative;
        width: 100%;
        height: 24px;
        border: 3px solid ${alpha(theme.palette.primary.main, 0.2)};
        border-radius: 8px;
        
        .graph_bar {
            position: absolute;
            background-color: #AA9D95;
            width: ${ratio * 100}%;
            height: 24px;
            border-radius: 8px;                
            bottom: -2px;
        }
    }
`,
);

export const Button = styled(MuiButton)(
    ({ theme }) => `
    &.watering {
        border: 3px solid ${theme.palette.primary.main};
        box-shadow: 0 4px 0 ${alpha(theme.palette.primary.main, 0.3)};
        border-radius: 24px;
        width: 300px;
        height: 110px;
    }
`,
);

export const IconButton = styled(MuiIconButton)(
    ({ theme }) => `
    border: 3px solid ${theme.palette.primary.main};
    box-shadow: 0 4px 0 ${alpha(theme.palette.primary.main, 0.3)};
    border-radius: 24px;
    padding: 24px;
`,
);

export const Typography = styled(MuiTypography)(
    ({ theme }) => `
    &.my_challenge {
        font-size: 76px;
        color: ${theme.palette.common.white};
        -webkit-text-stroke: 4px ${theme.palette.primary.main};
    }

    &.subtitle {
        text-align: left;
        margin: 24px 0;

        @media only screen and (max-width: 1024px) {
            text-align: center;
        }
    }
    `,
);

export const Stack = styled(MuiStack)(
    ({ theme }) => `
    &.detail_contents {
        margin: 0 24px;
        max-width: 1100px;
        background-color: ${theme.palette.third.main};
        border: 3px solid ${alpha(theme.palette.third.main, 0.2)};
        box-shadow: 0 8px 0 ${alpha(theme.palette.third.main, 0.8)};
        border-radius: 24px;
        padding: 24px;
        
        .item {
            position: relative;
            flex: 1 1 0;
            background: ${alpha(theme.palette.common.white, 0.5)};
            border: 3px solid ${alpha(theme.palette.primary.main, 0.2)};
            border-radius: 12px;
            padding: 24px;

            .amount {
                margin-top: 36px;

            }

            svg {
                position: absolute;
                bottom: 12px;
                right: 12px;
            }

            .metadatas {
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
            }
        }

        .item_challenge {
            min-height: 200px;
            gap: 24px;

            .status {
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
            }
        }

        .summary_area {
            gap: 24px;

            .photo_area {
                width: 100%;
                min-height: 424px;
                flex: 1 1 0;
                height: 424px;
                background-color: ${theme.palette.common.white};
                border-radius: 12px;
            }

            .status_area {
                width: 100%;
                flex: 1 1 0;
                gap: 24px;
            }
    
            .reward_and_deposit {
                min-height: 200px;
                flex-direction: row;
                gap: 24px;
            }

            @media only screen and (max-width: 1024px) {
                justify-content: center;
                align-items: center;
            }

            @media only screen and (min-width: 1025px) {
                flex-direction: row;
                justify-content: space-between;
            }
        }

        
    }
`,
);
