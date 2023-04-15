import { useHistory } from 'react-router-dom';
import { Box, Button, Stack, Typography } from './TreeDataBox.styled';

const TREE_STEP = ['lil seed', 'sprout', 'baby tree', 'growing', 'mature tree'];
const COLOR = ['#FBF7D3', '#E2F5C9', '#B8E296', '#96DE7D', '#70C86F'];
const BAR_COLOR = ['#AA9D95', '#B0C09B', '#8AA971', '#6EA45C', '#519350'];

type TreeDataBoxProps = {
    id: number;
    staked: string;
    step: string;
    lockup: string;
    create: string;
    goal: string;
};

export const TreeDataBox = (props: TreeDataBoxProps) => {
    const { id, step, staked, lockup, create, goal } = props;
    const history = useHistory();
    const ratio = 1;

    const moveToDetail = () => {
        history.push(`/manage/detail/${id}`);
    };

    return (
        <Box
            className="tree_data"
            color={COLOR[Number(step)] ?? '#FFF'}
            barColor={BAR_COLOR[Number(step)] ?? '#FFF'}
            ratio={ratio}
        >
            <Stack>
                <Typography className="tree_step" variant="h5">
                    {TREE_STEP[Number(step)] ?? 'Unknown'}
                </Typography>
                <Typography variant="h5">{staked} ETH</Typography>
            </Stack>
            <Box className="image" />
            <Box className="graph" color={COLOR[Number(step)] ?? '#FFF'}>
                <Box className="graph_bar" />
            </Box>
            <Button onClick={moveToDetail}>
                <Typography variant="h6">view challenge</Typography>
            </Button>
        </Box>
    );
};
