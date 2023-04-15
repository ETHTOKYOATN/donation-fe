import * as React from 'react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { RootState } from '@/reducers';

import { IconArrowBack } from '@/components/svgs/IconArrowBack';
import { IconArrowNext } from '@/components/svgs/IconArrowNext';
import { useActions } from '@/components/providers/ActionsProvider';
import { Box, Button, Stack, TiltShakeBox, Typography } from './Start.styled';
import { SetAmount } from './components/SetAmount/SetAmount';
import { LockupPeriod } from './components/LockupPeriod/LockupPeriod';
import { SettingGoals } from './components/SettingGoals/SettingGoals';
import { DonationDestination } from './components/DonationDestination/DonationDestination';

const Start = () => {
    const {
        wallet: { balance },
        nft: { nft },
    } = useSelector((state: RootState) => state);
    const { WalletActions, NftActions } = useActions();
    const history = useHistory();
    const [step, setStep] = useState(0);
    const [amount, setAmount] = useState('0');
    const [lockup, setLockup] = useState<'30' | '60' | '90' | null>(null);
    const [goal, setGoal] = useState('');
    const [destination, setDestination] = useState<
        | 'Raising Scholarship Funding for Web3 Academy.'
        | 'Planting Trees in Mongolia to Create Green Areas.'
        | 'Creating an Emergency Support Fund for Natural Disasters.'
        | null
    >(null);

    const [invalid, setInvalid] = useState(false);

    useEffect(() => {
        if (amount === '0') setInvalid(true);
    }, [amount]);

    useEffect(() => {
        WalletActions.getAddressBalance();

        return () => {};
    }, []);

    const nextStep = () => {
        setStep((prevStep) => prevStep + 1);
    };

    const prevStep = () => {
        setStep((prevStep) => prevStep - 1);
    };

    const onClickStartChallenge = () => {
        console.log('Clicked');
        NftActions.mintNft();
        // history.push('/manage');
    };

    return (
        <Box className="start">
            <Typography className="new_challenge" variant="h4">
                Start New Challenge
            </Typography>
            {step === 0 && <img src="/static/star_first.png" alt="star_first" width="203" height="27" />}
            {step === 1 && <img src="/static/star_second.png" alt="star_second" width="203" height="27" />}
            {step === 2 && <img src="/static/star_forth.png" alt="star_forth" width="203" height="27" />}
            {step === 3 && <img src="/static/star_fifth.png" alt="star_fifth" width="203" height="27" />}

            <Box className="start-contents">
                {step === 0 && <SetAmount amount={amount} setAmount={setAmount} balance={balance} />}
                {step === 1 && <LockupPeriod lockup={lockup} setLockup={setLockup} />}
                {step === 2 && <SettingGoals goal={goal} setGoal={setGoal} />}
                {step === 3 && <DonationDestination destination={destination} setDestination={setDestination} />}

                <Box className="button">
                    <TiltShakeBox onClick={prevStep}>
                        {step !== 0 && (
                            <React.Fragment>
                                <IconArrowBack />
                                <Typography variant="h6">Go back</Typography>
                            </React.Fragment>
                        )}
                    </TiltShakeBox>
                    {step !== 3 && (
                        <Stack>
                            <Button className="next" onClick={nextStep}>
                                <Typography className="next_button" variant="h4">
                                    Next
                                </Typography>
                                <IconArrowNext />
                            </Button>
                        </Stack>
                    )}
                    {step === 3 && (
                        <Button className="end_setting" onClick={onClickStartChallenge}>
                            <Typography className="start_challenge" variant="h4">
                                Start Challenge!
                            </Typography>
                        </Button>
                    )}
                </Box>
            </Box>
        </Box>
    );
};

export default Start;
