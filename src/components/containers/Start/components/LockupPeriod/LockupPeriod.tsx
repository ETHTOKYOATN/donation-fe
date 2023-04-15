import useResponsive from '@/hooks/useResponsive';
import { FloatBox } from '../FloatBox';
import { Stack, Typography } from '../LockupPeriod/LockupPeriod.styled';

const LOCKUP_PERIOD: { day: '30' | '60' | '90'; color: string }[] = [
    {
        day: '30',
        color: '#FFF7B2',
    },
    {
        day: '60',
        color: '#B8E296',
    },
    {
        day: '90',
        color: '#93E59B',
    },
];

type LockupPeriodProps = {
    lockup: '30' | '60' | '90' | null;
    setLockup: (lockup: '30' | '60' | '90' | null) => void;
};
export const LockupPeriod = (props: LockupPeriodProps) => {
    const { lockup, setLockup } = props;
    const isMobile = useResponsive('down', 900);

    return (
        <Stack className="lockup_period">
            <div>
                <Typography variant="h3">Lock-up period</Typography>
                <Typography variant="h6">How much would you like to lock up your ETH?</Typography>
            </div>
            <Stack className="lockup_contents">
                {LOCKUP_PERIOD.map((item) => (
                    <FloatBox
                        key={item.day}
                        selected={lockup === item.day}
                        color={item.color}
                        onClick={() => setLockup(item.day)}
                    >
                        <Typography variant="h3">{item.day}</Typography>
                        <Typography variant="h3">Days</Typography>
                    </FloatBox>
                ))}
                {isMobile && <FloatBox />}
            </Stack>
        </Stack>
    );
};
