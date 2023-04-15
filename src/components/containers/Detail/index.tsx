import * as React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { RootState } from '@/reducers';

import { IconCalendar } from '@/components/svgs/IconCalendar';
import { IconCoinStack } from '@/components/svgs/IconCoinStack';
import { IconMoneyBag } from '@/components/svgs/IconMoneyBag';
import { Table } from '@/components/commons/Table';
import { Box, Button, IconButton, Stack, Typography } from './Detail.styled';
import { CalendarDialog } from './components/CalendarDialog';

type DetailTypes = {
    id: number;
    staked: string; // 2 ETH
    step: string; // 1
    lockup: string; // 90 days
    create: string; // 2023-02-23
    watered: string; // ['2023-02-23', '2023-02-24', '2023-02-25']
    goal: string; // Checking Attendance Everyday
    donation: string; // Name of donation comp
};
const Detail = (props: DetailTypes) => {
    const { nft } = useSelector((state: RootState) => state.nft);
    const history = useHistory();
    const id = history.location.pathname.split('/').pop();
    const [calendarOpen, setCalendarOpen] = useState(false);

    const handleCalendarOpen = () => {
        setCalendarOpen(true);
    };

    const handleCalendarClose = () => {
        setCalendarOpen(false);
    };

    return (
        <React.Fragment>
            <CalendarDialog open={calendarOpen} onClose={handleCalendarClose} />
            <Box className="detail_page">
                <Stack className="title">
                    <Typography className="my_challenge">my challenges</Typography>
                    <Stack className="button_group">
                        <Button className="watering">
                            <Typography variant="h4">watering</Typography>
                        </Button>
                        <IconButton onClick={handleCalendarOpen}>
                            <IconCalendar />
                        </IconButton>
                    </Stack>
                </Stack>
                <Stack className="detail_contents">
                    <Stack className="summary_area">
                        <Stack className="photo_area"></Stack>
                        <Stack className="status_area">
                            <Stack className="reward_and_deposit">
                                <Stack className="item">
                                    <Typography variant="h6">Rewards</Typography>
                                    <Typography className="amount" variant="h4">
                                        0 ETH
                                    </Typography>
                                    <IconCoinStack />
                                </Stack>
                                <Stack className="item">
                                    <Typography variant="h6">My Deposit</Typography>
                                    <Typography className="amount" variant="h4">
                                        0 ETH
                                    </Typography>
                                    <IconMoneyBag />
                                </Stack>
                            </Stack>
                            <Stack className="item item_challenge">
                                <Stack className="status">
                                    <Typography variant="h6">Challenge Status</Typography>
                                    <Typography variant="h6">lil seed</Typography>
                                </Stack>
                                <Stack className="status">
                                    <Typography variant="h6">Challenge Progression</Typography>
                                    <Typography variant="h6">14 of 180 days</Typography>
                                </Stack>
                                <Box className="graph" ratio={0.4}>
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
                            <Typography variant="h6">-</Typography>
                        </Stack>
                        <Stack className="metadatas">
                            <Typography variant="h6">lock-up amounts</Typography>
                            <Typography variant="h6">-</Typography>
                        </Stack>
                        <Stack className="metadatas">
                            <Typography variant="h6">lock-up period</Typography>
                            <Typography variant="h6">-</Typography>
                        </Stack>
                        <Stack className="metadatas">
                            <Typography variant="h6">goal</Typography>
                            <Typography variant="h6">-</Typography>
                        </Stack>
                        <Stack className="metadatas">
                            <Typography variant="h6">donation destination</Typography>
                            <Typography variant="h6">-</Typography>
                        </Stack>
                    </Stack>
                    <Typography className="subtitle" variant="h6">
                        Challenge logs
                    </Typography>
                    <Table
                        title="challenge_logs"
                        tableData={[
                            {
                                note: <Typography>watered lil sprout</Typography>,
                                date: <Typography>2023-04-14</Typography>,
                                details: <Typography>view in explorer</Typography>,
                            },
                            {
                                note: <Typography>watered lil sprout</Typography>,
                                date: <Typography>2023-04-14</Typography>,
                                details: <Typography>view in explorer</Typography>,
                            },
                            {
                                note: <Typography>watered lil sprout</Typography>,
                                date: <Typography>2023-04-14</Typography>,
                                details: <Typography>view in explorer</Typography>,
                            },
                        ]}
                        noDataLabel={['Note', 'Date', 'Details']}
                        noDataColspan={3}
                    />
                </Stack>
            </Box>
        </React.Fragment>
    );
};

export default Detail;
