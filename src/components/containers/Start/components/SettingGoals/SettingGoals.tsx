import { Stack, Typography } from './SettingGoals.styled';

export const SettingGoals = () => {
    return (
        <Stack className="setting_goals">
            <div>
                <Typography variant="h3">Setting Goals (optional)</Typography>
                <Typography variant="h6">How often?</Typography>
            </div>
            <Stack className="goal_contents"></Stack>
        </Stack>
    );
};
