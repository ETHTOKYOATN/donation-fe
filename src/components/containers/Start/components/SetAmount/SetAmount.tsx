import { useState } from 'react';

import { Loading } from '@/components/commons/Loadings';
import { IconEthTextField } from '@/components/svgs/IconEthTextField';
import { Button, Stack, TextField, Typography } from '../SetAmount/SetAmount.styled';

import { balanceFormatter } from '@/utils/formatter';

type SetAmountProps = {
    balance: {
        loading: boolean;
        error: boolean;
        data: string | null;
    };
};
export const SetAmount = (props: SetAmountProps) => {
    const { balance } = props;
    const [amount, setAmount] = useState('0.00');

    const onSetAmount = (value: number | null) => {
        const balanceAmount = balanceFormatter(balance.data) ?? 0;
        if (value === null) setAmount(String(balanceAmount));
        else {
            if (value > balanceAmount) setAmount(String(balanceAmount));
            else setAmount(String(value));
        }
    };

    const onChangeTextField = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const balanceAmount = balanceFormatter(balance.data) ?? 0;
        setAmount(event.currentTarget.value);
        if (!isNaN(Number(event.currentTarget.value)) || event.currentTarget.value === '.') {
            let amount = event.currentTarget.value;

            if (amount[0] === '.') {
                amount = `0${amount}`;
            }
            if (amount.includes('.')) {
                const decimalPlace = (amount.split('.')[1] ?? []).length;
                if (decimalPlace > 6) {
                    amount = Number(amount).toFixed(6);
                }
            }

            if (Number(amount) > balanceAmount) amount = String(balanceAmount);

            setAmount(amount);
        }
    };

    return (
        <Stack className="set_amount">
            <div>
                <Typography variant="h3">Amounts</Typography>
                <Typography variant="h6">How much would you like to lock up your ETH?</Typography>
            </div>
            <Stack>
                <TextField
                    type="string"
                    variant="standard"
                    autoComplete="off"
                    InputProps={{
                        startAdornment: <IconEthTextField width={70} height={70} />,
                        endAdornment: <Typography variant="h4">ETH</Typography>,
                    }}
                    value={amount}
                    onChange={onChangeTextField}
                />
                <Typography variant="h6">Your Balance {balanceFormatter(balance.data)} ETH</Typography>
                <Stack className="button_group">
                    <Button onClick={() => onSetAmount(1)}>1.0 ETH 😇</Button>
                    <Button onClick={() => onSetAmount(0.5)}>0.5 ETH ☺️</Button>
                    <Button onClick={() => onSetAmount(0.1)}>0.1 ETH 😉</Button>
                    <Button onClick={() => onSetAmount(null)}>MAX 🔥</Button>
                </Stack>
                {balance.loading && <Loading />}
            </Stack>
        </Stack>
    );
};
