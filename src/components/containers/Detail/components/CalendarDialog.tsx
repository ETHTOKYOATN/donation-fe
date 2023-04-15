import { Dialog, Stack, Typography } from './CalendarDialog.styled';

const lockup = 30;
const create = '2023-02-10';
const watered = [];

type CalendarItemProps = {
    date: number;
    watered: boolean;
};
const CalendarItem = (props: CalendarItemProps) => {
    const { date, watered } = props;
    return (
        <Stack className={`item watered-${watered}`}>
            <div>
                <Typography>Day {date}</Typography>
                {watered && <img src="/static/water.png" alt="water" width="76px" height="90px" />}
            </div>
        </Stack>
    );
};

type CalendarDialogType = {
    open: boolean;
    onClose: () => void;
    total: string[];
    watered: string[];
};
export const CalendarDialog = (props: CalendarDialogType) => {
    const { open, onClose, total, watered } = props;
    const totalWatered = total.map((item, index) => {
        console.log(watered.includes(item));
        console.log(item);
        console.log(watered);
        return {
            date: index + 1,
            watered: watered.includes(item),
        };
    });
    return (
        <Dialog open={open} onClose={onClose}>
            <Stack className="calendar">
                <Stack className="description_rules">
                    <Stack className="description">
                        <Typography variant="h4">Calendar</Typography>
                        <Typography>
                            Evolution based on the total number of times the plant has been watered.
                        </Typography>
                    </Stack>
                    <Stack className="rules">
                        <Typography>n times : evolve into a sprout</Typography>
                        <Typography>n times : evolve into a baby tree</Typography>
                        <Typography>n times : evolve into a growing tree</Typography>
                        <Typography>n times : evolve into a mature tree</Typography>
                    </Stack>
                </Stack>
                <Stack className="actual_calendar">
                    {totalWatered.map((item) => {
                        return <CalendarItem key={item.date} {...item} />;
                    })}
                </Stack>
            </Stack>
        </Dialog>
    );
};
