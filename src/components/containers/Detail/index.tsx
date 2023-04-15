import * as React from 'react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { RootState } from '@/reducers';

import { IconCalendar } from '@/components/svgs/IconCalendar';
import { IconCoinStack } from '@/components/svgs/IconCoinStack';
import { IconMoneyBag } from '@/components/svgs/IconMoneyBag';
import { Table } from '@/components/commons/Table';
import { Box, Button, IconButton, Stack, Typography } from './Detail.styled';
import { CalendarDialog } from './components/CalendarDialog';
import { Loading } from '@/components/commons/Loadings';
import { shortenAddress } from '@/utils/utilFunctions';
import { useActions } from '@/components/providers/ActionsProvider';

const TREE_STEP = ['lil seed', 'sprout', 'baby tree', 'growing', 'mature tree'];

const Detail = () => {
    const {
        nft: { url, nft },
        water: { water, date },
    } = useSelector((state: RootState) => state);
    const { WaterActions } = useActions();
    const history = useHistory();

    const [id, setId] = useState<number | null>(null);
    const [calendarOpen, setCalendarOpen] = useState(false);
    const [treeDetailData, setTreeDetailData] = useState<any>(null);
    const [diffDate, setDiffDate] = useState(0);
    const [ratio, setRatio] = useState(0);
    const [totalDate, setTotalDate] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const idFromUrl = Number(history.location.pathname?.split('/').pop()) ?? 0;
        setId(idFromUrl);
    }, []);

    useEffect(() => {
        if (id !== null) WaterActions.getWateringData(id);
    }, [water.data, id]);

    useEffect(() => {
        if ((url.data ?? []).length > 0 && (nft.data ?? []).length > 0 && id !== null) {
            const urlData = url.data?.find((item) => item.id === id);
            const nftData = nft.data?.find((item) => item.id === id);
            const data: any = { ...urlData, ...nftData };
            const diff = Date.now() / 1000 - (data.create ?? 0);
            const diffDay = diff / 60 / 60 / 24;
            const rate = diffDay / data.lockup;

            const firstDate = new Date(data.create * 1000);
            const endDate = new Date(data.create * 1000 + data.lockup * 24 * 60 * 60 * 1000);
            const total = [];
            for (let d = firstDate; d <= endDate; d.setDate(d.getDate() + 1)) {
                total.push(d.toISOString().split('T')[0]);
            }

            setTotalDate(total as any);
            setDiffDate(Math.floor(diffDay));
            setRatio(rate);
            setTreeDetailData(data);
            setLoading(false);
        }
    }, [id, url.data, nft.data]);

    const onClickWatering = () => {
        if (id !== null) WaterActions.wateringTree(id);
    };

    const handleCalendarOpen = () => {
        setCalendarOpen(true);
    };

    const handleCalendarClose = () => {
        setCalendarOpen(false);
    };

    return (
        <React.Fragment>
            {(totalDate.length !== 0 || !date.loading) && (
                <CalendarDialog
                    total={totalDate}
                    watered={date.data}
                    open={calendarOpen}
                    onClose={handleCalendarClose}
                />
            )}
            <Box className="detail_page">
                <Stack className="title">
                    <Typography className="my_challenge">my challenges</Typography>
                    <Stack className="button_group">
                        <Button className="watering" onClick={onClickWatering}>
                            {water.loading && <Loading />}
                            <Typography variant="h4">watering</Typography>
                        </Button>
                        <IconButton className="calendar" onClick={handleCalendarOpen}>
                            {(totalDate.length === 0 || date.loading) && <Loading />}
                            <IconCalendar />
                        </IconButton>
                    </Stack>
                </Stack>
                {treeDetailData && (
                    <Stack className="detail_contents">
                        <Stack className="summary_area">
                            <Stack className="photo_area">
                                <img src={treeDetailData.url} width="100%" height="100%" />
                            </Stack>
                            <Stack className="status_area">
                                <Stack className="reward_and_deposit">
                                    <Stack className="item">
                                        <Typography variant="h6">Rewards</Typography>
                                        <Typography className="amount" variant="h4">
                                            0 MATIC
                                        </Typography>
                                        <IconCoinStack />
                                    </Stack>
                                    <Stack className="item">
                                        <Typography variant="h6">My Deposit</Typography>
                                        <Typography className="amount" variant="h4">
                                            {treeDetailData.staked} MATIC
                                        </Typography>
                                        <IconMoneyBag />
                                    </Stack>
                                </Stack>
                                <Stack className="item item_challenge">
                                    <Stack className="status">
                                        <Typography variant="h6">Challenge Status</Typography>
                                        <Typography variant="h6">{TREE_STEP[treeDetailData.step]}</Typography>
                                    </Stack>
                                    <Stack className="status">
                                        <Typography variant="h6">Challenge Progression</Typography>
                                        <Typography variant="h6">
                                            {Math.floor(diffDate)} of {treeDetailData.lockup} days
                                        </Typography>
                                    </Stack>
                                    <Box className="graph" ratio={ratio}>
                                        <Box className="graph_bar" />
                                    </Box>
                                </Stack>
                            </Stack>
                        </Stack>
                        <Typography className="subtitle" variant="h6">
                            Challenge metadatas
                        </Typography>
                        <Stack className="item">
                            <Stack className="metadatas">
                                <Typography variant="h6">creation date</Typography>
                                {/* <Typography variant="h6">{date}</Typography> */}
                            </Stack>
                            <Stack className="metadatas">
                                <Typography variant="h6">lock-up amounts</Typography>
                                <Typography variant="h6">{treeDetailData.staked}</Typography>
                            </Stack>
                            <Stack className="metadatas">
                                <Typography variant="h6">lock-up period</Typography>
                                <Typography variant="h6">{treeDetailData.lockup}</Typography>
                            </Stack>
                            <Stack className="metadatas">
                                <Typography variant="h6">goal</Typography>
                                <Typography variant="h6">{treeDetailData.goal}</Typography>
                            </Stack>
                            <Stack className="metadatas">
                                <Typography variant="h6">donation destination</Typography>
                                <Typography variant="h6">{shortenAddress(treeDetailData?.donation ?? '')}</Typography>
                            </Stack>
                        </Stack>
                    </Stack>
                )}
            </Box>
        </React.Fragment>
    );
};

export default Detail;
