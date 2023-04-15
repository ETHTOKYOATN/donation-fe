import { useSelector } from 'react-redux';
import { Box, Button, Grid, Stack, Typography } from './Manage.styled';
// import { TreeDataBox } from './components/TreeDataBox';
import { useHistory } from 'react-router-dom';
import { RootState } from '@/reducers';
import { useEffect } from 'react';
import { useActions } from '@/components/providers/ActionsProvider';
import { TreeDataBox } from './components/TreeDataBox';

const Manage = () => {
    const { nft } = useSelector((state: RootState) => state.nft);
    const { NftActions } = useActions();
    const history = useHistory();

    useEffect(() => {
        NftActions.getNFTData();
    }, []);

    const moveToStart = () => {
        history.push('/start');
    };

    return (
        <Box>
            <Stack>
                <Typography className="my_challenge">my challenges</Typography>
                <Button onClick={moveToStart}>
                    <Typography variant="h5">start new challenge</Typography>
                </Button>
            </Stack>
            <Grid container spacing={4}>
                {(nft.data ?? []).map((item) => (
                    <Grid key={item.id} item xs={4}>
                        <TreeDataBox {...item} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Manage;
