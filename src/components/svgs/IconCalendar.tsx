type IconCalendarProps = {
    width?: number;
    height?: number;
    fill?: string;
};
export const IconCalendar = (props: IconCalendarProps) => {
    const { width, height, fill } = props;

    return (
        <svg
            width={width || '53'}
            height={height || '57'}
            viewBox="0 0 53 57"
            fill={fill || 'none'}
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect x="9.69336" y="0.839844" width="6" height="14.4012" rx="2" fill={fill || '#86614D'} />
            <path
                d="M2.23438 20.6826C2.23438 14.8836 6.93538 10.1826 12.7344 10.1826H40.333C46.132 10.1826 50.833 14.8836 50.833 20.6826V50.0822C50.833 52.5675 48.8183 54.5822 46.333 54.5822H6.73438C4.24909 54.5822 2.23438 52.5675 2.23438 50.0822V20.6826Z"
                stroke={fill || '#86614D'}
                strokeWidth="3"
            />
            <path
                d="M0.734375 14.6826C0.734375 11.3689 3.42067 8.68262 6.73438 8.68262H46.333C49.6467 8.68262 52.333 11.3689 52.333 14.6826V21.7998H0.734375V14.6826Z"
                fill={fill || '#86614D'}
            />
            <rect x="37.374" y="0.839844" width="6" height="14.4012" rx="2" fill={fill || '#86614D'} />
        </svg>
    );
};
