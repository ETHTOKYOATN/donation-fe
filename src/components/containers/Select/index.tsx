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
            <Box sx={{ minHeight: '300px' }} />
            <ChallengeBox onClick={startChallenge}>
                <img src="/static/start_new_challenge.png" alt="start_menu_challenge" width="265" height="300" />
                <Typography variant="h3">Start New</Typography>
                <Typography variant="h4">Challenge</Typography>
            </ChallengeBox>
            <ChallengeBox onClick={manageChallenge}>
                <img src="/static/manage_my_challenges.png" alt="start_menu_challenge" width="372" height="283" />
                <Typography variant="h3">Manage</Typography>
                <Typography variant="h4">My Challenges</Typography>
            </ChallengeBox>
        </Box>
    );
};

export default Select;
