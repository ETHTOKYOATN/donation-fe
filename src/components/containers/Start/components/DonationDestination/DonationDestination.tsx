import useResponsive from '@/hooks/useResponsive';
import { FloatBox } from '../FloatBox';
import { Stack, Typography } from './DonationDestination.styled';

const DONATION_DESTINATION: {
    destination:
        | 'Raising Scholarship Funding for Web3 Academy.'
        | 'Planting Trees in Mongolia to Create Green Areas.'
        | 'Creating an Emergency Support Fund for Natural Disasters.'
        | null;
    color: string;
}[] = [
    {
        destination: 'Raising Scholarship Funding for Web3 Academy.',
        color: '#FFF7B2',
    },
    {
        destination: 'Planting Trees in Mongolia to Create Green Areas.',
        color: '#B8E296',
    },
    {
        destination: 'Creating an Emergency Support Fund for Natural Disasters.',
        color: '#93E59B',
    },
];

type DonationDestinationProps = {
    destination:
        | 'Raising Scholarship Funding for Web3 Academy.'
        | 'Planting Trees in Mongolia to Create Green Areas.'
        | 'Creating an Emergency Support Fund for Natural Disasters.'
        | null;
    setDestination: (
        destination:
            | 'Raising Scholarship Funding for Web3 Academy.'
            | 'Planting Trees in Mongolia to Create Green Areas.'
            | 'Creating an Emergency Support Fund for Natural Disasters.'
            | null,
    ) => void;
};
export const DonationDestination = (props: DonationDestinationProps) => {
    const { destination, setDestination } = props;
    const isMobile = useResponsive('down', 900);

    return (
        <Stack className="donation_destination">
            <div>
                <Typography variant="h3">a donation destination !</Typography>
                <Typography variant="h6">where do you want to ...</Typography>
            </div>
            <Stack className="destination_contents">
                {DONATION_DESTINATION.map((item) => (
                    <FloatBox
                        key={item.destination}
                        color={item.color}
                        selected={item.destination === destination}
                        onClick={() => setDestination(item.destination)}
                    >
                        <Typography variant="h6">{item.destination}</Typography>
                    </FloatBox>
                ))}
                {isMobile && <FloatBox />}
            </Stack>
        </Stack>
    );
};
