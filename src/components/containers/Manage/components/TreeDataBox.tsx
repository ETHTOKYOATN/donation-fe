import { useHistory } from 'react-router-dom';
import { Box, Button, Stack, Typography } from './TreeDataBox.styled';

const TREE_STEP = ['lil seed', 'sprout', 'baby tree', 'growing', 'mature tree'];
const COLOR = ['#FBF7D3', '#E2F5C9', '#B8E296', '#96DE7D', '#70C86F'];
const BAR_COLOR = ['#AA9D95', '#B0C09B', '#8AA971', '#6EA45C', '#519350'];

type TreeDataBoxProps = {
    id: number;
    staked: string;
    lockup: string;
    create: string;
    goal: string;
    watered: string;
    donation: string;
    url: string;
    step: number;
};

export const TreeDataBox = (props: TreeDataBoxProps) => {
    const { id, step, staked, url, create } = props;
    const history = useHistory();
    const diff = Math.floor(Date.now() / 1000) - Number(create);
    const diffDay = diff / 60 / 60 / 24;
    const ratio = diffDay / 30 > 1 ? 1 : diffDay / 30;

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
                <Typography variant="h5">{staked} MATIC</Typography>
            </Stack>
            <Box className="image">
                <img src={url} width="100%" height="100%" />
            </Box>
            <Box className="graph" color={COLOR[Number(step)] ?? '#FFF'}>
                <Box className="graph_bar" />
            </Box>
            <Button onClick={moveToDetail}>
                <Typography variant="h6">view challenge</Typography>
            </Button>
        </Box>
    );
};
