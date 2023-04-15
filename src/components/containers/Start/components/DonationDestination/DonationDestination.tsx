import useResponsive from '@/hooks/useResponsive';
import { FloatBox } from '../FloatBox';
import { Stack, Typography } from './DonationDestination.styled';

const DONATION_DESTINATION = [
    {
        destination: 'a',
        color: '#FFF7B2',
    },
    {
        destination: 'b',
        color: '#B8E296',
    },
    {
        destination: 'c',
        color: '#93E59B',
    },
];

export const DonationDestination = () => {
    const isMobile = useResponsive('down', 900);

    return (
        <Stack className="donation_destination">
            <div>
                <Typography variant="h3">a donation destination !</Typography>
                <Typography variant="h6">where do you want to ...</Typography>
            </div>
            <Stack className="destination_contents">
                {DONATION_DESTINATION.map((item) => (
                    <FloatBox key={item.destination} color={item.color}>
                        <Typography variant="h3">{item.destination}</Typography>
                    </FloatBox>
                ))}
                {isMobile && <FloatBox />}
            </Stack>
        </Stack>
    );
};
