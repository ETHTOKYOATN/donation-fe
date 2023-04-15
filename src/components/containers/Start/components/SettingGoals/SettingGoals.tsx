import { Stack, TextField, Typography } from './SettingGoals.styled';

type SettingGoalsProps = {
    goal: string;
    setGoal: (goal: string) => void;
};
export const SettingGoals = (props: SettingGoalsProps) => {
    const { goal, setGoal } = props;

    const onChangeTextField = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const length = new TextEncoder().encode(event.currentTarget.value).length;
        if (length <= 600) {
            setGoal(event.currentTarget.value);
        } else {
            setGoal(goal);
        }
    };

    return (
        <Stack className="setting_goals">
            <div>
                <Typography variant="h3">Setting Goals</Typography>
                <Typography variant="h6">How often?</Typography>
            </div>
            <Stack className="goal_contents">
                <TextField
                    multiline
                    rows={4}
                    type="string"
                    variant="outlined"
                    autoComplete="off"
                    value={goal}
                    onChange={onChangeTextField}
                />
            </Stack>
        </Stack>
    );
};
