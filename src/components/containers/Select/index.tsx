import { useHistory } from 'react-router-dom';
import { Box, ChallengeBox, Typography } from './Select.styled';

const Select = () => {
    const history = useHistory();

    const startChallenge = () => {
        history.push('/start');
    };

    const manageChallenge = () => {
        history.push('/manage');
    };

    return (
        <Box className="select">
            <ChallengeBox onClick={startChallenge}>
                <Box sx={{ height: '100px' }} />
                <Typography variant="h5">Start</Typography>
                <Typography variant="h5">New Challenge</Typography>
            </ChallengeBox>
            <ChallengeBox onClick={manageChallenge}>
                <Box sx={{ height: '100px' }} />
                <Typography variant="h5">Manage</Typography>
                <Typography variant="h5">My Challenges</Typography>
            </ChallengeBox>
        </Box>
    );
};

export default Select;
