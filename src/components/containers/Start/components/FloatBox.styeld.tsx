import { alpha, styled } from '@mui/material/styles';
import { BoxProps, Box as MuiBox } from '@mui/material';

export const FloatSelectBox = styled(MuiBox, {
    shouldForwardProp: (props) => props !== 'selected' && props !== 'color',
})<{ selected: boolean; color: string } & BoxProps>(
    ({ theme, selected, color }) => `
    min_height: 240px;
    padding: 26px;
    border-radius: 12px;
    opacity: 0.6;

    transform: ${selected ? 'translateY(-5px)' : 'unset'};
    opacity: ${selected ? 1 : 0.6};

    background-color: ${color};
    border: 3px solid ${color};
    box-shadow: 0 8px 0 ${alpha(color, 0.6)};
    cursor: pointer;

    :hover {
        transform: translateY(-5px);
        opacity: 1;
    }

    @media only screen and (max-width: 1024px) {
        width: 50%;
        min-width: 240px;
        margin: 0 auto;
    }

    @media only screen and (min-width: 900px) {
        width: 240px;
    }
`,
);
