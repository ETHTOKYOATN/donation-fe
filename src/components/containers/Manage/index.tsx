import { useSelector } from 'react-redux';
import { Box, Button, Grid, Stack, Typography } from './Manage.styled';
// import { TreeDataBox } from './components/TreeDataBox';
import { useHistory } from 'react-router-dom';
import { RootState } from '@/reducers';
import { useEffect, useState } from 'react';
import { useActions } from '@/components/providers/ActionsProvider';
import { TreeDataBox } from './components/TreeDataBox';
import { LinearProgress } from '@mui/material';

const Manage = () => {
    const { url, nft, count } = useSelector((state: RootState) => state.nft);
    const { NftActions } = useActions();
    const history = useHistory();
    const [loading, setLoading] = useState(true);
    const [treeData, setTreeData] = useState<any>(null);

    useEffect(() => {
        setLoading(true);
        NftActions.getUserNFTCount();
    }, []);

    useEffect(() => {
        if (count.data) {
            NftActions.getNFTData(count.data);
            NftActions.getTokenURLData(count.data);
        }
    }, [count.data]);

    useEffect(() => {
        if (count.data && nft.data && url.data) {
            setLoading(false);
            const data = [];
            for (let index = 0; index < count.data.length; index++) {
                const nftData = nft.data.find((item) => item.id === count.data![index]);
                const urlData = url.data.find((item) => item.id === count.data![index]);
                const dataConfigure = {
                    ...urlData,
                    ...nftData,
                };
                data.push(dataConfigure);
            }
            setTreeData(data);
        }
    }, [nft.data, url.data]);

    const moveToStart = () => {
        history.push('/start');
    };

    return (
        <Box>
            <Stack className="title">
                <Typography className="my_challenge">my challenges</Typography>
                <Button onClick={moveToStart}>
                    <Typography variant="h5">start new challenge</Typography>
                </Button>
            </Stack>
            {loading && <LinearProgress />}
            {treeData && (
                <Grid container spacing={4}>
                    {treeData.map((item: any) => (
                        <Grid key={item.id} item xs={6} md={4}>
                            <TreeDataBox {...item} />
                        </Grid>
                    ))}
                </Grid>
            )}
        </Box>
    );
};

export default Manage;
