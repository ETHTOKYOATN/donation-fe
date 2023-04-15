type IconEthTextFieldProps = {
    width?: number;
    height?: number;
    fill?: string;
};
export const IconEthTextField = (props: IconEthTextFieldProps) => {
    const { width, height, fill } = props;

    return (
        <svg
            width={width || '65'}
            height={height || '66'}
            viewBox="0 0 70 70"
            fill={fill || 'none'}
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect y="0.335938" width={width || '65'} height={height || '65'} rx="20" fill={fill || '#86614D'} />
            <path d="M46.0141 33.2228L32.5002 10.8359L18.9863 33.2228L32.5002 41.2327L46.0141 33.2228Z" fill="white" />
            <path d="M46.0141 35.8155L32.5002 54.8359L18.9863 35.8155L32.4863 43.7919L46.0141 35.8155Z" fill="white" />
        </svg>
    );
};
